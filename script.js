 


/* =========================================================
   RIGHT DRAWER
========================================================= */

const openDrawer =
    document.getElementById("openDrawer");

const closeDrawer =
    document.getElementById("closeDrawer");

const drawerOverlay =
    document.getElementById("drawerOverlay");


openDrawer.addEventListener(
    "click",
    () => {

        drawerOverlay.classList.add("open");

        document.body.style.overflow =
            "hidden";

    }
);


closeDrawer.addEventListener(
    "click",
    () => {

        drawerOverlay.classList.remove("open");

        document.body.style.overflow =
            "";

    }
);


drawerOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            drawerOverlay
        ) {

            drawerOverlay.classList.remove(
                "open"
            );

            document.body.style.overflow =
                "";

        }

    }
);


/* =========================================================
   ESCAPE CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            drawerOverlay.classList.remove(
                "open"
            );

            document.body.style.overflow =
                "";

        }

    }
);


/* =========================================================
   DASHBOARD MOUSE TILT
========================================================= */

const dashboardWrap =
    document.getElementById(
        "dashboardWrap"
    );

const dashboard =
    document.getElementById(
        "dashboard"
    );


dashboardWrap.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900
        ) return;


        const rect =
            dashboardWrap.getBoundingClientRect();


        const x =
            (
                event.clientX -
                rect.left
            ) /
            rect.width -
            .5;


        const y =
            (
                event.clientY -
                rect.top
            ) /
            rect.height -
            .5;


        dashboard.style.transform =

            `
            perspective(1400px)
            rotateX(${y * -3}deg)
            rotateY(${x * 4}deg)
            scale(1.008)
            `;

    }
);


dashboardWrap.addEventListener(
    "mouseleave",
    () => {

        dashboard.style.transform =

            `
            perspective(1400px)
            rotateX(2deg)
            rotateY(0deg)
            scale(1)
            `;

    }
);


/* =========================================================
   IMAGE PARALLAX
========================================================= */

const productVisual =
    document.querySelector(
        ".product-visual"
    );


const cards =
    document.querySelectorAll(
        ".visual-card"
    );


productVisual.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900
        ) return;


        const rect =
            productVisual.getBoundingClientRect();


        const x =
            (
                event.clientX -
                rect.left
            ) /
            rect.width -
            .5;


        const y =
            (
                event.clientY -
                rect.top
            ) /
            rect.height -
            .5;


        cards.forEach(
            (card, index) => {

                const depth =
                    index % 2 === 0
                    ? 10
                    : 6;


                card.style.marginLeft =
                    `${x * depth}px`;


                card.style.marginTop =
                    `${y * depth}px`;

            }
        );

    }
);


productVisual.addEventListener(
    "mouseleave",
    () => {

        cards.forEach(
            card => {

                card.style.marginLeft =
                    "";

                card.style.marginTop =
                    "";

            }
        );

    }
);


/* =========================================================
   BUTTON RIPPLE
========================================================= */

document
.querySelectorAll(".hero-button")
.forEach(
    button => {

        button.addEventListener(
            "click",
            function(event) {


                const circle =
                    document.createElement(
                        "span"
                    );


                const rect =
                    this.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                circle.style.position =
                    "absolute";

                circle.style.width =
                    `${size}px`;

                circle.style.height =
                    `${size}px`;

                circle.style.left =
                    `${
                        event.clientX -
                        rect.left -
                        size / 2
                    }px`;

                circle.style.top =
                    `${
                        event.clientY -
                        rect.top -
                        size / 2
                    }px`;

                circle.style.borderRadius =
                    "50%";

                circle.style.background =
                    "rgba(255,255,255,.45)";

                circle.style.transform =
                    "scale(0)";

                circle.style.pointerEvents =
                    "none";

                circle.style.zIndex =
                    "4";

                circle.style.animation =
                    "buttonRipple .65s ease-out";


                this.appendChild(
                    circle
                );


                setTimeout(
                    () => {

                        circle.remove();

                    },
                    700
                );

            }
        );

    }
);


/* =========================================================
   RIPPLE ANIMATION
========================================================= */

const rippleStyle =
    document.createElement("style");


