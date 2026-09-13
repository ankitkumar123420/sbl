document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const form = document.getElementById("sblDemoForm");

    const canvas = document.getElementById("sblCaptchaCanvas");

    const captchaInput =
        document.getElementById("sblCaptchaInput");

    const captchaRefresh =
        document.getElementById("sblCaptchaRefresh");

    const captchaError =
        document.getElementById("sblCaptchaError");

    const successMessage =
        document.getElementById("sblDemoSuccess");


    /* =====================================================
       CAPTCHA
    ====================================================== */

    let currentCaptcha = "";


    function generateCaptchaCode() {

        const characters =
            "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        let code = "";

        for (let i = 0; i < 6; i++) {

            const randomIndex =
                Math.floor(
                    Math.random() * characters.length
                );

            code += characters[randomIndex];
        }

        currentCaptcha = code;

        drawCaptcha(code);
    }


    /* =====================================================
       DRAW CAPTCHA
    ====================================================== */

    function drawCaptcha(code) {

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;


        /* Background */

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        ctx.fillStyle = "#f8fafc";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /* Random lines */

        for (let i = 0; i < 7; i++) {

            ctx.beginPath();

            ctx.moveTo(
                Math.random() * width,
                Math.random() * height
            );

            ctx.lineTo(
                Math.random() * width,
                Math.random() * height
            );

            ctx.strokeStyle =
                "rgba(8,120,216,0.25)";

            ctx.lineWidth = 1;

            ctx.stroke();
        }


        /* Random dots */

        for (let i = 0; i < 35; i++) {

            ctx.beginPath();

            ctx.arc(
                Math.random() * width,
                Math.random() * height,
                Math.random() * 1.5,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(5,70,130,0.25)";

            ctx.fill();
        }


        /* Characters */

        const characterWidth =
            width / code.length;


        for (let i = 0; i < code.length; i++) {

            ctx.save();

            const x =
                i * characterWidth + 12;

            const y =
                36 + (Math.random() * 7 - 3.5);

            const rotation =
                (Math.random() * 0.25) - 0.125;


            ctx.translate(
                x,
                y
            );

            ctx.rotate(rotation);


            ctx.font =
                "bold 27px Arial";


            ctx.fillStyle =
                i % 2 === 0
                    ? "#0878d8"
                    : "#101828";


            ctx.fillText(
                code[i],
                0,
                0
            );


            ctx.restore();
        }

    }


    /* =====================================================
       REFRESH CAPTCHA
    ====================================================== */

    if (captchaRefresh) {

        captchaRefresh.addEventListener(
            "click",
            function () {

                generateCaptchaCode();

                captchaInput.value = "";

                captchaError.textContent = "";

            }
        );

    }


    /* =====================================================
       CAPTCHA INPUT
    ====================================================== */

    if (captchaInput) {

        captchaInput.addEventListener(
            "input",
            function () {

                captchaError.textContent = "";

                this.value =
                    this.value
                        .toUpperCase()
                        .replace(/[^A-Z0-9]/g, "");

            }
        );

    }


    /* =====================================================
       FORM SUBMIT
    ====================================================== */

    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Clear previous error */

                captchaError.textContent = "";


                /* Get CAPTCHA */

                const enteredCaptcha =
                    captchaInput.value
                        .trim()
                        .toUpperCase();


                /* Validate CAPTCHA */

                if (
                    enteredCaptcha === "" ||
                    enteredCaptcha !== currentCaptcha
                ) {

                    captchaError.textContent =
                        "Incorrect verification code. Please try again.";

                    generateCaptchaCode();

                    captchaInput.value = "";

                    captchaInput.focus();

                    return;
                }


                /* Success */

                successMessage.classList.add("show");


                /* Hide submit */

                const submitButton =
                    form.querySelector(
                        ".sbl-demo-submit"
                    );

                if (submitButton) {

                    submitButton.style.display =
                        "none";

                }


                /* Reset form */

                form.reset();


                /* Generate fresh CAPTCHA */

                generateCaptchaCode();


                /* Scroll success into view */

                setTimeout(function () {

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

            }
        );

    }


    /* =====================================================
       INITIAL CAPTCHA
    ====================================================== */

    generateCaptchaCode();

});