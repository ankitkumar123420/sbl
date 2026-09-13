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