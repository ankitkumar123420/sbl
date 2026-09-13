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


    /* =====================================================
       PAGE VISIBILITY
    ====================================================== */

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
