 


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

/* =========================================================
   SBL MOBILE NAVIGATION
   Responsive hamburger menu + dropdowns
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu =
        document.getElementById("mobileMenu");

    const nav =
        document.querySelector(".nav");

    const header =
        document.querySelector(".header");


    /* -----------------------------------------------------
       SAFETY CHECK
    ----------------------------------------------------- */

    if (!mobileMenu || !nav) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE MOBILE MENU
    ===================================================== */

    mobileMenu.addEventListener("click", function (event) {

        event.stopPropagation();


        const isOpen =
            nav.classList.toggle("mobile-open");


        mobileMenu.classList.toggle(
            "active",
            isOpen
        );


        mobileMenu.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        mobileMenu.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );


        /* Prevent page scrolling while menu is open */

        document.body.style.overflow =
            isOpen ? "hidden" : "";


        /* Close dropdowns when menu is closed */

        if (!isOpen) {

            navItems.forEach(function (item) {

                item.classList.remove(
                    "mobile-active"
                );

            });

        }

    });


    /* =====================================================
       NAVIGATION ITEMS
    ===================================================== */

    const navItems =
        nav.querySelectorAll(".nav-item");


    /* =====================================================
       MOBILE DROPDOWN HANDLING
    ===================================================== */

    navItems.forEach(function (item) {

        const dropdown =
            item.querySelector(":scope > .dropdown");

        const navLink =
            item.querySelector(":scope > .nav-link");


        /* -------------------------------------------------
           Items without dropdown:
           Pricing / Industries / About
        ------------------------------------------------- */

        if (!dropdown || !navLink) {
            return;
        }


        /* -------------------------------------------------
           Items with dropdown:
           Features / Solutions / Products / Resources
        ------------------------------------------------- */

        navLink.addEventListener(
            "click",
            function (event) {

                /*
                 * Desktop:
                 * Keep your existing hover dropdown.
                 */

                if (window.innerWidth > 1000) {
                    return;
                }


                /*
                 * Mobile:
                 * Don't navigate.
                 * Open / close dropdown.
                 */

                event.preventDefault();

                event.stopPropagation();


                const currentlyOpen =
                    item.classList.contains(
                        "mobile-active"
                    );


                /* Close all other dropdowns */

                navItems.forEach(
                    function (otherItem) {

                        if (
                            otherItem !== item
                        ) {

                            otherItem.classList.remove(
                                "mobile-active"
                            );

                        }

                    }
                );


                /* Toggle selected dropdown */

                if (!currentlyOpen) {

                    item.classList.add(
                        "mobile-active"
                    );

                } else {

                    item.classList.remove(
                        "mobile-active"
                    );

                }

            }
        );

    });


    /* =====================================================
       CLOSE MENU AFTER CLICKING A REAL LINK
    ===================================================== */

    const realLinks =
        nav.querySelectorAll(
            ".dropdown-item, .nav-item > a.nav-link"
        );


    realLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (window.innerWidth > 1000) {
                    return;
                }


                /* Close menu */

                nav.classList.remove(
                    "mobile-open"
                );


                /* Reset hamburger */

                mobileMenu.classList.remove(
                    "active"
                );


                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenu.setAttribute(
                    "aria-label",
                    "Open navigation"
                );


                /* Restore page scrolling */

                document.body.style.overflow =
                    "";


                /* Close dropdowns */

                navItems.forEach(
                    function (item) {

                        item.classList.remove(
                            "mobile-active"
                        );

                    }
                );

            }
        );

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (window.innerWidth > 1000) {
                return;
            }


            if (!header) {
                return;
            }


            const clickedInsideHeader =
                header.contains(event.target);


            if (!clickedInsideHeader) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       CLOSE MOBILE MENU FUNCTION
    ===================================================== */

    function closeMobileMenu() {

        nav.classList.remove(
            "mobile-open"
        );


        mobileMenu.classList.remove(
            "active"
        );


        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );


        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation"
        );


        document.body.style.overflow =
            "";


        navItems.forEach(
            function (item) {

                item.classList.remove(
                    "mobile-active"
                );

            }
        );

    }


    /* =====================================================
       RESPONSIVE RESET
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             * When the user rotates the phone
             * or changes to desktop width,
             * completely reset mobile navigation.
             */

            if (window.innerWidth > 1000) {

                closeMobileMenu();

            }

        }
    );


});
 

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

