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
   SBL BUSINESS OPERATIONS JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const page = document.querySelector(".sbl-bo-page");

    if (!page) return;


    /* =====================================================
       SAFE REVEAL SYSTEM
    ====================================================== */

    page.classList.add("sbl-bo-js");

    const revealItems = page.querySelectorAll(".sbl-bo-reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealItems.forEach(item => {
            revealObserver.observe(item);
        });

    } else {

        revealItems.forEach(item => {
            item.classList.add("is-visible");
        });

    }


    /* =====================================================
       HERO NETWORK PARALLAX
    ====================================================== */

    const network = page.querySelector(".sbl-bo-network");

    if (network && window.matchMedia("(pointer:fine)").matches) {

        network.addEventListener("mousemove", (event) => {

            const rect = network.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;

            network.style.transform =
                `perspective(900px)
                 rotateY(${x * 5}deg)
                 rotateX(${y * -5}deg)`;

        });

        network.addEventListener("mouseleave", () => {

            network.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg)";

        });

    }


    /* =====================================================
       NETWORK NODE HOVER
    ====================================================== */

    const networkNodes =
        page.querySelectorAll(".bo-network-node");

    networkNodes.forEach(node => {

        node.addEventListener("mouseenter", () => {

            networkNodes.forEach(other => {

                if (other !== node) {
                    other.style.opacity = ".45";
                }

            });

        });

        node.addEventListener("mouseleave", () => {

            networkNodes.forEach(other => {
                other.style.opacity = "1";
            });

        });

    });


    /* =====================================================
       ECOSYSTEM CARD HOVER
    ====================================================== */

    const ecosystemCards =
        page.querySelectorAll(".sbl-bo-eco-card");

    ecosystemCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            ecosystemCards.forEach(other => {

                if (other !== card) {
                    other.style.opacity = ".45";
                }

            });

        });

        card.addEventListener("mouseleave", () => {

            ecosystemCards.forEach(other => {
                other.style.opacity = "1";
            });

        });

    });


    /* =====================================================
       BUSINESS SIZE TABS
    ====================================================== */

    const sizeTabs =
        page.querySelectorAll(".bo-size-tab");

    const sizePanel =
        page.querySelector(".sbl-bo-size-panel");

    const sizeContent =
        page.querySelector(".bo-size-content");

    const sizeNumber =
        page.querySelector(".bo-size-number");

    if (sizeTabs.length && sizePanel && sizeContent) {

        const sizeData = {

            startup: {
                number: "01",
                label: "STARTUPS",
                title: "Build structured operations from day one.",
                description:
                    "Establish connected processes early so your business can grow without creating unnecessary operational complexity.",
                points: [
                    "Centralized business information",
                    "Simple operational workflows",
                    "Scalable business processes"
                ]
            },

            growth: {
                number: "02",
                label: "GROWING BUSINESSES",
                title: "Connect teams while your business scales.",
                description:
                    "Bring growing teams and processes into one connected operational environment without adding unnecessary complexity.",
                points: [
                    "Connected departments",
                    "Operational visibility",
                    "Automated workflows"
                ]
            },

            enterprise: {
                number: "03",
                label: "ENTERPRISES",
                title: "Coordinate complex operations at scale.",
                description:
                    "Create a centralized operational layer for larger organizations managing multiple teams, processes and business functions.",
                points: [
                    "Cross-department visibility",
                    "Scalable operations",
                    "Intelligent automation"
                ]
            }

        };


        function updateSize(type) {

            const data = sizeData[type];

            if (!data) return;

            sizeTabs.forEach(tab => {

                tab.classList.toggle(
                    "active",
                    tab.dataset.size === type
                );

            });

            sizeContent.style.opacity = "0";
            sizeContent.style.transform = "translateY(10px)";

            setTimeout(() => {

                sizeNumber.textContent = data.number;

                sizeContent.innerHTML = `
                    <span>${data.label}</span>

                    <h3>${data.title}</h3>

                    <p>${data.description}</p>

                    <ul>
                        ${data.points
                            .map(point => `<li>${point}</li>`)
                            .join("")}
                    </ul>
                `;

                sizeContent.style.opacity = "1";
                sizeContent.style.transform = "translateY(0)";

            }, 180);

        }


        sizeTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                updateSize(tab.dataset.size);

            });

        });

    }


    /* =====================================================
       AUTOMATION WORKFLOW
    ====================================================== */

    const autoSteps =
        page.querySelectorAll(".bo-auto-step");

    if (autoSteps.length) {

        let currentStep = 0;

        setInterval(() => {

            autoSteps.forEach(step => {
                step.classList.remove("active");
            });

            autoSteps[currentStep].classList.add("active");

            currentStep++;

            if (currentStep >= autoSteps.length) {
                currentStep = 0;
            }

        }, 1800);

    }


    /* =====================================================
       INTELLIGENCE FLOW
    ====================================================== */

    const intelligenceItems =
        page.querySelectorAll(".bo-intel-item");

    if (intelligenceItems.length) {

        let current = 0;

        setInterval(() => {

            intelligenceItems.forEach(item => {
                item.classList.remove("active");
            });

            intelligenceItems[current].classList.add("active");

            current++;

            if (current >= intelligenceItems.length) {
                current = 0;
            }

        }, 2200);

    }


    /* =====================================================
       DASHBOARD ACTIVITY ANIMATION
    ====================================================== */

    const activityItems =
        page.querySelectorAll(".bo-activity-list > div");

    if (activityItems.length) {

        let activeActivity = 0;

        setInterval(() => {

            activityItems.forEach(item => {
                item.style.transform = "translateX(0)";
                item.style.opacity = ".55";
            });

            activityItems[activeActivity].style.transform =
                "translateX(5px)";

            activityItems[activeActivity].style.opacity = "1";

            activeActivity++;

            if (activeActivity >= activityItems.length) {
                activeActivity = 0;
            }

        }, 1900);

    }


    /* =====================================================
       COUNTER ANIMATION
    ====================================================== */

    const stats = page.querySelectorAll(
        ".bo-stat strong"
    );

    const animateCounter = (element) => {

        const original = element.textContent.trim();

        const match = original.match(
            /^([^0-9]*)([0-9,.]+)(.*)$/
        );

        if (!match) return;

        const prefix = match[1];
        const numberPart = match[2];
        const suffix = match[3];

        const numericValue =
            parseFloat(numberPart.replace(/,/g, ""));

        if (isNaN(numericValue)) return;

        const duration = 1200;
        const start = performance.now();

        function update(time) {

            const progress =
                Math.min((time - start) / duration, 1);

            const eased =
                1 - Math.pow(1 - progress, 3);

            const value =
                numericValue * eased;

            let display;

            if (original.includes("%")) {

                display = value.toFixed(1);

            } else if (original.includes("L")) {

                display = value.toFixed(2);

            } else {

                display =
                    Math.floor(value).toLocaleString("en-IN");

            }

            element.textContent =
                prefix + display + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }

        }

        requestAnimationFrame(update);

    };


    if ("IntersectionObserver" in window) {

        const statObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        animateCounter(entry.target);

                        statObserver.unobserve(entry.target);

                    });

                },
                {
                    threshold: .5
                }
            );

        stats.forEach(stat => {
            statObserver.observe(stat);
        });

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    page.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       AUTOMATION CANVAS PARALLAX
    ====================================================== */

    const canvas =
        page.querySelector(".sbl-bo-automation-canvas");

    if (canvas && window.matchMedia("(pointer:fine)").matches) {

        canvas.addEventListener("mousemove", event => {

            const rect = canvas.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - .5;

            const y =
                (event.clientY - rect.top) / rect.height - .5;

            canvas.style.transform =
                `perspective(1000px)
                 rotateY(${x * 2}deg)
                 rotateX(${y * -2}deg)`;

        });

        canvas.addEventListener("mouseleave", () => {

            canvas.style.transform =
                "perspective(1000px) rotateY(0deg) rotateX(0deg)";

        });

    }


    /* =====================================================
       ESCAPE / SAFETY
    ====================================================== */

    window.addEventListener("load", () => {

        revealItems.forEach(item => {

            const rect =
                item.getBoundingClientRect();

            if (rect.top < window.innerHeight) {
                item.classList.add("is-visible");
            }

        });

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

