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

document.addEventListener("DOMContentLoaded", () => {

    const page = document.querySelector(".sbl-coming-page");

    if (!page) return;


    /* =========================================
       REVEAL ANIMATION
    ========================================= */

    const revealItems = page.querySelectorAll(
        ".roadmap-card, .development-card, .coming-intro, .coming-product-visual"
    );


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("coming-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold:0.12
        }
    );


    revealItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition =
            "opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1)";

        revealObserver.observe(item);

    });


    /* fallback */

    setTimeout(() => {

        revealItems.forEach((item) => {

            item.classList.add("coming-visible");

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        });

    }, 1500);


    /* =========================================
       ERP DASHBOARD HOVER EFFECT
    ========================================= */

    const erpWindow =
        page.querySelector(".erp-window");


    if (erpWindow && window.matchMedia(
        "(pointer:fine)"
    ).matches) {

        erpWindow.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    erpWindow.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 7;

                const rotateX =
                    ((y / rect.height) - .5) * -5;

                erpWindow.style.transform =
                    `rotateY(${rotateY}deg)
                     rotateX(${rotateX}deg)
                     translateY(-4px)`;

            }
        );


        erpWindow.addEventListener(
            "mouseleave",
            () => {

                erpWindow.style.transform =
                    "rotateY(-5deg) rotateX(2deg)";

            }
        );

    }


    /* =========================================
       CRM DASHBOARD HOVER
    ========================================= */

    const crmWindow =
        page.querySelector(".crm-window");


    if (crmWindow && window.matchMedia(
        "(pointer:fine)"
    ).matches) {

        crmWindow.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    crmWindow.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 7;

                const rotateX =
                    ((y / rect.height) - .5) * -5;

                crmWindow.style.transform =
                    `rotateY(${rotateY}deg)
                     rotateX(${rotateX}deg)
                     translateY(-4px)`;

            }
        );


        crmWindow.addEventListener(
            "mouseleave",
            () => {

                crmWindow.style.transform =
                    "rotateY(-5deg) rotateX(2deg)";

            }
        );

    }


    /* =========================================
       MINING NODE ANIMATION
    ========================================= */

    const miningNodes =
        page.querySelectorAll(".mining-node");


    if (miningNodes.length) {

        let activeNode = 0;

        const activateMiningNode = () => {

            miningNodes.forEach(
                node => node.classList.remove("active")
            );

            miningNodes[activeNode]
                ?.classList.add("active");

            activeNode =
                (activeNode + 1) % miningNodes.length;

        };


        activateMiningNode();

        setInterval(
            activateMiningNode,
            1500
        );

    }


    /* =========================================
       ROADMAP CARD STAGGER
    ========================================= */

    const cards =
        page.querySelectorAll(".roadmap-card");


    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });


    /* =========================================
       INTERNAL LINKS
    ========================================= */

    page.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (e) => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }
        );

    });

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