/* =========================================================
   SBL MOBILE NAV — ABOUT HEIGHT FIX
   FORCE ABOUT TO ONE NORMAL ROW
========================================================= */

(function () {

    function fixAboutMobileHeight() {

        const nav = document.querySelector(".header .nav");

        if (!nav) {
            return;
        }

        /*
         * Find the actual nav link by its visible text.
         * This does NOT depend on href or :last-child.
         */

        const links =
            nav.querySelectorAll(".nav-link");

        links.forEach(function (link) {

            const text =
                link.textContent
                    .replace(/\s+/g, " ")
                    .trim();

            if (text !== "About") {
                return;
            }


            /* ---------------------------------------------
               Find its nav-item parent
            --------------------------------------------- */

            const navItem =
                link.closest(".nav-item");

            if (!navItem) {
                return;
            }


            /* ---------------------------------------------
               FORCE NAV ITEM
            --------------------------------------------- */

            navItem.style.setProperty(
                "height",
                "52px",
                "important"
            );

            navItem.style.setProperty(
                "min-height",
                "52px",
                "important"
            );

            navItem.style.setProperty(
                "max-height",
                "52px",
                "important"
            );

            navItem.style.setProperty(
                "flex",
                "0 0 52px",
                "important"
            );

            navItem.style.setProperty(
                "flex-grow",
                "0",
                "important"
            );

            navItem.style.setProperty(
                "flex-shrink",
                "0",
                "important"
            );

            navItem.style.setProperty(
                "padding",
                "0",
                "important"
            );

            navItem.style.setProperty(
                "margin",
                "0",
                "important"
            );

            navItem.style.setProperty(
                "overflow",
                "hidden",
                "important"
            );


            /* ---------------------------------------------
               FORCE ABOUT LINK
            --------------------------------------------- */

            link.style.setProperty(
                "height",
                "52px",
                "important"
            );

            link.style.setProperty(
                "min-height",
                "52px",
                "important"
            );

            link.style.setProperty(
                "max-height",
                "52px",
                "important"
            );

            link.style.setProperty(
                "width",
                "100%",
                "important"
            );

            link.style.setProperty(
                "flex",
                "0 0 52px",
                "important"
            );

            link.style.setProperty(
                "flex-grow",
                "0",
                "important"
            );

            link.style.setProperty(
                "flex-shrink",
                "0",
                "important"
            );

            link.style.setProperty(
                "margin",
                "0",
                "important"
            );

            link.style.setProperty(
                "padding",
                "0 14px",
                "important"
            );

            link.style.setProperty(
                "display",
                "flex",
                "important"
            );

            link.style.setProperty(
                "align-items",
                "center",
                "important"
            );

            link.style.setProperty(
                "justify-content",
                "space-between",
                "important"
            );

            link.style.setProperty(
                "box-sizing",
                "border-box",
                "important"
            );

            link.style.setProperty(
                "overflow",
                "hidden",
                "important"
            );

        });

    }


    /* ---------------------------------------------
       Run when page loads
    --------------------------------------------- */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            fixAboutMobileHeight
        );

    } else {

        fixAboutMobileHeight();

    }


    /* ---------------------------------------------
       Run when mobile menu opens
    --------------------------------------------- */

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            function () {

                setTimeout(
                    fixAboutMobileHeight,
                    50
                );

            }
        );

    }


    /* ---------------------------------------------
       Run after resize
    --------------------------------------------- */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth <= 950) {

                fixAboutMobileHeight();

            }

        }
    );

})();


