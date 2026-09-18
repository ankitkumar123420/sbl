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

/* =====================================================
   SBL TUTORIALS
   YouTube Video Library
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tutorialItems = document.querySelectorAll(
        ".sbl-tutorials-page .tutorial-item"
    );

    const filters = document.querySelectorAll(
        ".sbl-tutorials-page .tutorial-filter"
    );

    const searchInput = document.getElementById("tutorialSearch");

    const tutorialPlayer =
        document.getElementById("tutorialPlayer");

    const previewTitle =
        document.getElementById("previewTitle");

    const previewDescription =
        document.getElementById("previewDescription");

    const previewCategory =
        document.getElementById("previewCategory");

    const previewDuration =
        document.getElementById("previewDuration");

    const noResults =
        document.getElementById("tutorialNoResults");


    let currentFilter = "all";


    /* =================================================
       GET YOUTUBE EMBED URL
    ================================================= */

    function getYouTubeEmbedUrl(videoId) {

        if (!videoId) {
            return "";
        }

        return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }


    /* =================================================
       LOAD VIDEO
    ================================================= */

    function loadTutorial(item, autoplay = false) {

        if (!item) return;


        const videoId =
            item.getAttribute("data-video");

        const title =
            item.getAttribute("data-title") || "";

        const description =
            item.getAttribute("data-description") || "";

        const category =
            item.getAttribute("data-category") || "";

        const duration =
            item.getAttribute("data-duration") || "";


        /* ---------------------------------------------
           ACTIVE ITEM
        --------------------------------------------- */

        tutorialItems.forEach(tutorial => {
            tutorial.classList.remove("active");
        });

        item.classList.add("active");


        /* ---------------------------------------------
           UPDATE TEXT
        --------------------------------------------- */

        previewTitle.textContent = title;

        previewDescription.textContent = description;

        previewCategory.textContent =
            category.replace(/-/g, " ").toUpperCase();

        previewDuration.textContent = duration;


        /* ---------------------------------------------
           VIDEO
        --------------------------------------------- */

        if (!videoId || videoId === "YOUR_YOUTUBE_VIDEO_ID") {

            tutorialPlayer.src = "";

            return;
        }


        const newVideoUrl =
            getYouTubeEmbedUrl(videoId);


        tutorialPlayer.src = newVideoUrl;


        /* ---------------------------------------------
           AUTOPLAY
        --------------------------------------------- */

        if (autoplay) {

            setTimeout(() => {

                tutorialPlayer.src =
                    `${newVideoUrl}&autoplay=1`;

            }, 100);

        }

    }


    /* =================================================
       CLICK TUTORIAL
    ================================================= */

    tutorialItems.forEach(item => {

        item.addEventListener("click", () => {

            const videoId =
                item.getAttribute("data-video");

            const isAvailable =
                videoId &&
                videoId !== "YOUR_YOUTUBE_VIDEO_ID";


            loadTutorial(item, isAvailable);

        });

    });


    /* =================================================
       FILTER TUTORIALS
    ================================================= */

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(btn => {
                btn.classList.remove("active");
            });

            filter.classList.add("active");


            currentFilter =
                filter.getAttribute("data-filter");


            filterTutorials();

        });

    });


    /* =================================================
       SEARCH + FILTER
    ================================================= */

    function filterTutorials() {

        const searchValue =
            searchInput.value
                .trim()
                .toLowerCase();


        let visibleCount = 0;


        tutorialItems.forEach(item => {

            const category =
                item.getAttribute("data-category")
                    .toLowerCase();

            const title =
                item.getAttribute("data-title")
                    .toLowerCase();

            const description =
                item.getAttribute("data-description")
                    .toLowerCase();


            const matchesCategory =
                currentFilter === "all" ||
                category === currentFilter;


            const matchesSearch =
                !searchValue ||
                title.includes(searchValue) ||
                description.includes(searchValue) ||
                category.includes(searchValue);


            if (matchesCategory && matchesSearch) {

                item.style.display = "grid";

                visibleCount++;

            } else {

                item.style.display = "none";

            }

        });


        /* ---------------------------------------------
           NO RESULTS
        --------------------------------------------- */

        if (visibleCount === 0) {

            noResults.classList.add("active");

        } else {

            noResults.classList.remove("active");

        }

    }


    /* =================================================
       SEARCH INPUT
    ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTutorials
        );

    }


    /* =================================================
       ESCAPE KEY
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (tutorialPlayer) {
                tutorialPlayer.src = "";
            }

        }

    });


    /* =================================================
       INITIAL VIDEO
    ================================================= */

    const firstTutorial =
        document.querySelector(
            ".sbl-tutorials-page .tutorial-item.active"
        );


    if (firstTutorial) {

        loadTutorial(firstTutorial, false);

    }

});

