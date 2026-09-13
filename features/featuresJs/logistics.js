window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

 
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements = document.querySelectorAll(
        ".sbl-logistics-intro, " +
        ".fleet-command-heading, " +
        ".fleet-command-card, " +
        ".operations-heading, " +
        ".operation-step, " +
        ".logistics-modules-heading, " +
        ".logistics-module-card, " +
        ".tracking-content, " +
        ".tracking-visual, " +
        ".analytics-heading, " +
        ".analytics-card, " +
        ".logistics-cta-content"
    );


    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "logistics-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element, index) {

        element.classList.add(
            "logistics-reveal"
        );

        element.style.transitionDelay =
            Math.min(index * 0.055, 0.35) + "s";

        revealObserver.observe(element);

    });


    /* =====================================================
       FLEET PROGRESS ANIMATION
    ====================================================== */

    const fleetProgress =
        document.querySelectorAll(
            ".fleet-progress"
        );


    const progressObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    fleetProgress.forEach(function (item) {

        progressObserver.observe(item);

    });


    /* =====================================================
       ANALYTICS BAR ANIMATION
    ====================================================== */

    const analyticsBars =
        document.querySelectorAll(
            ".analytics-bars"
        );


    const analyticsObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    analyticsBars.forEach(function (bars) {

        analyticsObserver.observe(
            bars
        );

    });


    /* =====================================================
       MODULE CARD 3D EFFECT
    ====================================================== */

    const moduleCards =
        document.querySelectorAll(
            ".logistics-module-card"
        );


    moduleCards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth <= 900) {
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


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -3;


                const rotateY =
                    ((x - centerX) / centerX) * 3;


                card.style.transform =
                    "translateY(-9px) " +
                    "perspective(700px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       FLEET CARD 3D EFFECT
    ====================================================== */

    const fleetCards =
        document.querySelectorAll(
            ".fleet-command-card"
        );


    fleetCards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth <= 900) {
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
                    ((x - rect.width / 2) /
                    (rect.width / 2)) * 2;


                const rotateX =
                    ((y - rect.height / 2) /
                    (rect.height / 2)) * -2;


                card.style.transform =
                    "translateY(-9px) " +
                    "perspective(700px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       TRACKING MAP PARALLAX
    ====================================================== */

    const trackingMap =
        document.querySelector(
            ".tracking-map"
        );


    if (trackingMap) {

        trackingMap.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth <= 900) {
                    return;
                }


                const rect =
                    trackingMap.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((x - rect.width / 2) /
                    (rect.width / 2)) * 5;


                const rotateX =
                    ((y - rect.height / 2) /
                    (rect.height / 2)) * -3;


                trackingMap.style.transform =
                    "perspective(900px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg)";

            }
        );


        trackingMap.addEventListener(
            "mouseleave",
            function () {

                trackingMap.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       OPERATIONS FLOW HOVER
    ====================================================== */

    const operationSteps =
        document.querySelectorAll(
            ".operation-step"
        );


    operationSteps.forEach(function (step) {

        step.addEventListener(
            "mouseenter",
            function () {

                operationSteps.forEach(
                    function (otherStep) {

                        if (otherStep !== step) {

                            otherStep.style.opacity =
                                "0.35";

                        }

                    }
                );

            }
        );


        step.addEventListener(
            "mouseleave",
            function () {

                operationSteps.forEach(
                    function (otherStep) {

                        otherStep.style.opacity =
                            "";

                    }
                );

            }
        );

    });


    /* =====================================================
       LIVE DASHBOARD NUMBER ANIMATION
    ====================================================== */

    const statNumbers =
        document.querySelectorAll(
            ".logistics-stat-card strong"
        );


    function animateNumber(
        element,
        target,
        suffix = "",
        duration = 1000
    ) {

        let startTime = null;


        function update(currentTime) {

            if (!startTime) {
                startTime = currentTime;
            }


            const progress =
                Math.min(
                    (currentTime - startTime) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const current =
                Math.floor(
                    eased * target
                );


            element.textContent =
                current.toLocaleString() +
                suffix;


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            } else {

                element.textContent =
                    target.toLocaleString() +
                    suffix;

            }

        }


        requestAnimationFrame(
            update
        );

    }


    const statNumberObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const element =
                            entry.target;


                        const original =
                            element.textContent
                                .trim();


                        if (
                            original === "84"
                        ) {

                            animateNumber(
                                element,
                                84
                            );

                        }

                        else if (
                            original === "61"
                        ) {

                            animateNumber(
                                element,
                                61
                            );

                        }

                        else if (
                            original === "128"
                        ) {

                            animateNumber(
                                element,
                                128
                            );

                        }

                        else if (
                            original === "18.4K"
                        ) {

                            animateNumber(
                                element,
                                18.4,
                                "K"
                            );

                        }


                        observer.unobserve(
                            element
                        );

                    }

                });

            },
            {
                threshold: 0.7
            }
        );


    statNumbers.forEach(function (number) {

        statNumberObserver.observe(
            number
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    const seeHowButton =
        document.querySelector(
            '.logistics-secondary-btn[href="#fleet-command"]'
        );


    if (seeHowButton) {

        seeHowButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const target =
                    document.getElementById(
                        "fleet-command"
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================================
       DASHBOARD NEW TRIP BUTTON
    ====================================================== */

    const newTripButton =
        document.querySelector(
            ".logistics-dashboard-heading button"
        );


    if (newTripButton) {

        newTripButton.addEventListener(
            "click",
            function () {

                newTripButton.textContent =
                    "Trip Created ✓";


                newTripButton.style.background =
                    "#12a86b";


                setTimeout(function () {

                    newTripButton.textContent =
                        "+ New Trip";


                    newTripButton.style.background =
                        "";

                }, 1800);

            }
        );

    }


    /* =====================================================
       LIVE TRUCK MOVEMENT
    ====================================================== */

    const truckMarkers =
        document.querySelectorAll(
            ".truck-marker"
        );


    truckMarkers.forEach(function (truck, index) {

        let direction = 1;

        setInterval(function () {

            const current =
                parseFloat(
                    truck.dataset.move || 0
                );


            let next =
                current +
                direction * 0.6;


            if (next > 5) {
                direction = -1;
            }


            if (next < -5) {
                direction = 1;
            }


            truck.dataset.move =
                next;


            truck.style.marginLeft =
                next + "px";


        }, 100);

    });


    /* =====================================================
       TRACKING VEHICLES
    ====================================================== */

    const trackingPins =
        document.querySelectorAll(
            ".tracking-pin"
        );


    trackingPins.forEach(function (pin, index) {

        pin.addEventListener(
            "click",
            function () {

                trackingPins.forEach(
                    function (other) {

                        other.style.boxShadow =
                            "";

                    }
                );


                pin.style.boxShadow =
                    "0 0 0 5px rgba(8,120,216,.15), 0 10px 25px rgba(0,0,0,.15)";

            }
        );

    });


    /*  
       PAGE VISIBILITY
     */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.hidden
            ) {

                document.body.classList.add(
                    "logistics-page-paused"
                );

            } else {

                document.body.classList.remove(
                    "logistics-page-paused"
                );

            }

        }
    );

});


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