/* =====================================================
   SBL MONTHLY / YEARLY PRICING
   ADD-ON ONLY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const pricingSection =
        document.querySelector(".sbl-pricing");

    if (!pricingSection) return;


    /* ---------------------------------------------
       FIND EXISTING PRICING ELEMENTS
    --------------------------------------------- */

    const prices =
        pricingSection.querySelectorAll(
            ".monthly-price"
        );

    const billingTexts =
        pricingSection.querySelectorAll(
            ".plan-billing"
        );


    if (!prices.length) return;


    /* ---------------------------------------------
       CREATE BILLING SWITCH
       WITHOUT MODIFYING EXISTING HTML
    --------------------------------------------- */

    const pricingContainer =
        pricingSection.querySelector(
            ".sbl-pricing-container"
        );

    if (!pricingContainer) return;


    /* Prevent duplicate switch */

    if (
        pricingSection.querySelector(
            ".sbl-billing-addon"
        )
    ) {
        return;
    }


    /* ---------------------------------------------
       CREATE SWITCH
    --------------------------------------------- */

    const billingWrapper =
        document.createElement("div");

    billingWrapper.className =
        "sbl-billing-addon";


    billingWrapper.innerHTML = `

        <div class="billing-switch-addon">

            <button
                type="button"
                class="billing-option-addon active"
                data-billing="monthly">

                Monthly

            </button>


            <button
                type="button"
                class="billing-option-addon"
                data-billing="yearly">

                Yearly

                <span class="billing-save-addon">
                    SAVE
                </span>

            </button>

        </div>

    `;


    /* Insert above pricing cards */

    pricingContainer.parentNode.insertBefore(
        billingWrapper,
        pricingContainer
    );


    /* ---------------------------------------------
       GET BUTTONS
    --------------------------------------------- */

    const billingButtons =
        billingWrapper.querySelectorAll(
            ".billing-option-addon"
        );


    /* ---------------------------------------------
       FORMAT PRICE
    --------------------------------------------- */

    function formatPrice(value) {

        const number =
            Number(value);

        if (Number.isNaN(number)) {
            return value;
        }

        return number.toLocaleString("en-IN");

    }


    /* ---------------------------------------------
       CHANGE PRICING
    --------------------------------------------- */

    function changeBilling(type) {

        /* -----------------------------------------
           BUTTON ACTIVE STATE
        ----------------------------------------- */

        billingButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.billing === type
            );

        });


        /* -----------------------------------------
           UPDATE PRICE
        ----------------------------------------- */

        prices.forEach(price => {

            const newPrice =
                price.dataset[
                    type === "yearly"
                        ? "yearly"
                        : "monthly"
                ];


            if (!newPrice) return;


            /* Restart animation */

            price.classList.remove(
                "price-changing"
            );

            void price.offsetWidth;

            price.classList.add(
                "price-changing"
            );


            /* Change number */

            price.textContent =
                formatPrice(newPrice);

        });


        /* -----------------------------------------
           UPDATE BILLING TEXT
        ----------------------------------------- */

        billingTexts.forEach(text => {

            if (type === "yearly") {

                text.textContent =
                    "Billed yearly";

                text.classList.add(
                    "yearly-mode"
                );

            } else {

                text.textContent =
                    "Billed monthly";

                text.classList.remove(
                    "yearly-mode"
                );

            }

        });


        /* -----------------------------------------
           UPDATE PRICE PERIOD
        ----------------------------------------- */

        const periods =
            pricingSection.querySelectorAll(
                ".price-period"
            );


        periods.forEach(period => {

            period.textContent =
                type === "yearly"
                    ? "/year"
                    : "/month";

        });

    }


    /* ---------------------------------------------
       BUTTON EVENTS
    --------------------------------------------- */

    billingButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                changeBilling(
                    this.dataset.billing
                );

            }
        );

    });


    /* ---------------------------------------------
       DEFAULT = MONTHLY
    --------------------------------------------- */

    changeBilling("monthly");

});