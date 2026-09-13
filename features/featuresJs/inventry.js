/* =========================================================
   SBL WEBSITE — MAIN JAVASCRIPT
   INVENTORY PHASE
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================================
   SBL MOBILE NAVIGATION + ABOUT MOBILE FIX
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header =
        document.querySelector(".header");

    const nav =
        document.querySelector(".header .nav");

    let mobileMenu =
        document.getElementById("mobileMenu");


    if (!header || !nav || !mobileMenu) {

        console.warn(
            "SBL Navigation: required elements not found."
        );

    } else {


        /* =================================================
           ABOUT MOBILE HEIGHT FIX
        ================================================= */

        function fixAboutMobileHeight() {

            if (window.innerWidth > 950) {
                return;
            }

            const links =
                nav.querySelectorAll(".nav-link");


            links.forEach(link => {

                const text =
                    link.textContent
                        .replace(/\s+/g, " ")
                        .trim();


                if (text !== "About") {
                    return;
                }


                const navItem =
                    link.closest(".nav-item");


                if (!navItem) {
                    return;
                }


                /* -----------------------------------------
                   NAV ITEM
                ----------------------------------------- */

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


                /* -----------------------------------------
                   ABOUT LINK
                ----------------------------------------- */

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



        /* =================================================
           CLEAN OLD MOBILE MENU LISTENERS
        ================================================= */

        const cleanMenu =
            mobileMenu.cloneNode(true);


        mobileMenu.parentNode.replaceChild(
            cleanMenu,
            mobileMenu
        );


        mobileMenu = cleanMenu;


        /* =================================================
           HAMBURGER
        ================================================= */

        mobileMenu.innerHTML =
            "<span></span>";


        mobileMenu.setAttribute(
            "type",
            "button"
        );

        mobileMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-label",
            "Open navigation"
        );



        /* =================================================
           CLOSE MOBILE MENU
        ================================================= */

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

            nav.querySelectorAll(
                ".mobile-active"
            ).forEach(item => {

                item.classList.remove(
                    "mobile-active"
                );

            });

        }



        /* =================================================
           OPEN MOBILE MENU
        ================================================= */

        function openMobileMenu() {

            nav.classList.add(
                "mobile-open"
            );

            mobileMenu.classList.add(
                "active"
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileMenu.setAttribute(
                "aria-label",
                "Close navigation"
            );

            document.body.style.overflow =
                "hidden";


            setTimeout(() => {

                fixAboutMobileHeight();

            }, 50);

        }



        /* =================================================
           HAMBURGER CLICK
        ================================================= */

        mobileMenu.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();


                const isOpen =
                    nav.classList.contains(
                        "mobile-open"
                    );


                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );



        /* =================================================
           MOBILE DROPDOWNS
        ================================================= */

        const navItems =
            nav.querySelectorAll(
                ".nav-item"
            );


        navItems.forEach(item => {

            const navLink =
                item.querySelector(
                    ":scope > .nav-link"
                );

            const dropdown =
                item.querySelector(
                    ":scope > .dropdown"
                );


            if (!navLink || !dropdown) {
                return;
            }


            navLink.addEventListener(
                "click",
                event => {

                    if (window.innerWidth > 1000) {
                        return;
                    }


                    event.preventDefault();
                    event.stopPropagation();


                    const isActive =
                        item.classList.contains(
                            "mobile-active"
                        );


                    /* -------------------------------------
                       CLOSE OTHER DROPDOWNS
                    ------------------------------------- */

                    navItems.forEach(
                        otherItem => {

                            if (
                                otherItem !== item
                            ) {

                                otherItem.classList.remove(
                                    "mobile-active"
                                );

                            }

                        }
                    );


                    /* -------------------------------------
                       TOGGLE CURRENT DROPDOWN
                    ------------------------------------- */

                    if (isActive) {

                        item.classList.remove(
                            "mobile-active"
                        );

                    } else {

                        item.classList.add(
                            "mobile-active"
                        );

                    }


                    fixAboutMobileHeight();

                }
            );

        });



        /* =================================================
           CLOSE WHEN DROPDOWN ITEM IS CLICKED
        ================================================= */

        const dropdownLinks =
            nav.querySelectorAll(
                ".dropdown-item"
            );


        dropdownLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (window.innerWidth <= 1000) {

                        closeMobileMenu();

                    }

                }
            );

        });



        /* =================================================
           DIRECT NAVIGATION LINKS
           ONLY LINKS WITHOUT DROPDOWNS
        ================================================= */

        const directLinks =
            nav.querySelectorAll(
                ".nav-item > .nav-link"
            );


        directLinks.forEach(link => {

            const parent =
                link.closest(
                    ".nav-item"
                );


            if (
                parent &&
                parent.querySelector(
                    ":scope > .dropdown"
                )
            ) {
                return;
            }


            link.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth <= 1000
                    ) {

                        closeMobileMenu();

                    }

                }
            );

        });



        /* =================================================
           CLICK OUTSIDE
        ================================================= */

        document.addEventListener(
            "click",
            event => {

                if (
                    window.innerWidth > 1000
                ) {
                    return;
                }


                if (
                    !header.contains(
                        event.target
                    ) &&
                    nav.classList.contains(
                        "mobile-open"
                    )
                ) {

                    closeMobileMenu();

                }

            }
        );



        /* =================================================
           ESC KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key !== "Escape"
                ) {
                    return;
                }


                closeMobileMenu();

            }
        );



        /* =================================================
           RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 1000
                ) {

                    closeMobileMenu();

                }


                if (
                    window.innerWidth <= 950
                ) {

                    fixAboutMobileHeight();

                }

            }
        );



        /* =================================================
           INITIAL ABOUT FIX
        ================================================= */

        if (
            document.readyState ===
            "loading"
        ) {

            document.addEventListener(
                "DOMContentLoaded",
                fixAboutMobileHeight
            );

        } else {

            fixAboutMobileHeight();

        }

    }



    /* =====================================================
       SBL INVENTORY
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".sbl-inventory-reveal"
        );


    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "is-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(
                element
            );

        });

    }



    /* =====================================================
       ITEM HEADER BUTTON
    ===================================================== */

    const itemHeaderButton =
        document.querySelector(
            ".sbl-header-item-demo button"
        );


    const categoryRow =
        document.querySelector(
            ".sbl-category-row"
        );


    if (
        itemHeaderButton &&
        categoryRow
    ) {

        itemHeaderButton.addEventListener(
            "click",
            () => {

                categoryRow.classList.toggle(
                    "sbl-category-highlight"
                );

            }
        );

    }



    /* =====================================================
       HERO VISUAL PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".sbl-inventory-hero-visual"
        );


    if (heroVisual) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 901
                ) {
                    return;
                }


                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    )
                    /
                    rect.width
                    -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    )
                    /
                    rect.height
                    -
                    0.5;


                const xMove =
                    x * 10;


                const yMove =
                    y * 8;


                heroVisual.style.transform =
                    `translate3d(
                        ${xMove}px,
                        ${yMove}px,
                        0
                    )`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                heroVisual.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       INVOICE TABLE ROW HOVER
    ===================================================== */

    const invoiceRows =
        document.querySelectorAll(
            ".sbl-invoice-row"
        );


    invoiceRows.forEach(row => {

        row.addEventListener(
            "mouseenter",
            () => {

                row.style.background =
                    "#f8fbff";

            }
        );


        row.addEventListener(
            "mouseleave",
            () => {

                row.style.background =
                    "";

            }
        );

    });



    /* =====================================================
       BUTTON RIPPLE
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".sbl-inventory-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {


                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "sbl-inventory-ripple";


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

                ripple.style.transform =
                    "translate(-50%, -50%)";


                const rect =
                    button.getBoundingClientRect();


                ripple.style.left =
                    `${
                        event.clientX -
                        rect.left
                    }px`;


                ripple.style.top =
                    `${
                        event.clientY -
                        rect.top
                    }px`;


                ripple.style.animation =
                    "sblInventoryRipple .65s ease-out";


                button.style.position =
                    "relative";


                button.style.overflow =
                    "hidden";


                button.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    700
                );

            }
        );

    });

});



/* =========================================================
   INVENTORY ANIMATIONS
========================================================= */