rippleStyle.innerHTML = `

@keyframes buttonRipple {

    0% {

        transform: scale(0);

        opacity: .8;

    }

    100% {

        transform: scale(2.5);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    rippleStyle
);
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenu.addEventListener(
    "click",
    () => {

        alert(
            "Mobile navigation will be added in the next phase."
        );

    }
);

// /* =========================================================
//    SBL SPOTLIGHT SCROLL ANIMATION
// ========================================================= */

// const spotlightCards =
//     document.querySelectorAll(".spot-card");

// const spotlightProgress =
//     document.querySelector(".spotlight-progress span");


// const spotlightObserver =
//     new IntersectionObserver(
//         (entries) => {

//             entries.forEach((entry) => {

//                 if (entry.isIntersecting) {

//                     entry.target.classList.add("visible");

//                 }

//             });

//         },
//         {
//             threshold:0.18
//         }
//     );


// spotlightCards.forEach((card) => {

//     spotlightObserver.observe(card);

// });


// /* =========================================================
//    SCROLL PROGRESS
// ========================================================= */

// window.addEventListener("scroll", () => {

//     const section =
//         document.querySelector(".sbl-spotlight");

//     if (!section) return;

//     const rect =
//         section.getBoundingClientRect();

//     const sectionHeight =
//         section.offsetHeight;

//     const viewport =
//         window.innerHeight;

//     const travelled =
//         -rect.top;

//     const total =
//         sectionHeight - viewport;

//     let progress =
//         travelled / total;

//     progress =
//         Math.max(
//             0,
//             Math.min(1, progress)
//         );

//     if (spotlightProgress) {

//         spotlightProgress.style.transform =
//             `scaleX(${0.2 + progress * 2.8})`;

//     }

// });


// /* =========================================================
//    CARD MOUSE TILT
// ========================================================= */

// spotlightCards.forEach((card) => {

//     card.addEventListener("mousemove", (e) => {

//         const rect =
//             card.getBoundingClientRect();

//         const x =
//             e.clientX - rect.left;

//         const y =
//             e.clientY - rect.top;

//         const centerX =
//             rect.width / 2;

//         const centerY =
//             rect.height / 2;

//         const rotateX =
//             ((y - centerY) / centerY) * -2;

//         const rotateY =
//             ((x - centerX) / centerX) * 2;

//         card.style.transform =
//             `perspective(1000px)
//              rotateX(${rotateX}deg)
//              rotateY(${rotateY}deg)
//              translateY(-5px)`;
//     });


//     card.addEventListener("mouseleave", () => {

//         card.style.transform =
//             "";

//     });

// });
 



/* =========================================================
   SBL SPOTLIGHT — COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   CARD SCROLL REVEAL
========================================================= */

const spotlightCards =
    document.querySelectorAll(".spot-card");


const spotlightObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


spotlightCards.forEach((card) => {

    spotlightObserver.observe(card);

});


/* =========================================================
   SPOTLIGHT SCROLL PROGRESS
========================================================= */

const spotlightSection =
    document.querySelector(".sbl-spotlight");

const spotlightProgress =
    document.querySelector(
        ".spotlight-progress span"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            !spotlightSection ||
            !spotlightProgress
        ) {
            return;
        }


        const rect =
            spotlightSection.getBoundingClientRect();


        const sectionHeight =
            spotlightSection.offsetHeight;


        const viewportHeight =
            window.innerHeight;


        const totalScroll =
            sectionHeight -
            viewportHeight;


        const currentScroll =
            -rect.top;


        let progress =
            currentScroll /
            totalScroll;


        progress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        /*
           Only animate the small progress bar.
           The Spotlight text itself NEVER moves.
        */

        spotlightProgress.style.transform =
            `scaleX(${0.35 + progress * 2.4})`;

    },

    {
        passive: true
    }

);


/* =========================================================
   CARD 3D HOVER
========================================================= */

