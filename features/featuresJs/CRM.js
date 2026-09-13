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
       COUNTERS
    ====================================================== */

    const counters =
        document.querySelectorAll(
            ".crm-counter"
        );


    function animateCounter(
        element,
        target
    ) {

        let start = 0;

        const duration = 1300;

        let startTime = null;


        function update(timestamp) {

            if (!startTime) {

                startTime = timestamp;

            }


            const progress =
                Math.min(
                    (timestamp - startTime) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.floor(
                    target * eased
                );


            element.textContent =
                value.toLocaleString(
                    "en-IN"
                );


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(
            update
        );

    }


    if (
        "IntersectionObserver"
        in window
    ) {

        const counterObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const target =
                                    Number(
                                        entry
                                            .target
                                            .dataset
                                            .count
                                    );


                                animateCounter(
                                    entry.target,
                                    target
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .6
                }
            );


        counters.forEach(
            function (counter) {

                counterObserver.observe(
                    counter
                );

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    const scrollLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    scrollLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );


    /* =====================================================
       KANBAN CARD 3D
    ====================================================== */

    const kanbanCards =
        document.querySelectorAll(
            ".kanban-card"
        );


    kanbanCards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        window.innerWidth <= 900
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


                    const rotateX =
                        (
                            y /
                            rect.height -
                            .5
                        ) * -3;


                    const rotateY =
                        (
                            x /
                            rect.width -
                            .5
                        ) * 3;


                    card.style.transform =
                        "perspective(700px)" +
                        " rotateX(" +
                        rotateX +
                        "deg)" +
                        " rotateY(" +
                        rotateY +
                        "deg)" +
                        " translateY(-5px)";

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


    /* =====================================================
       CUSTOMER DASHBOARD TILT
    ====================================================== */

    const customerDashboard =
        document.querySelector(
            ".crm-customer-dashboard"
        );


    if (customerDashboard) {

        customerDashboard.addEventListener(
            "mousemove",
            function (event) {

                if (
                    window.innerWidth <= 900
                ) {

                    return;

                }


                const rect =
                    customerDashboard
                        .getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    (
                        y /
                        rect.height -
                        .5
                    ) * -1.5;


                const rotateY =
                    (
                        x /
                        rect.width -
                        .5
                    ) * 2;


                customerDashboard.style.transform =
                    "perspective(1200px)" +
                    " rotateX(" +
                    rotateX +
                    "deg)" +
                    " rotateY(" +
                    rotateY +
                    "deg)" +
                    " translateY(-5px)";

            }
        );


        customerDashboard.addEventListener(
            "mouseleave",
            function () {

                customerDashboard.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       CAPABILITY ROW HOVER
    ====================================================== */

    const capabilityRows =
        document.querySelectorAll(
            ".capability-row"
        );


    capabilityRows.forEach(
        function (row) {

            row.addEventListener(
                "mouseenter",
                function () {

                    capabilityRows.forEach(
                        function (other) {

                            if (
                                other !== row
                            ) {

                                other.style.opacity =
                                    ".38";

                            }

                        }
                    );

                }
            );


            row.addEventListener(
                "mouseleave",
                function () {

                    capabilityRows.forEach(
                        function (other) {

                            other.style.opacity =
                                "";

                        }
                    );

                }
            );

        }
    );


    /* =====================================================
       WORKFLOW ACTIVE PULSE
    ====================================================== */

    const workflowBoxes =
        document.querySelectorAll(
            ".workflow-box"
        );


    workflowBoxes.forEach(
        function (box, index) {

            box.style.transitionDelay =
                index * 70 + "ms";


            box.addEventListener(
                "mouseenter",
                function () {

                    workflowBoxes.forEach(
                        function (other) {

                            if (
                                other !== box
                            ) {

                                other.style.opacity =
                                    ".45";

                            }

                        }
                    );

                }
            );


            box.addEventListener(
                "mouseleave",
                function () {

                    workflowBoxes.forEach(
                        function (other) {

                            other.style.opacity =
                                "";

                        }
                    );

                }
            );

        }
    );


    /* =====================================================
       AI FOLLOW-UP BUTTON
    ====================================================== */

    const aiButton =
        document.querySelector(
            ".ai-recommendation button"
        );


    if (aiButton) {

        aiButton.addEventListener(
            "click",
            function () {

                const oldText =
                    aiButton.textContent;


                aiButton.textContent =
                    "Added ✓";


                aiButton.style.background =
                    "#12a86b";


                aiButton.style.color =
                    "#ffffff";


                setTimeout(
                    function () {

                        aiButton.textContent =
                            oldText;

                        aiButton.style.background =
                            "";

                        aiButton.style.color =
                            "";

                    },
                    1700
                );

            }
        );

    }


    /* =====================================================
       REVEAL ANIMATION
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".crm-overview-label, " +
            ".crm-overview h2, " +
            ".crm-overview p, " +
            ".overview-node, " +
            ".crm-customer-copy, " +
            ".crm-customer-dashboard, " +
            ".crm-kanban-heading, " +
            ".kanban-column, " +
            ".crm-capabilities-title, " +
            ".capability-feature, " +
            ".capability-row, " +
            ".workflow-heading, " +
            ".workflow-box, " +
            ".insights-heading, " +
            ".insight-large, " +
            ".insight-side, " +
            ".crm-ai-copy, " +
            ".crm-ai-interface, " +
            ".crm-final-content"
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(30px)";

            element.style.transition =
                "opacity .75s ease, transform .75s ease";

        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       HERO PARALLAX
    ====================================================== */

    const floatingElements =
        document.querySelectorAll(
            ".crm-floating"
        );


    window.addEventListener(
        "mousemove",
        function (event) {

            if (
                window.innerWidth <= 900
            ) {

                return;

            }


            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                );


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                );


            floatingElements.forEach(
                function (
                    element,
                    index
                ) {

                    const strength =
                        8 +
                        index * 2;


                    element.style.marginLeft =
                        x * strength + "px";


                    element.style.marginTop =
                        y * strength + "px";

                }
            );

        }
    );


    /* =====================================================
       PRODUCT WINDOW POINTER GLOW
    ====================================================== */

    const productWindow =
        document.querySelector(
            ".crm-product-window"
        );


    if (productWindow) {

        productWindow.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    productWindow
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width * 100;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height * 100;


                productWindow.style.background =
                    `
                    radial-gradient(
                        circle at ${x}% ${y}%,
                        rgba(8,120,216,.025),
                        #ffffff 30%
                    )
                    `;

            }
        );


        productWindow.addEventListener(
            "mouseleave",
            function () {

                productWindow.style.background =
                    "#ffffff";

            }
        );

    }


    /* =====================================================
       AI INTERFACE TYPE EFFECT
    ====================================================== */

    const aiResponse =
        document.querySelector(
            ".ai-message.assistant strong"
        );


    if (aiResponse) {

        const originalText =
            aiResponse.textContent;


        aiResponse.textContent =
            "";


        let index = 0;


        const typeText =
            setInterval(
                function () {

                    aiResponse.textContent =
                        originalText.substring(
                            0,
                            index
                        );


                    index++;


                    if (
                        index >
                        originalText.length
                    ) {

                        clearInterval(
                            typeText
                        );

                    }

                },
                35
            );

    }


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

