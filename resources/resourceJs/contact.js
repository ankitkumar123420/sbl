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


    

    const form =
        document.getElementById("sblContactForm");

    const canvas =
        document.getElementById("captchaCanvas");

    const captchaInput =
        document.getElementById("captchaInput");

    const refreshButton =
        document.getElementById("refreshCaptcha");

    const captchaError =
        document.getElementById("captchaError");

    const captchaArea =
        document.querySelector(".captcha-area");

    const successMessage =
        document.getElementById("contactSuccess");


    if (!form || !canvas) {
        return;
    }


    const ctx =
        canvas.getContext("2d");


    let currentCaptcha = "";


    /* =====================================================
       GENERATE RANDOM CAPTCHA
    ===================================================== */

    function generateCaptchaCode() {

        const characters =
            "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        let code = "";

        for (let i = 0; i < 6; i++) {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    characters.length
                );

            code += characters[randomIndex];
        }

        return code;

    }


    /* =====================================================
       DRAW CAPTCHA
    ===================================================== */

    function drawCaptcha() {

        currentCaptcha =
            generateCaptchaCode();


        /* Clear canvas */

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        /* Background */

        ctx.fillStyle = "#f1f6fa";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        /* Random lines */

        for (let i = 0; i < 7; i++) {

            ctx.beginPath();

            ctx.moveTo(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            );

            ctx.lineTo(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            );

            ctx.strokeStyle =
                "rgba(8,120,216," +
                (0.15 + Math.random() * 0.25) +
                ")";

            ctx.lineWidth =
                1 + Math.random() * 2;

            ctx.stroke();

        }


        /* Random dots */

        for (let i = 0; i < 45; i++) {

            ctx.beginPath();

            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 2 + 1,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(7,17,31," +
                (0.15 + Math.random() * 0.25) +
                ")";

            ctx.fill();

        }


        /* Draw each character */

        for (
            let i = 0;
            i < currentCaptcha.length;
            i++
        ) {

            const character =
                currentCaptcha[i];

            const x =
                35 + i * 43;

            const y =
                51 + (Math.random() * 10 - 5);

            const rotation =
                (Math.random() * 0.35) - 0.175;


            ctx.save();

            ctx.translate(x, y);

            ctx.rotate(rotation);

            ctx.font =
                "800 38px Arial";

            ctx.textAlign =
                "center";

            ctx.textBaseline =
                "middle";


            /* Alternate text colours */

            if (i % 3 === 0) {

                ctx.fillStyle =
                    "#0878d8";

            } else if (i % 3 === 1) {

                ctx.fillStyle =
                    "#142638";

            } else {

                ctx.fillStyle =
                    "#c49300";

            }


            ctx.fillText(
                character,
                0,
                0
            );

            ctx.restore();

        }

    }


    /* =====================================================
       REFRESH CAPTCHA
    ===================================================== */

    refreshButton.addEventListener(
        "click",
        function () {

            drawCaptcha();

            captchaInput.value = "";

            captchaArea.classList.remove(
                "invalid"
            );

        }
    );


    /* =====================================================
       CAPTCHA INPUT
    ===================================================== */

    captchaInput.addEventListener(
        "input",
        function () {

            captchaInput.value =
                captchaInput.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");

            captchaArea.classList.remove(
                "invalid"
            );

        }
    );


    /* =====================================================
       REMOVE ERROR WHEN USER TYPES
    ===================================================== */

    const inputs =
        form.querySelectorAll(
            "input, textarea, select"
        );


    inputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                const group =
                    input.closest(".form-group");

                if (group) {

                    group.classList.remove(
                        "invalid"
                    );

                }

            }
        );


        input.addEventListener(
            "change",
            function () {

                const group =
                    input.closest(".form-group");

                if (group) {

                    group.classList.remove(
                        "invalid"
                    );

                }

            }
        );

    });


    /* =====================================================
       VALIDATE FORM
    ===================================================== */

    function validateForm() {

        let valid = true;


        const name =
            document.getElementById(
                "contactName"
            );


        const email =
            document.getElementById(
                "contactEmail"
            );


        const phone =
            document.getElementById(
                "contactPhone"
            );


        const requirement =
            document.getElementById(
                "contactRequirement"
            );


        const message =
            document.getElementById(
                "contactMessage"
            );


        /* NAME */

        if (
            !name.value.trim()
        ) {

            name.closest(".form-group")
                .classList.add("invalid");

            valid = false;

        }


        /* EMAIL */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                email.value.trim()
            )
        ) {

            email.closest(".form-group")
                .classList.add("invalid");

            valid = false;

        }


        /* PHONE */

        const phonePattern =
            /^[0-9+\-\s()]{8,15}$/;


        if (
            !phonePattern.test(
                phone.value.trim()
            )
        ) {

            phone.closest(".form-group")
                .classList.add("invalid");

            valid = false;

        }


        /* REQUIREMENT */

        if (
            !requirement.value
        ) {

            requirement.closest(".form-group")
                .classList.add("invalid");

            valid = false;

        }


        /* MESSAGE */

        if (
            !message.value.trim()
        ) {

            message.closest(".form-group")
                .classList.add("invalid");

            valid = false;

        }


        return valid;

    }


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Validate normal fields */

            const formValid =
                validateForm();


            if (!formValid) {

                return;

            }


            /* Validate CAPTCHA */

            const enteredCaptcha =
                captchaInput.value
                    .trim()
                    .toUpperCase();


            if (
                enteredCaptcha !==
                currentCaptcha
            ) {

                captchaArea.classList.add(
                    "invalid"
                );

                captchaError.textContent =
                    "Incorrect verification code.";

                captchaInput.focus();

                drawCaptcha();

                captchaInput.value = "";

                return;

            }

/* =====================================================
   CAPTCHA CORRECT
===================================================== */

captchaArea.classList.remove("invalid");


/* =====================================================
   COLLECT FORM DATA
===================================================== */

const formData = new FormData(form);


/* =====================================================
   SEND TO PHP
===================================================== */

fetch("send-enquiry.php", {

    method: "POST",

    body: formData

})

.then(function (response) {

    return response.json();

})

.then(function (data) {

    if (data.success) {

        /* -----------------------------------------
           SHOW YOUR EXISTING SUCCESS MESSAGE
        ----------------------------------------- */

        successMessage.textContent =
            "✓ Your enquiry has been submitted successfully.";

        successMessage.classList.add("show");


        /* -----------------------------------------
           RESET FORM
        ----------------------------------------- */

        form.reset();


        /* -----------------------------------------
           NEW CAPTCHA
        ----------------------------------------- */

        drawCaptcha();


        /* -----------------------------------------
           HIDE SUCCESS AFTER 6 SECONDS
        ----------------------------------------- */

        setTimeout(function () {

            successMessage.classList.remove("show");

        }, 6000);

    }

    else {

        successMessage.textContent =
            "✕ " +
            (data.message ||
            "Unable to send your enquiry.");

        successMessage.classList.add("show");


        setTimeout(function () {

            successMessage.classList.remove("show");

        }, 6000);

    }

})

.catch(function (error) {

    console.error(
        "Contact form error:",
        error
    );


    successMessage.textContent =
        "✕ Unable to send your enquiry. Please try again.";

    successMessage.classList.add("show");


    setTimeout(function () {

        successMessage.classList.remove("show");

    }, 6000);

});

            /* Hide success after some time */

            setTimeout(
                function () {

                    successMessage.classList.remove(
                        "show"
                    );

                },
                6000
            );

        }
    );


    /* =====================================================
       INITIAL CAPTCHA
    ===================================================== */

    drawCaptcha();

});

// yaha se footer h 

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