spotlightCards.forEach((card) => {


    card.addEventListener(
        "mousemove",
        (event) => {

            /*
               Don't apply 3D effect on touch devices.
            */

            if (
                window.innerWidth <= 1000
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const mouseX =
                event.clientX -
                rect.left;


            const mouseY =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (
                    (mouseY - centerY) /
                    centerY
                ) * -1.5;


            const rotateY =
                (
                    (mouseX - centerX) /
                    centerX
                ) * 1.5;


            card.style.transform =
                `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-7px)
                scale(1.005)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   SMOOTH CARD STAGGER
========================================================= */

spotlightCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    }
);


/* =========================================================
   RESET TRANSITION DELAY AFTER REVEAL
========================================================= */

setTimeout(() => {

    spotlightCards.forEach(
        (card) => {

            card.style.transitionDelay =
                "";

        }
    );

}, 1500);



/* =========================================================
   SBL FEATURES PHASE
   Scroll + Filter + 3D interactions
   ========================================================= */

(function(){

  const section =
    document.querySelector(
      ".sbl-features-phase"
    );

  if(!section) return;


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealItems =
    section.querySelectorAll(
      ".sbl-feature-reveal"
    );


  if("IntersectionObserver" in window){

    const revealObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach(entry => {

            if(entry.isIntersecting){

              entry.target.classList.add(
                "sbl-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },

        {
          threshold:0.12,

          rootMargin:
            "0px 0px -40px 0px"
        }

      );


    revealItems.forEach(item => {

      revealObserver.observe(item);

    });


  }else{

    revealItems.forEach(item => {

      item.classList.add(
        "sbl-visible"
      );

    });

  }


  /* =======================================================
     FEATURE FILTER
     ======================================================= */

  const tabs =
    section.querySelectorAll(
      ".sbl-feature-tab"
    );

  const cards =
    section.querySelectorAll(
      ".sbl-feature-card"
    );


  tabs.forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        tabs.forEach(item => {

          item.classList.remove(
            "active"
          );

        });


        tab.classList.add(
          "active"
        );


        const selected =
          tab.getAttribute(
            "data-feature-filter"
          );


        cards.forEach(card => {

          const category =
            card.getAttribute(
              "data-feature-category"
            );


          const shouldShow =
            selected === "all" ||
            category === selected;


          if(shouldShow){

            card.classList.remove(
              "sbl-filter-hidden"
            );


            card.style.animation =
              "none";


            requestAnimationFrame(() => {

              card.style.animation =
                "sblFeatureFilterIn .45s ease both";

            });


          }else{

            card.classList.add(
              "sbl-filter-hidden"
            );

          }

        });

      }
    );

  });


  /* =======================================================
     3D CARD HOVER
     ======================================================= */

  const canHover =
    window.matchMedia(
      "(pointer:fine)"
    ).matches &&

    window.matchMedia(
      "(min-width:900px)"
    ).matches;


  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if(canHover && !reduceMotion){

    cards.forEach(card => {

      card.addEventListener(
        "mousemove",
        event => {

          if(
            card.classList.contains(
              "sbl-filter-hidden"
            )
          ){

            return;

          }


          const rect =
            card.getBoundingClientRect();


          const x =
            (event.clientX - rect.left) /
            rect.width;


          const y =
            (event.clientY - rect.top) /
            rect.height;


          const rotateX =
            (0.5 - y) * 4.5;


          const rotateY =
            (x - 0.5) * 5.5;


          card.style.transform =

            `perspective(1000px)
             translateY(-9px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform = "";

        }
      );

    });

  }


  /* =======================================================
     TECH GRID PARALLAX
     ======================================================= */

  const grid =
    section.querySelector(
      ".sbl-fx-grid"
    );


  if(grid && !reduceMotion){

    let ticking = false;


    window.addEventListener(
      "scroll",
      () => {

        if(ticking) return;

        ticking = true;


        requestAnimationFrame(() => {

          const rect =
            section.getBoundingClientRect();


          const progress =
            (
              window.innerHeight -
              rect.top
            ) /
            (
              window.innerHeight +
              rect.height
            );


          const movement =
            Math.max(
              -70,
              Math.min(
                70,
                progress * 90
              )
            );


          grid.style.transform =

            `perspective(750px)
             rotateX(65deg)
             translateY(${80 + movement}px)`;


          ticking = false;

        });

      },

      {
        passive:true
      }

    );

  }


  /* =======================================================
     POINTER GLOW
     ======================================================= */

  if(canHover && !reduceMotion){

    const glow =
      document.createElement(
        "div"
      );


    glow.className =
      "sbl-features-pointer-glow";


    section.appendChild(glow);


    Object.assign(
      glow.style,
      {

        position:"absolute",

        width:"280px",

        height:"280px",

        borderRadius:"50%",

        pointerEvents:"none",

        zIndex:"-1",

        opacity:"0",

        background:
          "radial-gradient(circle, rgba(8,127,215,.09), transparent 68%)",

        transform:
          "translate(-50%,-50%)",

        transition:
          "opacity .25s ease"

      }
    );


    // section.addEventListener(
    //   "mousemove",
    //   event => {

    //     const rect =
    //       section.getBoundingClientRect();


    //     glow.style.left =
    //       `${event.clientX - rect.left}px`;


    //     glow.style.top =
    //       `${event.clientY - rect.top}px`;


    //     glow.style.opacity =
    //       "1";

    //   }
    // );


    section.addEventListener(
      "mouseleave",
      () => {

        glow.style.opacity =
          "0";

      }
    );

  }

})();