/* =====================================================
   SBL CUSTOM YOUTUBE THUMBNAIL
   ADD-ON
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tutorialItems = document.querySelectorAll(
        ".sbl-tutorials-page .tutorial-item"
    );

    const player = document.getElementById("tutorialPlayer");

    if (!player || !tutorialItems.length) return;


    /* ---------------------------------------------
       CREATE CUSTOM THUMBNAIL
    --------------------------------------------- */

    function createThumbnail(item) {

        const videoId =
            item.getAttribute("data-video");

        const title =
            item.getAttribute("data-title") || "SBL Tutorial";


        /* Remove existing iframe/video */

        player.style.display = "none";


        /* Find wrapper */

        const wrapper =
            player.closest(".preview-video-wrapper");

        if (!wrapper) return;


        /* Remove previous custom thumbnail */

        const oldThumbnail =
            wrapper.querySelector(".custom-video-thumbnail");

        if (oldThumbnail) {
            oldThumbnail.remove();
        }


        /* -----------------------------------------
           CREATE THUMBNAIL
        ----------------------------------------- */

        const thumbnail =
            document.createElement("div");

        thumbnail.className =
            "custom-video-thumbnail";


        /* -----------------------------------------
           DASHBOARD
        ----------------------------------------- */

        thumbnail.innerHTML = `

            <div class="custom-dashboard">

                <div class="custom-dashboard-top">

                    <div class="dashboard-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>


                <div class="custom-dashboard-sidebar">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <div class="custom-dashboard-content">

                    <div class="dashboard-heading"></div>

                    <div class="dashboard-subline"></div>


                    <div class="dashboard-card-row">

                        <div class="dashboard-card"></div>
                        <div class="dashboard-card"></div>
                        <div class="dashboard-card"></div>

                    </div>


                    <div class="dashboard-chart">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>

            </div>


            <div class="custom-play-button">
                ▶
            </div>


            <div class="thumbnail-title">
                ${title}
            </div>

        `;


        wrapper.appendChild(thumbnail);


        /* -----------------------------------------
           CLICK THUMBNAIL
        ----------------------------------------- */

        thumbnail.addEventListener("click", () => {

            if (
                !videoId ||
                videoId === "YOUR_YOUTUBE_VIDEO_ID"
            ) {

                return;

            }


            const youtubeUrl =
                `https://www.youtube.com/watch?v=${videoId}`;


            window.open(
                youtubeUrl,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /* ---------------------------------------------
       LOAD CUSTOM THUMBNAIL WHEN ITEM CLICKED
    --------------------------------------------- */

    tutorialItems.forEach(item => {

        item.addEventListener("click", () => {

            createThumbnail(item);

        });

    });


    /* ---------------------------------------------
       INITIAL THUMBNAIL
    --------------------------------------------- */

    const activeItem =
        document.querySelector(
            ".sbl-tutorials-page .tutorial-item.active"
        );


    if (activeItem) {

        createThumbnail(activeItem);

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




