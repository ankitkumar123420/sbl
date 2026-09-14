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

/* mobile view stop*/ 

/* =========================================================
   SBL HR & PAYROLL JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page = document.querySelector(".sbl-hr-page");

    if (!page) return;

    /*
     * Add JS class only after the page has loaded.
     * This prevents the blank-page problem if JS fails.
     */
    page.classList.add("sbl-hr-js");


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealItems = page.querySelectorAll(".sbl-hr-reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold:0.12,
                rootMargin:"0px 0px -40px 0px"
            }
        );

        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });

    } else {

        revealItems.forEach(function (item) {
            item.classList.add("is-visible");
        });

    }


    /* =====================================================
       PAYROLL BUTTON
    ===================================================== */

    const payrollButton =
        document.getElementById("sblHrProcessPayroll");

    const payrollMessage =
        document.getElementById("sblHrPayrollMessage");

    if (payrollButton && payrollMessage) {

        payrollButton.addEventListener("click", function () {

            payrollButton.disabled = true;

            payrollButton.innerHTML = "Processing...";

            setTimeout(function () {

                payrollButton.innerHTML = "Payroll processed ✓";

                payrollMessage.classList.add("show");

            }, 900);

        });

    }


    /* =====================================================
       ANALYTICS TABS
    ===================================================== */

    const analysisTabs =
        page.querySelectorAll(".sbl-hr-analysis-tab");

    const analysisTitle =
        document.getElementById("sblHrAnalysisTitle");

    const countOne =
        document.getElementById("hrCountOne");

    const countTwo =
        document.getElementById("hrCountTwo");

    const countThree =
        document.getElementById("hrCountThree");


    const analysisData = {

        overview: {
            title:"Workforce overview",
            one:"248",
            two:"93.1%",
            three:"84%"
        },

        employees: {
            title:"Employee overview",
            one:"248",
            two:"17",
            three:"8.4%"
        },

        attendance: {
            title:"Attendance overview",
            one:"231",
            two:"93.1%",
            three:"09"
        },

        payroll: {
            title:"Payroll overview",
            one:"248",
            two:"84%",
            three:"₹14.8L"
        }

    };


    analysisTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            analysisTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const key = tab.dataset.analysis;

            const data = analysisData[key];

            if (!data) return;

            if (analysisTitle) {
                analysisTitle.textContent = data.title;
            }

            if (countOne) {
                countOne.textContent = data.one;
            }

            if (countTwo) {
                countTwo.textContent = data.two;
            }

            if (countThree) {
                countThree.textContent = data.three;
            }

        });

    });


    /* =====================================================
       CHART ANIMATION
    ===================================================== */

    const chart =
        page.querySelector(".sbl-hr-chart-svg");

    if (chart && "IntersectionObserver" in window) {

        const chartObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        chart.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold:0.3
            }
        );

        chartObserver.observe(chart);

    } else if (chart) {

        chart.classList.add("active");

    }


    /* =====================================================
       HERO DASHBOARD MOUSE PARALLAX
    ===================================================== */

    const heroVisual =
        page.querySelector(".sbl-hr-hero-visual");

    const dashboard =
        page.querySelector(".sbl-hr-dashboard");

    if (
        heroVisual &&
        dashboard &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        heroVisual.addEventListener("mousemove", function (event) {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            const rotateY = x * 7;
            const rotateX = y * -5;

            dashboard.style.transform =
                `perspective(1200px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)`;

        });


        heroVisual.addEventListener("mouseleave", function () {

            dashboard.style.transform =
                "perspective(1200px) rotateY(-5deg) rotateX(2deg)";

        });

    }


    /* =====================================================
       LEAVE APPROVAL INTERACTION
    ===================================================== */

    const approveButtons =
        page.querySelectorAll(".sbl-hr-leave-item button");

    approveButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (
                button.classList.contains("approve")
            ) {

                button.textContent = "Approved";

                button.classList.remove("approve");

                button.classList.add("pending");

                button.style.color = "#15885b";
                button.style.background = "#e5f6ed";

            } else {

                button.textContent = "Pending";

                button.classList.remove("pending");

                button.classList.add("approve");

                button.style.color = "";
                button.style.background = "";

            }

        });

    });


    /* =====================================================
       PERIOD SELECT
    ===================================================== */

    const periodSelect =
        document.getElementById("sblHrPeriod");

    if (periodSelect) {

        periodSelect.addEventListener("change", function () {

            const selected = periodSelect.value;

            if (!analysisTitle) return;

            const activeTab =
                page.querySelector(
                    ".sbl-hr-analysis-tab.active"
                );

            const currentKey =
                activeTab
                    ? activeTab.dataset.analysis
                    : "overview";

            const data =
                analysisData[currentKey];

            if (!data) return;

            analysisTitle.textContent =
                data.title + " · " + selected;

        });

    }


    /* =====================================================
       FEATURE CARD TILT
    ===================================================== */

    const featureCards =
        page.querySelectorAll(".sbl-hr-feature-card");

    if (window.matchMedia("(pointer:fine)").matches) {

        featureCards.forEach(function (card) {

            card.addEventListener("mousemove", function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) / rect.width - .5;

                const y =
                    (event.clientY - rect.top) / rect.height - .5;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${y * -3}deg)
                     rotateY(${x * 3}deg)
                     translateY(-9px)`;

            });

            card.addEventListener("mouseleave", function () {

                card.style.transform = "";

            });

        });

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