/* =========================================================
   FILTER ANIMATION
   ========================================================= */

const sblFeatureAnimation =
  document.createElement("style");


sblFeatureAnimation.textContent = `

@keyframes sblFeatureFilterIn{

  from{

    opacity:.15;

    transform:
      translateY(15px)
      scale(.985);

  }

  to{

    opacity:1;

    transform:
      translateY(0)
      scale(1);

  }

}

`;


document.head.appendChild(
  sblFeatureAnimation
);


/* =========================================================
   SBL PRICING JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const pricingElements = document.querySelectorAll(
        ".sbl-pricing-header, .sbl-plan"
    );

    const pricingObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "pricing-visible"
                    );

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    pricingElements.forEach(element => {

        pricingObserver.observe(element);

    });



    /* =====================================================
       BILLING TOGGLE
    ===================================================== */

    const billingToggle =
        document.getElementById("billingToggle");

    const billingText =
        document.querySelector(".billing-active");

    const monthlyPrices =
        document.querySelectorAll(".monthly-price");

    const billingLabel =
        document.querySelector(".plan-billing");


    let yearly = false;


    if (billingToggle) {

        billingToggle.addEventListener(
            "click",
            () => {

                yearly = !yearly;

                billingToggle.classList.toggle(
                    "yearly",
                    yearly
                );


                /*
                 * Current SBL pricing values are monthly.
                 * Yearly mode keeps the same displayed
                 * monthly-equivalent price until annual
                 * pricing is finalized.
                 */

                monthlyPrices.forEach(price => {

                    const value = yearly
                        ? price.dataset.yearly
                        : price.dataset.monthly;

                    price.textContent =
                        Number(value).toLocaleString("en-IN");

                });


                document
                    .querySelectorAll(".plan-billing")
                    .forEach(label => {

                        label.textContent =
                            yearly
                                ? "Annual billing"
                                : "Billed monthly";

                    });


                if (billingText) {

                    billingText.style.color =
                        yearly
                            ? "#707780"
                            : "#050505";
                }

            }
        );

    }



    /* =====================================================
       CARD POINTER EFFECT
    ===================================================== */

    const cards =
        document.querySelectorAll(".sbl-plan");


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 900) return;

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - .5) * -4;

                const rotateY =
                    ((x / rect.width) - .5) * 4;


                if (
                    card.classList.contains(
                        "sbl-plan-popular"
                    )
                ) {

                    card.style.transform =
                        `translateY(-12px)
                         scale(1.025)
                         perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                } else {

                    card.style.transform =
                        `translateY(-8px)
                         scale(1.01)
                         perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });



    /* =====================================================
       MOUSE GLOW
    ===================================================== */

    const pricingSection =
        document.querySelector(".sbl-pricing");


    if (pricingSection) {

        pricingSection.addEventListener(
            "mousemove",
            event => {

                const rect =
                    pricingSection.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                pricingSection.style.setProperty(
                    "--pricing-mouse-x",
                    `${x}px`
                );

                pricingSection.style.setProperty(
                    "--pricing-mouse-y",
                    `${y}px`
                );

            }
        );

    }



    /* =====================================================
       BUTTON RIPPLE
    ===================================================== */

    const buttons =
        document.querySelectorAll(".sbl-plan-btn");


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement("span");

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "10px";

                ripple.style.height =
                    "10px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.35)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.left =
                    `${event.offsetX}px`;

                ripple.style.top =
                    `${event.offsetY}px`;

                ripple.style.transform =
                    "translate(-50%,-50%)";

                ripple.style.animation =
                    "pricingRipple .65s ease-out";

                button.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });


});