(function () {

    function fixAboutMobileHeight() {

        const nav = document.querySelector(".header .nav");

        if (!nav) {
            return;
        }

        

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


/* =========================================================
   SBL MOBILE NAVIGATION — FINAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    let mobileMenu = document.getElementById("mobileMenu");
    const nav = document.querySelector(".header .nav");
    const header = document.querySelector(".header");

    if (!mobileMenu || !nav) {
        console.warn("SBL Mobile Navigation: elements not found");
        return;
    }

    /*
     * IMPORTANT:
     * Replace the existing hamburger element.
     * This removes old click listeners, including the old alert().
     */
    const cleanMenu = mobileMenu.cloneNode(true);
    mobileMenu.parentNode.replaceChild(cleanMenu, mobileMenu);
    mobileMenu = cleanMenu;

    /*
     * Make sure hamburger contains the middle line
     */
    mobileMenu.innerHTML = "<span></span>";

    mobileMenu.setAttribute("type", "button");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-label", "Open navigation");


    /* =====================================================
       OPEN / CLOSE MAIN MOBILE MENU
    ===================================================== */

    mobileMenu.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen = nav.classList.contains("mobile-open");

        if (isOpen) {

            /* CLOSE */
            nav.classList.remove("mobile-open");
            mobileMenu.classList.remove("active");

            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute(
                "aria-label",
                "Open navigation"
            );

            document.body.style.overflow = "";

            nav.querySelectorAll(".mobile-active").forEach(function (item) {
                item.classList.remove("mobile-active");
            });

        } else {

            /* OPEN */
            nav.classList.add("mobile-open");
            mobileMenu.classList.add("active");

            mobileMenu.setAttribute("aria-expanded", "true");
            mobileMenu.setAttribute(
                "aria-label",
                "Close navigation"
            );

            document.body.style.overflow = "hidden";
        }

    });


    /* =====================================================
       MOBILE DROPDOWNS
    ===================================================== */

    const navItems = nav.querySelectorAll(".nav-item");

    navItems.forEach(function (item) {

        const navLink = item.querySelector(":scope > .nav-link");
        const dropdown = item.querySelector(":scope > .dropdown");

        if (!navLink || !dropdown) return;

        navLink.addEventListener("click", function (event) {

            if (window.innerWidth > 1000) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            const isActive =
                item.classList.contains("mobile-active");

            /* Close all other dropdowns */
            navItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.classList.remove("mobile-active");
                }

            });

            /* Toggle current dropdown */
            if (isActive) {
                item.classList.remove("mobile-active");
            } else {
                item.classList.add("mobile-active");
            }

        });

    });


    /* =====================================================
       CLOSE MENU WHEN REAL LINK IS CLICKED
    ===================================================== */

    const realLinks = nav.querySelectorAll(
        ".dropdown-item, .nav-item > a.nav-link"
    );

    realLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth > 1000) {
                return;
            }

            nav.classList.remove("mobile-open");
            mobileMenu.classList.remove("active");

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Open navigation"
            );

            document.body.style.overflow = "";

            navItems.forEach(function (item) {
                item.classList.remove("mobile-active");
            });

        });

    });


    /* =====================================================
       CLICK OUTSIDE MENU
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (window.innerWidth > 1000) {
            return;
        }

        if (
            !header.contains(event.target) &&
            nav.classList.contains("mobile-open")
        ) {

            nav.classList.remove("mobile-open");
            mobileMenu.classList.remove("active");

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Open navigation"
            );

            document.body.style.overflow = "";

            navItems.forEach(function (item) {
                item.classList.remove("mobile-active");
            });

        }

    });


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        nav.classList.remove("mobile-open");
        mobileMenu.classList.remove("active");

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation"
        );

        document.body.style.overflow = "";

        navItems.forEach(function (item) {
            item.classList.remove("mobile-active");
        });

    });


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1000) {

            nav.classList.remove("mobile-open");
            mobileMenu.classList.remove("active");

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Open navigation"
            );

            document.body.style.overflow = "";

            navItems.forEach(function (item) {
                item.classList.remove("mobile-active");
            });

        }

    });

});