// yha se header ka chalu h 
window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* mobile view start*/ 
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

/* =========================================================
   SBL AI & AUTOMATION — FUTURISTIC DESIGN JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page =
        document.querySelector(".sbl-ai2-page");

    if (!page) return;


    /* =====================================================
       AI TERMINAL TYPING / ACTIVE LINES
    ===================================================== */

    const terminalLines =
        page.querySelectorAll(".terminal-line");

    let terminalIndex = 0;

    function activateTerminalLine() {

        terminalLines.forEach(function (line) {

            line.style.opacity = ".42";

        });

        if (terminalLines[terminalIndex]) {

            terminalLines[terminalIndex]
                .style.opacity = "1";

        }

        terminalIndex++;

        if (
            terminalIndex >=
            terminalLines.length
        ) {

            terminalIndex = 0;

        }

    }

    if (terminalLines.length) {

        terminalLines.forEach(function (line) {

            line.style.transition =
                "opacity .35s ease";

        });

        activateTerminalLine();

        setInterval(
            activateTerminalLine,
            1400
        );

    }


    /* =====================================================
       THINKING ITEMS
    ===================================================== */

    const thinkingItems =
        page.querySelectorAll(
            ".thinking-item"
        );

    let thinkingIndex = 0;

    if (thinkingItems.length) {

        setInterval(function () {

            thinkingItems.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );

            thinkingItems[thinkingIndex]
                .classList.add("active");

            thinkingIndex =
                (thinkingIndex + 1) %
                thinkingItems.length;

        }, 2300);

    }


    /* =====================================================
       ASSISTANT INTERACTION
    ===================================================== */

    const questionInput =
        document.getElementById(
            "sblAi2Question"
        );

    const askButton =
        document.getElementById(
            "sblAi2Ask"
        );

    const response =
        document.getElementById(
            "sblAi2Response"
        );


    function askAI() {

        if (!questionInput || !response) {
            return;
        }

        const question =
            questionInput.value.trim();


        if (!question) {

            response.textContent =
                "Ask something about sales, inventory, customers, employees or business performance.";

            response.classList.add("show");

            return;

        }


        response.classList.remove("show");


        setTimeout(function () {

            response.innerHTML =
                "<strong>✦ SBL AI:</strong> " +
                "Your question has been understood. " +
                "In the connected SBL platform, AI can " +
                "analyze the relevant business data and " +
                "return an actionable response.";

            response.classList.add("show");

        }, 350);

    }


    if (askButton) {

        askButton.addEventListener(
            "click",
            askAI
        );

    }


    if (questionInput) {

        questionInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    askAI();

                }

            }
        );

    }


    /* =====================================================
       CANVAS NODE ANIMATION
    ===================================================== */

    const canvasNodes =
        page.querySelectorAll(
            ".canvas-node"
        );

    let canvasIndex = 0;

    if (canvasNodes.length) {

        setInterval(function () {

            canvasNodes.forEach(
                function (node) {

                    node.style.borderColor =
                        "rgba(137,184,217,.18)";

                }
            );

            const node =
                canvasNodes[canvasIndex];

            if (node) {

                node.style.borderColor =
                    "rgba(21,149,255,.65)";

            }

            canvasIndex =
                (canvasIndex + 1) %
                canvasNodes.length;

        }, 1800);

    }


    /* =====================================================
       SIGNAL STREAM
       Add a subtle live pulse.
    ===================================================== */

    const signalItems =
        page.querySelectorAll(
            ".signal-item"
        );

    let signalIndex = 0;

    if (signalItems.length) {

        setInterval(function () {

            signalItems.forEach(
                function (item) {

                    item.style.background =
                        "";

                }
            );

            const current =
                signalItems[signalIndex];

            if (current) {

                current.style.background =
                    "rgba(21,149,255,.045)";

            }

            signalIndex =
                (signalIndex + 1) %
                signalItems.length;

        }, 2500);

    }


    /* =====================================================
       HERO NETWORK MOUSE PARALLAX
    ===================================================== */

    const network =
        page.querySelector(
            ".sbl-ai2-network"
        );

    if (
        network &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        network.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    network.getBoundingClientRect();

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


                const core =
                    page.querySelector(
                        ".sbl-ai2-core"
                    );

                if (core) {

                    core.style.transform =
                        `translate(
                            calc(-50% + ${x * 10}px),
                            calc(-50% + ${y * 10}px)
                        )`;

                }


                const nodes =
                    page.querySelectorAll(
                        ".sbl-ai2-node"
                    );

                nodes.forEach(
                    function (node, index) {

                        const amount =
                            (index + 1) * 2;

                        node.style.marginLeft =
                            `${x * amount}px`;

                        node.style.marginTop =
                            `${y * amount}px`;

                    }
                );

            }
        );


        network.addEventListener(
            "mouseleave",
            function () {

                const core =
                    page.querySelector(
                        ".sbl-ai2-core"
                    );

                if (core) {

                    core.style.transform =
                        "translate(-50%,-50%)";

                }


                const nodes =
                    page.querySelectorAll(
                        ".sbl-ai2-node"
                    );

                nodes.forEach(
                    function (node) {

                        node.style.marginLeft =
                            "";

                        node.style.marginTop =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       CAPABILITY ROW HOVER
    ===================================================== */

    const capabilityRows =
        page.querySelectorAll(
            ".capability-row"
        );

    capabilityRows.forEach(
        function (row) {

            row.addEventListener(
                "mouseenter",
                function () {

                    capabilityRows.forEach(
                        function (other) {

                            if (other !== row) {

                                other.style.opacity =
                                    ".45";

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
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        page.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

                }
            );

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