/* =========================================================
   RIPPLE ANIMATION
========================================================= */

const pricingRippleStyle =
    document.createElement("style");

pricingRippleStyle.innerHTML = `

@keyframes pricingRipple {

    0% {
        width: 10px;
        height: 10px;
        opacity: .8;
    }

    100% {
        width: 400px;
        height: 400px;
        opacity: 0;
    }

}

`;

document.head.appendChild(pricingRippleStyle);


/* =========================================================
   SBL FAQ JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".sbl-faq-item"
        );


    faqItems.forEach(item => {

        const button =
            item.querySelector(
                ".sbl-faq-question"
            );


        button.addEventListener(
            "click",
            () => {

                const currentlyOpen =
                    item.classList.contains(
                        "active"
                    );


                /* Close every FAQ */

                faqItems.forEach(otherItem => {

                    otherItem.classList.remove(
                        "active"
                    );


                    const otherButton =
                        otherItem.querySelector(
                            ".sbl-faq-question"
                        );


                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


                /* Open selected FAQ */

                if (!currentlyOpen) {

                    item.classList.add(
                        "active"
                    );


                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const faqHeading =
        document.querySelector(
            ".sbl-faq-heading"
        );


    const revealItems =
        document.querySelectorAll(
            ".sbl-faq-item"
        );


    const faqObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "faq-show"
                        );

                        faqObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    if (faqHeading) {

        faqObserver.observe(
            faqHeading
        );

    }


    revealItems.forEach(
        (item, index) => {

            item.style.transitionDelay =
                `${index * 0.06}s`;

            faqObserver.observe(
                item
            );

        }
    );


});


/* =========================================================
   SBL FOOTER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FOOTER SCROLL REVEAL
    ===================================================== */

    const footerElements = document.querySelectorAll(
        ".sbl-footer-main > *, " +
        ".sbl-footer-ecosystem, " +
        ".sbl-footer-cta, " +
        ".sbl-footer-bottom"
    );

    const footerObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "sbl-footer-visible"
                    );

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.08
        }
    );


    footerElements.forEach(function (element, index) {

        element.style.transitionDelay =
            Math.min(index * 0.05, 0.3) + "s";

        footerObserver.observe(element);

    });



    /* =====================================================
       ECOSYSTEM HOVER EFFECT
    ===================================================== */

    const ecosystemItems =
        document.querySelectorAll(
            ".sbl-ecosystem-item"
        );


    ecosystemItems.forEach(function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                ecosystemItems.forEach(
                    function (otherItem) {

                        if (otherItem !== item) {

                            otherItem.style.opacity = "0.45";

                        }

                    }
                );

            }
        );


        item.addEventListener(
            "mouseleave",
            function () {

                ecosystemItems.forEach(
                    function (otherItem) {

                        otherItem.style.opacity = "";

                    }
                );

            }
        );

    });



    /* =====================================================
       SOCIAL ICON HOVER
    ===================================================== */

    const socialButtons =
        document.querySelectorAll(
            ".sbl-social"
        );


    socialButtons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                button.style.transform =
                    "translateY(-5px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "";

            }
        );

    });



    /* =====================================================
       CONTACT BOX HOVER
    ===================================================== */

    const contactBoxes =
        document.querySelectorAll(
            ".sbl-contact-box"
        );


    contactBoxes.forEach(function (box) {

        box.addEventListener(
            "mouseenter",
            function () {

                box.style.transform =
                    "translateX(5px)";

            }
        );


        box.addEventListener(
            "mouseleave",
            function () {

                box.style.transform =
                    "";

            }
        );

    });



    /* =====================================================
       FOOTER CTA
    ===================================================== */

    const footerCTA =
        document.querySelector(
            ".sbl-footer-cta > a"
        );


    if (footerCTA) {

        footerCTA.addEventListener(
            "click",
            function () {

                const contactSection =
                    document.querySelector(
                        "#contact"
                    );


                if (contactSection) {

                    contactSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }

});