const inventoryRippleStyle =
    document.createElement(
        "style"
    );


inventoryRippleStyle.textContent = `

    /* -----------------------------------------
       BUTTON RIPPLE
    ----------------------------------------- */

    @keyframes sblInventoryRipple {

        from {

            width: 10px;
            height: 10px;

            opacity: .5;

        }

        to {

            width: 300px;
            height: 300px;

            opacity: 0;

        }

    }


    /* -----------------------------------------
       CATEGORY HIGHLIGHT
    ----------------------------------------- */

    .sbl-category-highlight {

        background:
            linear-gradient(
                90deg,
                #d7eaff,
                #dedfe2
            ) !important;

        transition:
            background .3s ease;

    }

`;


document.head.appendChild(
    inventoryRippleStyle
);

/* =====================================================
   INVENTORY REPORTING
   TAB INTERACTION
===================================================== */

const adjustmentTabs =
    document.querySelectorAll(
        ".sbl-adjustment-tabs span"
    );


adjustmentTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            adjustmentTabs.forEach(
                otherTab => {

                    otherTab.classList.remove(
                        "active"
                    );

                }
            );


            tab.classList.add(
                "active"
            );

        }
    );

});



/* =====================================================
   INVENTORY REPORT
   NAVIGATION INTERACTION
===================================================== */

const reportNavItems =
    document.querySelectorAll(
        ".sbl-report-nav-item"
    );


reportNavItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            reportNavItems.forEach(
                otherItem => {

                    otherItem.classList.remove(
                        "active"
                    );

                }
            );


            item.classList.add(
                "active"
            );

        }
    );

});



/* =====================================================
   INVENTORY REPORT CARD
   MOUSE PARALLAX
===================================================== */

const reportCards =
    document.querySelectorAll(
        ".sbl-inv-report-card"
    );


reportCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 901) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                0.5;


            const visual =
                card.querySelector(
                    ".sbl-inv-report-visual"
                );


            if (!visual) {
                return;
            }


            visual.style.transform =
                `translate3d(
                    ${x * 5}px,
                    ${y * 4}px,
                    0
                )`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            const visual =
                card.querySelector(
                    ".sbl-inv-report-visual"
                );


            if (visual) {

                visual.style.transform =
                    "";

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
