/* =========================================================
   SBL PRICING JAVASCRIPT
========================================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenu.addEventListener(
    "click",
    () => {

        alert(
            "Mobile navigation will be added in the next phase."
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const cards =
            document.querySelectorAll(
                ".pricing-card"
            );


        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach(
            function (card) {

                revealObserver.observe(card);

            }
        );



        /* =================================================
           BILLING SWITCH
        ================================================= */

        const billingSwitch =
            document.getElementById(
                "billingSwitch"
            );


        const billingLabels =
            document.querySelectorAll(
                ".billing-label"
            );


        const prices =
            document.querySelectorAll(
                ".price"
            );


        let yearlyMode = false;


        if (billingSwitch) {

            billingSwitch.addEventListener(
                "click",
                function () {

                    yearlyMode =
                        !yearlyMode;


                    billingSwitch.classList.toggle(
                        "yearly",
                        yearlyMode
                    );


                    billingLabels.forEach(
                        function (label, index) {

                            if (index === 0) {

                                label.classList.toggle(
                                    "active",
                                    !yearlyMode
                                );

                            }


                            if (index === 1) {

                                label.classList.toggle(
                                    "active",
                                    yearlyMode
                                );

                            }

                        }
                    );


                    prices.forEach(
                        function (price) {

                            const monthly =
                                price.dataset.monthly;

                            const yearly =
                                price.dataset.yearly;


                            const selectedPrice =
                                yearlyMode
                                    ? yearly
                                    : monthly;


                            price.textContent =
                                Number(
                                    selectedPrice
                                ).toLocaleString(
                                    "en-IN"
                                );

                        }
                    );

                }
            );

        }



        /* =================================================
           SIDE ARROW
        ================================================= */

        const sideButton =
            document.getElementById(
                "pricingSideButton"
            );


        if (sideButton) {

            sideButton.addEventListener(
                "click",
                function () {

                    document
                        .querySelector(
                            ".pricing-plans-section"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        }



        /* =================================================
           COMPARE BUTTON
        ================================================= */

        const compareButtons =
            document.querySelectorAll(
                ".compare-button"
            );


        compareButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const plan =
                            button.dataset.plan;


                        compareButtons.forEach(
                            function (other) {

                                other.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        button.classList.add(
                            "selected"
                        );


                        console.log(
                            "Selected plan:",
                            plan
                        );

                    }
                );

            }
        );



        /* =================================================
           COMPARISON MODAL
        ================================================= */

        const comparisonButton =
            document.getElementById(
                "comparisonButton"
            );


        const comparisonModal =
            document.getElementById(
                "comparisonModal"
            );


        const comparisonClose =
            document.getElementById(
                "comparisonClose"
            );


        function openComparison() {

            if (comparisonModal) {

                comparisonModal.classList.add(
                    "open"
                );

                document.body.style.overflow =
                    "hidden";

            }

        }


        function closeComparison() {

            if (comparisonModal) {

                comparisonModal.classList.remove(
                    "open"
                );

                document.body.style.overflow =
                    "";

            }

        }


        if (comparisonButton) {

            comparisonButton.addEventListener(
                "click",
                openComparison
            );

        }


        if (comparisonClose) {

            comparisonClose.addEventListener(
                "click",
                closeComparison
            );

        }


        if (comparisonModal) {

            comparisonModal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        comparisonModal
                    ) {

                        closeComparison();

                    }

                }
            );

        }


        /* ESC KEY */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeComparison();

                }

            }
        );



        /* =================================================
           CARD POINTER EFFECT
        ================================================= */

        cards.forEach(
            function (card) {

                card.addEventListener(
                    "mousemove",
                    function (event) {

                        if (
                            window.innerWidth < 900
                        ) {
                            return;
                        }


                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const rotateY =
                            ((x / rect.width) -
                                0.5) * 3;


                        const rotateX =
                            ((y / rect.height) -
                                0.5) * -3;


                        if (
                            card.classList.contains(
                                "pricing-card-popular"
                            )
                        ) {

                            card.style.transform =
                                `translateY(-12px)
                                 perspective(900px)
                                 rotateX(${rotateX}deg)
                                 rotateY(${rotateY}deg)`;

                        } else {

                            card.style.transform =
                                `translateY(-6px)
                                 perspective(900px)
                                 rotateX(${rotateX}deg)
                                 rotateY(${rotateY}deg)`;

                        }

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



        /* =================================================
           ESCAPE LINK
        ================================================= */

        const businessButton =
            document.querySelector(
                ".business-os-button"
            );


        if (businessButton) {

            businessButton.addEventListener(
                "click",
                function () {

                    console.log(
                        "Opening SBL Solutions"
                    );

                }
            );

        }


    }
);


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

