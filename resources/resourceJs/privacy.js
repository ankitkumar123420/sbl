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
   SBL LEGAL PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navItems =
        document.querySelectorAll(".legal-nav-item");

    const sections =
        document.querySelectorAll(".legal-section");


    if (!navItems.length || !sections.length) {
        return;
    }


    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const target =
                this.dataset.section;


            /* -----------------------------------------
               Remove active navigation
            ----------------------------------------- */

            navItems.forEach(function (nav) {

                nav.classList.remove("active");

            });


            /* -----------------------------------------
               Remove active content
            ----------------------------------------- */

            sections.forEach(function (section) {

                section.classList.remove("active");

            });


            /* -----------------------------------------
               Activate clicked item
            ----------------------------------------- */

            this.classList.add("active");


            const targetSection =
                document.getElementById(target);


            if (targetSection) {

                targetSection.classList.add("active");

            }


            /* -----------------------------------------
               Mobile: keep selected item visible
            ----------------------------------------- */

            if (window.innerWidth <= 750) {

                this.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });

            }


            /* -----------------------------------------
               Scroll content to top
            ----------------------------------------- */

            const content =
                document.querySelector(".legal-content");

            if (content) {

                const top =
                    content.getBoundingClientRect().top +
                    window.pageYOffset -
                    95;

                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });

            }

        });

    });

});



document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       SBL LEGAL DATA
       50+ POINTS IN EACH FIELD
       ========================================================= */

    const legalData = {

        /* =========================
           01 — PRIVACY POLICY
           ========================= */

        privacy: [
            "SBL may collect and process personal data where such processing is necessary for providing, maintaining, securing, improving, and administering its services; fulfilling contractual or service-related obligations; complying with applicable laws, regulations, governmental requirements, or lawful requests; preventing fraud, misuse, unauthorised access, and security incidents; resolving disputes; maintaining business and operational records; or for other purposes disclosed to the user and permitted under applicable law.",
            "Here sbl is denoted as  the main company that commenced operations",
            "Where consent is required under applicable law, SBL will seek such consent through appropriate mechanisms. Where processing is necessary for contractual, legal, security, or other legally recognised purposes, processing may be carried out to the extent permitted by applicable law.",
            "SBL retains personal data and business information only for as long as reasonably necessary for the purposes for which it was collected, to provide the relevant services, maintain business and transaction records, resolve disputes, enforce contractual terms, comply with applicable legal, regulatory, accounting, tax, security, and reporting obligations, or protect SBL's legitimate interests",
            " Retention periods may vary depending upon the nature and sensitivity of the information, the purpose of processing, contractual requirements, statutory obligations, security requirements, dispute or investigation requirements, and applicable limitation periods.Upon expiry of the applicable retention period, SBL may delete, anonymise, aggregate, archive, or otherwise securely dispose of information, subject to applicable legal obligations, backup cycles, disaster-recovery requirements, and legitimate business requirements.Backup or disaster-recovery copies may remain for a limited period after deletion from active systems and may not be immediately removable where technical or operational requirements make immediate deletion impracticable.",

            "User RightsSubject to applicable law and reasonable verification requirements, users may have rights relating to their personal data, including the right to request access to information concerning their personal data, correction of inaccurate information, deletion or erasure where legally applicable, restriction or objection to certain processing where applicable, portability where applicable, and withdrawal of consent where processing is based on consent.Requests may be submitted through SBL's designated privacy or grievance contact. SBL may require reasonable information to verify the identity and authority of the requester before processing a request.Certain requests may be limited, delayed, or refused where retention or processing is required or permitted by applicable law, contractual obligations, security requirements, fraud prevention, dispute resolution, or other legitimate purposes.",
            "SBL may use cloud infrastructure, hosting providers, software providers, analytics providers, communication services, security providers, payment processors, or other service providers that may process information from locations outside India.Where personal data is transferred, stored, or processed outside India, SBL will take such contractual, organisational, technical, and other measures as may be required under applicable law.International processing may also be subject to the terms, privacy practices, and security controls of the relevant third-party service provider.",
            "SBL's services are primarily intended for businesses, organisations, professionals, and other users capable of entering into legally binding arrangements.SBL does not knowingly seek to collect personal data from children except where such collection is expressly permitted and appropriately authorised under applicable law.Where applicable law requires parental, guardian, or other verifiable authorisation for processing information relating to a child, SBL will implement appropriate measures in accordance with such requirements.",
            "SBL maintains security and incident-response procedures designed to identify, contain, investigate, mitigate, and recover from suspected or confirmed security incidents and personal-data breaches.Where a personal-data breach occurs, SBL will assess the nature, scope, impact, and applicable legal requirements and will provide notifications to affected users, authorities, regulators, or other relevant parties where and to the extent required by applicable law.SBL may take immediate protective measures, including restricting access, suspending affected functionality, resetting credentials, isolating systems, restoring services from backups, or taking other appropriate remedial measures.",
            "Certain SBL products or features may use automated systems, algorithms, machine-learning models, artificial intelligence, analytics, or rule-based processing to provide functionality such as classification, recommendations, summarisation, reporting, workflow assistance, anomaly detection, search, forecasting, content generation, or other business-support functions.Automated outputs may depend upon the information supplied to the system, configuration, available data, algorithms, third-party technologies, and other technical factors. Such outputs may contain errors, omissions, inaccuracies, or limitations.Unless expressly stated otherwise, SBL's automated or AI-assisted outputs are provided as decision-support or operational tools and are not professional legal, financial, investment, tax, accounting, medical, employment, or other regulated professional advice.Users remain responsible for reviewing and independently verifying automated outputs before relying upon them for material business, financial, legal, regulatory, operational, or other consequential decisions.",
           

            "These provisions apply to personal information collected, received, generated, stored, transmitted, or otherwise processed in connection with SBL websites, applications, software, communications, and related services.",

            "SBL may process information where necessary to provide requested services, administer accounts, maintain operational continuity, comply with law, protect legitimate interests, or perform an applicable contractual obligation.",

            "Information may include identifiers, contact details, account credentials, business information, device data, usage records, transaction details, and other information voluntarily supplied by an authorised user.",

            "Where information is submitted by a customer or organisation, the submitting party remains responsible for ensuring that it has an appropriate legal basis and authority for providing such information to SBL.",

            "SBL may collect technical information concerning browsers, devices, operating systems, network characteristics, approximate location signals, access times, and application interactions for legitimate operational purposes.",

            "Account information may be used to authenticate users, administer permissions, communicate service notices, maintain records, and prevent unauthorised access or misuse of SBL services.",

            "SBL may retain communications, support requests, service tickets, correspondence, and related records where reasonably required for service administration, dispute resolution, security, or legal compliance.",

            "Information may be processed to configure, operate, troubleshoot, maintain, improve, and secure SBL software and associated digital infrastructure.",

            "SBL may use aggregated, statistical, or de-identified information for analytics, service improvement, capacity planning, reporting, and product development, subject to applicable law.",

            "Personal information shall not be knowingly collected for a purpose materially incompatible with the purpose communicated at the time of collection, except where otherwise permitted or required by applicable law.",

            "Users are expected to provide information that is accurate, current, complete, and not misleading, and SBL may reasonably rely upon information supplied through authorised channels.",

            "SBL may request additional information or verification where reasonably necessary to prevent fraud, protect an account, satisfy regulatory requirements, or resolve a material service or security issue.",

            "Where consent is relied upon as a lawful basis, the relevant consent may be withdrawn subject to legal, contractual, technical, and operational limitations applicable to the requested processing.",

            "Withdrawal of consent shall not automatically invalidate processing lawfully completed before withdrawal, nor necessarily require deletion where retention is authorised or required by law.",

            "SBL may send transactional, administrative, security, service, billing, and operational communications that are necessary for management of an account or service relationship.",

            "Promotional communications may be subject to available preference controls, while legally required or service-critical communications may continue irrespective of marketing preferences.",

            "Customer data supplied for use within an SBL service may be processed according to the applicable agreement, order form, statement of work, configuration, and documented service requirements.",

            "SBL may use authorised service providers, infrastructure providers, payment processors, communication providers, analytics providers, or professional advisers where reasonably necessary for service delivery.",

            "Where third parties process information on SBL's behalf, contractual, technical, organisational, or other appropriate measures may be used according to the nature and risk of the processing.",

            "Information may be disclosed where required by court order, lawful governmental demand, regulatory process, statutory obligation, or other legally enforceable requirement.",

            "SBL may disclose limited information to protect its rights, property, systems, users, personnel, or the public where such disclosure is reasonably necessary and legally permissible.",

            "In a merger, acquisition, restructuring, financing, sale of assets, or similar corporate transaction, relevant information may be transferred as part of the transaction subject to applicable legal requirements.",

            "Professional advisers, auditors, insurers, legal representatives, and other authorised consultants may receive information where reasonably necessary for legitimate professional purposes.",

            "Information may be processed or stored across jurisdictions where infrastructure or service providers operate, subject to applicable contractual and legal requirements.",

            "SBL may retain records for periods reasonably necessary for contractual administration, accounting, taxation, security, audit, dispute resolution, regulatory compliance, or establishment and defence of legal claims.",

            "Deletion requests may be subject to verification, lawful retention requirements, technical limitations, backup cycles, outstanding disputes, or other circumstances in which immediate deletion is not legally required.",

            "Archived or backup information may remain temporarily after primary deletion where removal from backup systems is impracticable, disproportionate, or inconsistent with secure continuity procedures.",

            "Requests concerning personal information should be submitted through the designated SBL communication channel and may require sufficient information to establish the requester's identity and authority.",

            "SBL may decline, limit, defer, or redirect a request where doing so is permitted by applicable law, necessary to protect another person's rights, or required to preserve evidence or legal obligations.",

            "Where a customer controls the underlying data, SBL may require the customer to address data-subject requests that arise from the customer's own processing purposes and instructions.",

            "SBL does not intentionally solicit personal information from children where such collection is prohibited, and customers remain responsible for ensuring age-appropriate use of their accounts and services.",

            "Users shall not upload sensitive or regulated information unless the relevant SBL service and written agreement expressly contemplate such processing and the customer has established the required legal basis.",

            "Payment-related information may be handled through appropriate payment channels, and SBL may retain limited transaction records necessary for reconciliation, accounting, fraud prevention, or legal compliance.",

            "Cookies and similar technologies may be used for authentication, preferences, security, analytics, performance measurement, and other disclosed purposes, subject to applicable consent requirements.",

            "Users may receive information regarding service changes, policy updates, security matters, maintenance, or material operational events through account notices, email, or other authorised communication channels.",

            "SBL may use automated or algorithmic functions for operational analysis, recommendations, workflow assistance, classification, or service improvement, while the customer remains responsible for decisions made using such outputs.",

            "AI-assisted outputs may be probabilistic, incomplete, or context-dependent and should not be treated as an infallible substitute for human review where decisions carry material legal, financial, operational, employment, or safety consequences.",

            "SBL may investigate suspected misuse, fraud, unauthorised access, policy violations, or security incidents and may preserve relevant records for investigation and lawful response.",

            "Information may be preserved when reasonably necessary for litigation, investigations, audits, regulatory proceedings, dispute resolution, or the establishment, exercise, or defence of legal rights.",

            "Confidential information received from customers may be subject to contractual confidentiality obligations, except where disclosure is authorised, legally required, independently developed, publicly available, or otherwise lawfully permitted.",

            "Users are responsible for safeguarding credentials, access devices, authentication factors, and account information under their control and for promptly reporting suspected compromise.",

            "No security measure can guarantee absolute protection against every threat, and SBL does not represent that unauthorised access, interruption, loss, or compromise is impossible.",

            "SBL may amend this policy to reflect changes in services, technology, law, regulatory expectations, security practices, or organisational structure, subject to applicable notice requirements.",

            "If an executed agreement, order form, data-processing arrangement, or other binding contract contains a specific privacy obligation, the applicable contractual provision may govern to the extent of any lawful inconsistency.",

            "SBL may maintain records demonstrating collection, consent, disclosures, requests, complaints, security events, and policy administration where such records are reasonably necessary for accountability.",

            "Privacy-related complaints may be submitted through SBL's designated contact channel, and SBL may request sufficient particulars to investigate the matter and determine an appropriate response.",

            "SBL does not claim any certification, statutory approval, accreditation, or privacy designation unless the relevant status has actually been obtained and remains applicable to the particular service.",

            "Applicable privacy obligations may vary according to jurisdiction, service configuration, customer role, information category, and applicable statutory requirements.",

            "Nothing in this Privacy Policy is intended to remove or restrict a statutory right, mandatory privacy protection, or legal remedy that cannot lawfully be excluded.",

            "SBL may retain limited records necessary to demonstrate privacy governance, investigate complaints, respond to lawful requests, maintain audit trails, and establish or defend legal rights.",

            "Any privacy right, restriction, objection, or remedy shall operate subject to applicable statutory conditions, verification requirements, technical feasibility, contractual obligations, and legally permitted exemptions."

        ],


        /* =========================
           02 — TERMS OF SERVICE
           ========================= */

        terms: [
            "“SBL”, “Company”, “we”, “us” or “our” means SBL and the applicable legal entity providing the relevant service.“User”, “Customer”, “you” or “your” means the person, organisation, business, entity, or authorised representative accessing or using an SBL service.",
            "“Services” means the software, SaaS platforms, ERP systems, business-automation tools, websites, applications, APIs, dashboards, integrations, support services, documentation, and related functionality made available by SBL.",
            "“Customer Data” means information, records, documents, files, transactions, configurations, or other information submitted, uploaded, generated, or otherwise provided by a customer through the Services.",
            "“Third-Party Services” means services, platforms, APIs, infrastructure, payment systems, communication systems, integrations, or other technologies operated by third parties.",
            "Headings are for convenience only and do not affect interpretation. References to applicable law include amendments, replacements, and legally applicable regulations made under such law.",
            "Users are responsible for providing accurate and current registration information and for maintaining the confidentiality and security of their account credentials.Users are responsible for all activities carried out through their account unless the user can establish that such activity occurred without their authorisation and despite reasonable security measures being maintained by the user.Users must immediately notify SBL through the designated security channel if they reasonably suspect unauthorised access, credential compromise, or misuse of their account.SBL may require identity or authority verification before making changes to an account or disclosing account-related information.",
            "Except for Customer Data and materials expressly owned by customers or third parties, all software, source code, object code, interfaces, designs, layouts, trademarks, logos, documentation, databases, workflows, algorithms, processes, technology, content, and other intellectual property forming part of the Services are owned by or licensed to SBL.",
            "Except as expressly permitted under these Terms or applicable law, users may not copy, reproduce, modify, distribute, reverse engineer, decompile, disassemble, resell, sublicense, commercially exploit, or create derivative works from SBL's intellectual property.",
            "SBL may suspend, restrict, or terminate access to all or part of a Service where reasonably necessary due to security concerns, suspected misuse, violation of these Terms, non-payment, legal or regulatory requirements, threats to the Services or other users, operational necessity, or other circumstances permitted under the applicable agreement.Where reasonably practicable, SBL may provide notice before suspension or termination; however, immediate action may be taken where delay may create security, legal, operational, or other material risk.Termination or suspension does not automatically extinguish obligations that by their nature are intended to survive termination.",
            "Subscription cancellation, refunds, credits, renewals, and payment adjustments shall be governed by the applicable subscription plan, order form, commercial agreement, or refund policy displayed or communicated at the time of purchase.Unless expressly stated otherwise or required by applicable law, fees paid for completed subscription periods, consumed services, customised implementation, professional services, third-party charges, or non-refundable plans may not be refundable.Where a refund is legally required, SBL will process the applicable refund in accordance with the relevant legal and contractual requirements.",
            "SBL will use commercially reasonable efforts to maintain the availability and functionality of its Services. However, uninterrupted or error-free availability is not guaranteed.Services may become temporarily unavailable due to scheduled maintenance, emergency maintenance, upgrades, security measures, infrastructure failures, third-party dependencies, telecommunications failures, force majeure events, cyber incidents, or other circumstances beyond SBL's reasonable control.",
            "Any specific service-level commitment, uptime commitment, support response time, or service credit shall apply only where expressly agreed in a separate written SLA or applicable service agreement.",
            "To the extent permitted by applicable law, the User agrees to indemnify and hold harmless SBL, its affiliates, officers, employees, contractors, and service providers from claims, losses, liabilities, damages, costs, and reasonable expenses arising from:(a) the User's breach of these Terms;(b) unlawful or unauthorised use of the Services;(c) Customer Data or materials supplied by the User that infringe applicable law or third-party rights;(d) misuse of the Services by the User or persons acting under the User's account; or(e) violation of third-party rights caused by the User's actions or instructions.",
            "SBL shall not be responsible for delay, interruption, or failure to perform caused by circumstances beyond its reasonable control, including natural disasters, acts of government, war, terrorism, civil disturbance, epidemics, infrastructure failure, telecommunications failure, power failure, internet disruption, cyberattacks, third-party service outages, cloud-service failures, labour disputes, or other events that could not reasonably have been prevented or overcome through commercially reasonable measures.",
            "These Terms shall be governed by and interpreted in accordance with the laws of India, except to the extent applicable law requires otherwise.Subject to any mandatory statutory rights or jurisdictional requirements, disputes arising out of or relating to these Terms or the Services shall be subject to the jurisdiction of the competent courts",
            "If any provision of these Terms is determined by a competent authority to be invalid, unlawful, or unenforceable, that provision shall be modified or limited to the minimum extent necessary, and the remaining provisions shall continue in full force to the extent permitted by law.Failure by SBL to enforce any provision at any time shall not constitute a waiver of its right to enforce that provision or any other provision in the future.",
            "These Terms, together with the applicable Privacy Policy, Cookie Policy, Security Policy, service-specific terms, order forms, SLAs, and other documents expressly incorporated by reference, constitute the agreement between the User and SBL concerning the relevant Services and supersede prior communications or understandings relating to the same subject matter, except where a separate written agreement expressly provides otherwise.",
            "Provisions relating to intellectual property, confidentiality, payment obligations, Customer Data, acceptable use, indemnification, limitation of liability, dispute resolution, governing law, and any other provision which by its nature should survive termination shall continue to apply after termination or expiry of the Services.",
             

            "By accessing or using any SBL website, software, application, platform, service, documentation, or related functionality, the user acknowledges that these Terms constitute applicable conditions governing such use.",

            "The person accepting these Terms represents that such person possesses sufficient authority to accept contractual obligations on behalf of the relevant individual, business, organisation, or customer.",

            "Users shall provide accurate registration, identification, billing, contact, and business information and shall promptly update information that becomes materially inaccurate or incomplete.",

            "SBL services may include software products, SaaS platforms, dashboards, automation systems, business tools, integrations, documentation, support services, demonstrations, and other digitally delivered functionality.",

            "Specific functionality, availability, pricing, support levels, usage limits, integrations, and contractual obligations may vary according to the applicable subscription, proposal, order form, or statement of work.",

            "SBL may introduce, modify, suspend, replace, enhance, restrict, or discontinue features where reasonably necessary for security, legal compliance, technical development, commercial requirements, or operational reasons.",

            "Certain functionality may be experimental, preview, beta, demonstration, or development-stage functionality and may contain limitations, defects, interruptions, or changes without characteristics of a final production release.",

            "Users shall maintain appropriate account credentials and shall remain responsible for activities conducted through credentials, devices, tokens, or access mechanisms assigned to them.",

            "Sharing credentials with unauthorised persons, bypassing access controls, or permitting unauthorised use may constitute a material violation of these Terms.",

            "Users shall not use SBL services for unlawful, fraudulent, abusive, deceptive, malicious, harmful, or unauthorised activities or for activities that compromise system integrity.",

            "Users shall not attempt unauthorised penetration testing, vulnerability exploitation, reverse engineering, credential extraction, source-code reconstruction, or security-control circumvention.",

            "Users shall not interfere with service availability, overload infrastructure, deploy malicious code, distribute harmful files, or otherwise impair the operation of SBL systems.",

            "All software, interface designs, documentation, trademarks, service marks, source code, architecture, visual elements, and related intellectual property remain subject to applicable ownership rights.",

            "Except for rights expressly granted in writing, no ownership interest in SBL software, technology, documentation, trademarks, or proprietary materials is transferred to the customer.",

            "Subject to applicable subscription terms, SBL grants a limited, non-exclusive, non-transferable, revocable right to access and use the relevant services for authorised business purposes.",

            "Customers retain ownership of customer-provided content to the extent they legally possess such rights, while granting SBL the permissions reasonably necessary to provide contracted services.",

            "Customers represent that their content, instructions, data, files, integrations, and materials do not unlawfully infringe third-party rights or violate applicable law.",

            "Customers remain responsible for determining the legality, accuracy, completeness, and suitability of information uploaded, entered, imported, synchronised, or otherwise processed through SBL services.",

            "Customers are responsible for configuring users, permissions, workflows, approval levels, business rules, integrations, and other settings according to their internal governance requirements.",

            "Third-party integrations may be subject to separate terms, technical limitations, authentication requirements, pricing arrangements, outages, or policy changes imposed by the relevant third party.",

            "Fees, subscription charges, taxes, statutory levies, transaction costs, and other amounts shall be payable according to the applicable commercial terms communicated or contractually agreed.",

            "Unless otherwise expressly agreed, customers remain responsible for applicable taxes, duties, withholding requirements, banking charges, and other governmental charges associated with their purchases.",

            "Renewals may occur according to the applicable subscription arrangement, renewal notice, invoice, purchase order, or other contractual mechanism.",

            "Refunds, cancellations, credits, service adjustments, and payment reversals shall be governed by the applicable commercial terms and mandatory consumer or statutory rights.",

            "SBL may suspend or restrict access where reasonably necessary due to non-payment, security concerns, unlawful activity, material contractual breach, abuse, or legal requirements.",

            "SBL may take emergency protective measures where continued access presents an immediate and material threat to systems, users, data, infrastructure, or legal compliance.",

            "A customer may terminate services according to the applicable agreement, subscription mechanism, notice requirements, or contractual cancellation procedure.",

            "Upon termination, access rights may cease and outstanding payment, confidentiality, intellectual-property, liability, indemnity, dispute, and other surviving obligations may continue.",

            "SBL may provide service availability subject to maintenance, upgrades, infrastructure dependencies, third-party services, network conditions, security events, and circumstances beyond reasonable control.",

            "Scheduled or emergency maintenance may temporarily affect availability, performance, functionality, integrations, or access to particular service components.",

            "SBL may depend upon hosting providers, communication networks, payment processors, APIs, cloud infrastructure, domain services, analytics systems, and other third-party dependencies.",

            "Support services, response times, channels, operating hours, and escalation procedures may vary according to the applicable plan, agreement, or service arrangement.",

            "Software outputs, reports, calculations, recommendations, analytics, automated actions, and AI-generated information should be independently reviewed where material business, legal, financial, employment, or operational decisions are involved.",

            "SBL does not guarantee that automated output will be accurate, complete, current, suitable for every use case, or accepted by any governmental, regulatory, financial, legal, or commercial authority.",

            "Customers remain responsible for maintaining suitable business-continuity procedures, backups, internal controls, recovery arrangements, and independent records appropriate to their operations.",

            "To the maximum extent permitted by applicable law, SBL shall not be responsible for indirect, incidental, special, consequential, exemplary, or loss-of-profit damages arising from use or inability to use the services.",

            "Any contractual limitation of liability shall apply only to the extent legally enforceable and shall not exclude liabilities that mandatory law prohibits from being excluded.",

            "Customers may be required to indemnify SBL for third-party claims arising from unlawful customer content, unauthorised use, material breach, infringement, or conduct attributable to the customer.",

            "Confidential information shall be protected according to applicable contractual obligations, subject to exceptions for legally required disclosure, publicly available information, independent development, or authorised disclosure.",

            "SBL may refer to a customer relationship or project only where appropriate permission, contractual authority, or applicable commercial arrangement permits such reference.",

            "Customers shall cooperate reasonably with compliance, security, audit, incident investigation, verification, and regulatory requests relevant to their use of SBL services.",

            "SBL may update these Terms to reflect legal developments, technological changes, service modifications, security requirements, or changes in business operations.",

            "If any provision is determined to be invalid or unenforceable, the remaining provisions shall continue to operate to the fullest extent permitted by applicable law.",

            "Failure by SBL to enforce a provision on one occasion shall not constitute a continuing waiver of that provision or prevent subsequent enforcement where legally permitted.",

            "Customers may not assign or transfer contractual rights or obligations without complying with applicable contractual restrictions and any required written consent.",

            "These Terms, together with applicable orders, proposals, statements of work, policies, and incorporated documents, may constitute the operative agreement governing the relevant service relationship.",

            "Disputes may be addressed through applicable notice, negotiation, mediation, arbitration, or judicial mechanisms specified by the governing contractual documents and applicable law.",

            "Nothing in these Terms is intended to remove statutory consumer protections, mandatory legal rights, or liabilities that cannot lawfully be excluded or restricted.",

            "Provisions concerning intellectual property, confidentiality, payment obligations, indemnification, liability, dispute resolution, data handling, and other continuing obligations may survive termination.",

            "Electronic acceptance, digital confirmation, account creation, continued access, or continued use may constitute evidence of acceptance where such method is legally recognised and contractually applicable.",

            "The customer remains responsible for ensuring that employees, contractors, representatives, and authorised users comply with applicable SBL terms and lawful-use requirements."

        ],


        /* =========================
           03 — SECURITY
           ========================= */

        security: [
            "SBL maintains procedures designed to detect, assess, contain, investigate, mitigate, document, and recover from security incidents.Where SBL reasonably identifies a suspected or confirmed security incident, SBL may take measures including access restriction, credential reset, system isolation, suspension of affected functionality, forensic investigation, restoration from backup, vulnerability remediation, and other appropriate corrective actions.Where notification is required by applicable law, SBL will provide the required notification to the relevant authority, affected Data Principals, customers, or other parties in the prescribed manner and within the applicable period.",
            "SBL encourages responsible reporting of suspected vulnerabilities affecting its Services.Security researchers and other persons who identify a potential vulnerability should report it through SBL's designated security contact without exploiting, publicly disclosing, modifying, deleting, extracting, or accessing data beyond what is reasonably necessary to demonstrate the existence of the vulnerability. sblforge@gmail.com",
            "SBL may conduct or commission security assessments, vulnerability assessments, penetration testing, code reviews, infrastructure reviews, access-control reviews, logging reviews, and other security evaluations based on the nature and risk profile of its Services.The scope, frequency, methodology, and availability of such assessments may vary between products and may be subject to confidentiality, security, contractual, and operational restrictions.",
            "SBL may implement reasonable personnel-security controls appropriate to the nature of its Services, including role-based access, confidentiality obligations, access restrictions, onboarding and offboarding controls, security awareness, and other organisational safeguards.Access to Customer Data is restricted according to business requirements and applicable authorisation controls.",
            "SBL maintains backup and recovery mechanisms designed to support service continuity and restoration of Customer Data and operational information in the event of accidental deletion, infrastructure failure, system malfunction, security incidents, or other disruptive events.Depending upon the Service and applicable infrastructure configuration, SBL may maintain multiple redundant databases, backup copies, recovery environments, or geographically and logically separated storage mechanisms.SBL may maintain multiple recovery copies, including three or more redundant database or backup environments where configured for the applicable Service, together with access controls and recovery procedures.Backup systems are subject to defined retention cycles, technical limitations, security controls, and restoration procedures.Backup and redundancy mechanisms are designed to reduce the risk of permanent data loss but do not constitute a guarantee that data loss, corruption, interruption, or service failure can never occur.",
            "SBL may maintain business-continuity and disaster-recovery procedures proportionate to the nature and operational requirements of its Services. Such procedures may include system redundancy, backup restoration, infrastructure failover, incident escalation, recovery procedures, and alternative operational arrangements.Recovery objectives may vary according to the Service, infrastructure, incident severity, third-party dependencies, and technical circumstances.",
            "SBL may rely on carefully selected third-party infrastructure, cloud-hosting, payment, communication, analytics, authentication, monitoring, security, and other service providers.Where appropriate, SBL may evaluate third-party providers based on factors including security capabilities, reliability, contractual safeguards, data-processing arrangements, compliance requirements, and operational suitability.Third-party services remain subject to the security practices, availability, and operational controls of the respective provider.",
            "Security vulnerabilities, suspected unauthorised access, security incidents, or other security concerns should be reported through:Security Contact: [sblforge@gmail.com ]Users should not disclose sensitive credentials, passwords, authentication tokens, private keys, or confidential Customer Data when reporting a suspected vulnerability unless specifically requested through an authorised SBL security channel.",
           

            "SBL may maintain administrative, technical, organisational, and operational safeguards appropriate to the nature, purpose, scale, and reasonably assessed risk associated with its services.",

            "Security controls may be designed to reduce risks involving unauthorised access, misuse, alteration, disclosure, destruction, interruption, or loss of information and service functionality.",

            "Access to internal systems may be restricted according to assigned roles, business requirements, operational necessity, and other applicable access-control principles.",

            "Authentication mechanisms may be used to verify authorised access to accounts, applications, administrative systems, and service components.",

            "Users remain responsible for maintaining the confidentiality of passwords, authentication codes, tokens, devices, recovery mechanisms, and other credentials under their control.",

            "Privileged access may be restricted to authorised personnel and may be subject to additional controls, monitoring, approval, or review according to the relevant system.",

            "SBL may implement session-management controls designed to reduce the risk of unauthorised access through unattended, compromised, or improperly terminated sessions.",

            "Security protections may include encryption or comparable safeguards where technically and operationally appropriate, subject to the architecture and requirements of the particular service.",

            "Network security controls may be used to reduce unauthorised access, malicious traffic, service abuse, or other infrastructure-level threats.",

            "Applications may employ secure-development practices including input validation, access control, dependency management, error handling, logging, and security testing as appropriate.",

            "SBL may maintain logs and records concerning authentication, administrative actions, system events, security events, and operational activity where reasonably required for security and accountability.",

            "Security-related logs may be retained for periods determined by operational requirements, legal obligations, investigation needs, storage limitations, and risk considerations.",

            "Where applicable, SBL may comply with relevant Indian cyber-security directions, incident-reporting obligations, and legally binding requirements issued by competent authorities.",

            "SBL may monitor systems and service activity for indicators of compromise, abnormal behaviour, misuse, fraud, security threats, operational failures, or policy violations.",

            "Potential vulnerabilities may be assessed according to severity, exploitability, exposure, affected systems, available mitigations, and practical remediation priorities.",

            "Security patches and updates may be applied according to risk, vendor availability, testing requirements, operational dependencies, and maintenance procedures.",

            "Third-party libraries, packages, APIs, infrastructure, and dependencies may introduce security risks outside SBL's direct control and may require monitoring or replacement.",

            "SBL may conduct or commission security assessments, vulnerability testing, code reviews, infrastructure reviews, or other evaluations where considered appropriate.",

            "Responsible security researchers may report suspected vulnerabilities through an appropriate SBL communication channel with sufficient technical information for investigation.",

            "SBL may maintain an incident-response process covering detection, assessment, containment, investigation, remediation, recovery, documentation, and post-incident review.",

            "Where a security incident materially affects customer information, SBL may provide notices or assistance as required by applicable law or contractual obligations.",

            "Incident communications may be limited to verified information reasonably available at the relevant time and may be updated as investigation findings develop.",

            "SBL may preserve technical records, logs, evidence, communications, and other relevant information when necessary for investigation, regulatory response, litigation, or legal rights.",

            "Business-continuity measures may be maintained according to the importance and operational characteristics of applicable systems and services.",

            "Backups, where maintained, may be subject to access restrictions, retention schedules, integrity controls, recovery procedures, and technical limitations.",

            "Disaster-recovery processes may be designed to restore affected services according to available resources, system dependencies, recovery priorities, and applicable service commitments.",

            "Third-party infrastructure providers may operate portions of the technical environment, and their security practices may form part of the overall service dependency chain.",

            "Physical infrastructure security may be primarily controlled by hosting, cloud, data-centre, telecommunications, or infrastructure providers where SBL does not directly operate the underlying facility.",

            "Personnel may be subject to confidentiality obligations, role-based access controls, internal procedures, and security expectations applicable to their responsibilities.",

            "Security awareness and operational training may be provided or required according to role, risk, business needs, and the nature of information or systems accessed.",

            "Users should remain alert to phishing, credential theft, social engineering, malicious attachments, fraudulent communications, and other attacks targeting account access.",

            "Customers are responsible for configuring permissions, access controls, integrations, devices, endpoints, networks, and user accounts appropriately within their own environment.",

            "Customer devices, local networks, employee systems, third-party applications, and endpoint configurations may introduce risks outside SBL's direct control.",

            "APIs and integration interfaces may require authentication, authorisation, rate limits, secure credentials, input validation, monitoring, and other appropriate controls.",

            "Sensitive information should not be submitted through unsupported channels or services that are not designed or contractually authorised to process such information.",

            "No technical environment can guarantee absolute protection against every attack, vulnerability, outage, insider threat, credential compromise, or previously unknown security weakness.",

            "SBL shall not represent that its security practices constitute a specific certification, accreditation, audit opinion, or statutory compliance status unless such status has actually been obtained.",

            "Security testing may have defined scope, frequency, environment, exclusions, and methodology, and the absence of a discovered vulnerability does not establish absolute security.",

            "Customers may request relevant security information subject to confidentiality, security, commercial, contractual, and operational restrictions.",

            "SBL may reasonably cooperate with customers during security investigations where such cooperation is technically feasible and consistent with confidentiality and legal obligations.",

            "Following a material security event, SBL may conduct root-cause analysis and implement corrective or preventive measures according to the circumstances.",

            "SBL may cooperate with competent authorities where required by law, court order, regulatory process, or other legally enforceable obligation.",

            "Security practices may evolve as technology, threats, legal requirements, infrastructure, service architecture, and organisational processes change.",

            "Security responsibilities are shared between SBL, customers, authorised users, infrastructure providers, integration partners, and other relevant parties according to the service architecture.",

            "Service availability and security are related but distinct objectives, and protective measures may occasionally require access restrictions, maintenance, or temporary service limitations.",

            "Security concerns should be reported through the designated SBL communication channel with sufficient information to identify the affected account, service, system, or suspected event.",

            "Specific security obligations contained in an executed contract, security addendum, statement of work, or other binding document may govern to the extent of a lawful inconsistency.",

            "SBL may review and improve security measures periodically without creating an obligation to maintain any particular technical mechanism indefinitely.",

            "Users and customers remain responsible for taking reasonable precautions within their own environments and for promptly responding to suspected compromise or unauthorised activity.",

            "Nothing in this Security section creates an absolute guarantee against security incidents or excludes liabilities that cannot lawfully be excluded."

        ],


        /* =========================
           04 — COOKIE POLICY
           ========================= */

        cookies: [
            "SBL may use cookies, local storage, session technologies, pixels, SDKs, device identifiers, and similar technologies for purposes including authentication, security, functionality, preferences, analytics, performance measurement, service improvement, and other permitted purposes.",
            "Cookie Consent and Management Where applicable, users may accept, reject, customise, or subsequently modify their preferences for non-essential cookies through SBL's cookie-consent mechanism.Withdrawal of consent will not affect the lawfulness of processing carried out before withdrawal.Certain essential technologies may continue to operate where they are necessary for the operation, security, authentication, or functionality of the Services.",
           

            "Cookies are small files or identifiers that may be stored on a browser, device, or related environment to support functionality, preferences, security, analytics, and service operation.",

            "Session cookies may remain available only during a browsing or application session and may support authentication, navigation, security, or temporary functionality.",

            "Persistent cookies may remain for a defined period and may assist with preferences, analytics, recognition, measurement, or other permitted service functions.",

            "Essential cookies may be required for authentication, account access, security, session management, load distribution, or basic operation of the website or service.",

            "Preference technologies may remember settings such as language, interface choices, session preferences, or other user-selected configurations.",

            "Analytics technologies may collect information concerning usage patterns, page interactions, performance, navigation, or service behaviour for measurement and improvement.",

            "Security-related identifiers may help detect suspicious activity, prevent abuse, protect sessions, identify repeated attacks, or maintain the integrity of services.",

            "Advertising or marketing technologies, where used, may support campaign measurement, attribution, communication preferences, or other permitted marketing functions.",

            "Third-party technologies may be placed or operated by service providers, analytics providers, embedded-content providers, or other external platforms subject to their own policies.",

            "Where legally required, SBL may request consent before placing or accessing non-essential cookies or similar technologies on a user's device.",

            "Users may withdraw or modify available cookie preferences subject to technical limitations and the continued necessity of essential technologies.",

            "Browser settings may permit users to block, restrict, delete, or otherwise manage cookies and similar storage technologies.",

            "Disabling essential technologies may impair authentication, account access, security, navigation, preferences, or other core functionality.",

            "SBL may maintain an internal or external inventory of relevant cookie categories, purposes, providers, retention periods, and related identifiers as reasonably appropriate.",

            "Cookie duration may vary according to the technical purpose, provider configuration, browser behaviour, consent status, security requirements, and operational necessity.",

            "First-party identifiers may be created or controlled directly by SBL or its authorised infrastructure for purposes connected with SBL services.",

            "Third-party analytics services may process technical or usage information according to their own contractual arrangements, privacy practices, and applicable legal requirements.",

            "Embedded videos, maps, payment components, social features, analytics tools, or other third-party resources may create or access identifiers when such resources are loaded.",

            "Local storage, session storage, device identifiers, pixels, tags, scripts, and similar technologies may perform functions comparable to traditional cookies.",

            "Certain technologies may recognise a browser or device without storing a conventional cookie, and such technologies may remain subject to applicable privacy requirements.",

            "Do-not-track or comparable browser signals may not be technically recognised or supported in every environment, service, browser, or third-party system.",

            "Marketing measurement technologies may help determine whether communications or campaigns resulted in visits, interactions, registrations, or other permitted events.",

            "Attribution identifiers may associate interactions with particular campaigns, referral sources, or service channels subject to applicable legal and technical limitations.",

            "Security identifiers may have relatively short expiry periods where frequent rotation or expiration reduces the risk of unauthorised reuse.",

            "SBL may modify cookie names, providers, technical mechanisms, or purposes when necessary to improve functionality, security, analytics, or compliance.",

            "This Cookie Policy may be updated when technologies, services, legal requirements, providers, or business practices change.",

            "Third-party cookie practices remain subject to the relevant provider's controls and policies, and SBL may not be able to independently determine every external processing activity.",

            "Cookie information should be read together with the SBL Privacy Policy because cookie identifiers may in some circumstances be associated with account or device information.",

            "SBL seeks to use information collected through cookies and similar technologies for purposes reasonably connected with disclosed service, operational, security, analytical, or communication requirements.",

            "Retention periods for information obtained through cookies may depend on the technology, purpose, account relationship, security requirements, and applicable legal obligations.",

            "Users may be able to delete stored cookies through browser controls, device settings, application controls, or other technical mechanisms provided by their environment.",

            "Deleting cookies may require users to re-enter preferences, authentication information, or other settings and may affect the continuity of certain services.",

            "Cookie behaviour may differ between devices, browsers, applications, private-browsing modes, and network environments.",

            "A user may receive different cookie behaviour depending upon whether the user is logged in, browsing anonymously, accessing a service through an application, or using a third-party integration.",

            "Cookie and storage security may depend upon browser capabilities, secure configuration, domain restrictions, expiration controls, and other technical attributes.",

            "Authentication-related identifiers may carry security significance, and users should protect devices and sessions from unauthorised access.",

            "SBL may retain records of cookie preferences or consent selections where reasonably necessary to demonstrate or administer the user's choices.",

            "A consent preference may remain valid only for the applicable technology, purpose, jurisdiction, service, or defined period and may require renewal following material changes.",

            "Some technologies may be necessary for service operation and therefore may not be fully disabled without affecting essential functionality.",

            "SBL may use server-side identifiers or logs that operate independently from browser cookies for security, analytics, troubleshooting, and service administration.",

            "Technical identifiers may be associated with network, device, browser, account, or session information depending upon the service architecture.",

            "Payment, authentication, security, and account-management pages may use technical storage mechanisms necessary to complete requested transactions or protect access.",

            "Cookie-related security incidents may be investigated, contained, and addressed according to the nature of the event and applicable legal obligations.",

            "Cookies and similar identifiers do not necessarily provide complete anonymity, and their use should not be interpreted as a guarantee of anonymous browsing.",

            "Users remain responsible for reviewing available browser, device, and privacy settings appropriate to their own preferences and circumstances.",

            "Cookie practices may differ according to geographical location, applicable law, product configuration, and the legal requirements governing the relevant processing.",

            "Enterprise customers may have additional configuration options or contractual controls concerning tracking, analytics, identifiers, and third-party technologies.",

            "Support, monitoring, fraud-prevention, or operational tools may use technical identifiers where necessary to provide or protect requested services.",

            "Where a third party controls an identifier, SBL may have limited ability to modify its behaviour, duration, storage, or processing practices.",

            "Nothing in this Cookie Policy excludes statutory privacy rights, mandatory consent requirements, or legal obligations that cannot lawfully be excluded."

        ],


        /* =========================
           05 — DISCLAIMER
           ========================= */

        disclaimer: [
            "The Services provided by SBL are technology and business-support solutions intended to assist users with business operations, information management, workflow automation, reporting, analytics, communication, record management, and other functionality depending upon the applicable Service.Unless expressly stated otherwise in a written agreement, SBL does not act as the user's legal, financial, investment, tax, accounting, medical, insurance, employment, regulatory, or other professional adviser.",
            "Nothing contained in the SBL Services, websites, dashboards, reports, calculators, documentation, communications, recommendations, analytics, automated outputs, or other materials constitutes or should be construed as legal, financial, investment, securities, tax, accounting, medical, insurance, employment, regulatory, or other professional advice.Users should obtain advice from appropriately qualified professionals before making decisions requiring professional expertise or where the consequences of an incorrect decision may be material.SBL does not assume a professional advisory relationship with a user merely because the Services provide information, calculations, analytics, automation, recommendations, or other decision-support functionality.",
            "Where SBL provides artificial intelligence, machine-learning, automated analysis, recommendation, summarisation, prediction, classification, generation, or other automated functionality, the resulting output may be generated or influenced by automated systems and may contain inaccuracies, omissions, outdated information, unexpected results, or other errors.AI-generated or automated content is provided for informational, operational, or decision-support purposes only unless expressly stated otherwise.Users are solely responsible for reviewing, validating, and independently determining whether any automated output is suitable for their particular circumstances before acting upon it.SBL does not guarantee that automated outputs will be accurate, complete, current, unbiased, suitable, or error-free.",
            "SBL seeks to provide reliable and useful Services but does not warrant that all information, calculations, reports, analytics, recommendations, content, records, integrations, or automated outputs will always be accurate, complete, current, uninterrupted, or error-free.Results may depend upon information supplied by the User, configuration settings, third-party information, external data sources, integrations, algorithms, system availability, and other factors outside SBL's complete control.Users are responsible for reviewing information before relying upon it for business, financial, legal, tax, regulatory, operational, or other consequential purposes.",
            "SBL Services may contain links, integrations, APIs, references, or connections to third-party websites, applications, payment providers, cloud infrastructure, communication services, data providers, or other external services.Third-party services are independently operated and may have their own terms, privacy policies, security practices, availability, pricing, and limitations.SBL does not control and, except where expressly agreed, does not assume responsibility for the availability, accuracy, security, legality, performance, or content of third-party services.",
            "SBL does not guarantee that use of its Services will result in any particular business, financial, operational, productivity, revenue, cost-saving, investment, compliance, tax, accounting, marketing, or other outcome.Results may depend upon the User's decisions, configuration, data quality, implementation, business circumstances, external conditions, third-party services, and numerous other factors outside SBL's control.",
            "SBL aims to maintain reliable and secure Services but does not guarantee uninterrupted availability, continuous access, zero downtime, or error-free operation.Services may be temporarily unavailable or degraded because of maintenance, upgrades, infrastructure failures, cyber incidents, security measures, network interruptions, third-party service failures, force majeure events, or other technical or operational circumstances.Where reasonably practicable, SBL may provide advance notice of scheduled maintenance.",
            "Users are responsible for reviewing, verifying, and validating information, calculations, records, reports, documents, automated outputs, recommendations, and other results produced or processed through the Services before relying upon them.The User remains responsible for maintaining appropriate internal controls, approvals, records, backups, regulatory compliance, accounting review, tax compliance, and other business processes applicable to the User's activities.SBL's provision of automation or software functionality does not transfer the User's underlying legal, regulatory, contractual, financial, tax, accounting, employment, or operational responsibilities to SBL.",
            "Jurisdiction-Specific InformationCertain features, calculations, regulatory information, tax-related functionality, legal information, financial information, compliance tools, and other Services may vary according to jurisdiction, industry, business structure, applicable regulations, or the User's circumstances.Information presented through the Services may not be applicable in every jurisdiction or to every User.Users are responsible for determining the applicability of information to their circumstances and obtaining appropriate professional or regulatory guidance where necessary.",
            "Automated calculations, reports, classifications, recommendations, alerts, forecasts, summaries, generated documents, analytics, or other outputs are intended to assist the User and should not be treated as a substitute for appropriate human review or professional judgment where such review is required.Users must independently verify material outputs before submitting, filing, publishing, approving, paying, investing, contracting, or otherwise acting upon them.SBL shall not be responsible for consequences arising solely from a User's failure to appropriately review or verify an automated output, except to the extent liability cannot lawfully be excluded.",
            "To the maximum extent permitted by applicable law, SBL shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, business opportunities, anticipated savings, goodwill, reputation, data, or business interruption arising out of or relating to the Services.SBL's liability shall, to the extent legally permissible, be limited to the direct loss actually established as having resulted from SBL's actionable breach and shall be subject to the limitations expressly set out in the applicable commercial agreement.Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.",
            "The User remains responsible for the legality, accuracy, completeness, quality, ownership, and lawful authority relating to Customer Data submitted to or processed through the Services.SBL does not independently verify every item of Customer Data and is entitled to rely upon information, instructions, configurations, permissions, and data supplied or authorised by the User.The User is responsible for ensuring that it has all necessary rights, permissions, consents, authorisations, and lawful bases required to provide Customer Data to SBL and to instruct SBL to process such information.SBL will process Customer Data in accordance with its applicable contractual obligations, Privacy Policy, Security Policy, and applicable law.",
            "No Absolute Security GuaranteeSBL implements technical and organisational security measures appropriate to the nature and risk of its Services. These measures may include access controls, authentication mechanisms, encryption or other protective technologies, logging, monitoring, vulnerability management, backup mechanisms, redundancy, and incident-response procedures.However, no internet-connected system, cloud environment, database, software application, communication channel, or electronic storage system can be guaranteed to be completely secure or immune from every possible cyberattack, unauthorised access, data corruption, technical failure, or other security event.Accordingly, SBL does not represent or warrant that the Services will be completely immune from all security threats or that data loss or unauthorised access can never occur.",
            "SBL accepts the responsibilities imposed on it by applicable law and its contractual obligations, but does not assume responsibility for matters that remain under the customer's control.",
            "SBL is responsible for providing the Services in accordance with its applicable contractual obligations and applicable law. The User remains responsible for its business decisions, Customer Data, credentials, configurations, permissions, regulatory obligations, professional determinations, third-party relationships, and use of information or outputs generated through the Services.Nothing in these Terms is intended to exclude or limit any responsibility or liability that cannot lawfully be excluded or limited.",
            "SBL may update, modify, replace, or supplement these policies from time to time to reflect changes in its Services, technology, security practices, legal or regulatory requirements, or business operations.Where required by applicable law, SBL will provide appropriate notice of material changes.The updated version will become effective from the date specified in the revised policy unless otherwise required by applicable law.",
            



            "Information published by SBL is provided for general informational, operational, educational, and software-related purposes and should not automatically be treated as professional advice.",

            "Users should obtain qualified professional advice before relying upon information where the consequences may involve legal, tax, financial, regulatory, employment, accounting, security, or other material matters.",

            "SBL makes reasonable efforts to maintain useful information but does not guarantee that every statement, document, page, example, calculation, or description is complete, current, or error-free.",

            "Technology, software functionality, legal requirements, commercial conditions, third-party services, and business practices may change after information has been published.",

            "Descriptions of products or services may represent intended functionality, planned capability, current functionality, or illustrative concepts and should be confirmed before contractual reliance.",

            "SBL does not guarantee uninterrupted, continuous, error-free, or universally available access to every website, application, software feature, integration, or service component.",

            "Service availability may depend upon hosting providers, networks, domain services, APIs, cloud infrastructure, payment systems, device conditions, or other third-party dependencies.",

            "Software outputs may depend upon configuration, algorithms, input data, integrations, external information, user actions, and system conditions that may affect their accuracy or completeness.",

            "AI-generated or automated outputs may contain errors, omissions, unexpected recommendations, outdated information, or context-specific limitations and should be appropriately reviewed before consequential use.",

            "Human review remains appropriate where software outputs may influence material legal, financial, operational, employment, compliance, security, or safety decisions.",

            "Accounting features do not necessarily constitute professional accounting advice and do not replace review by appropriately qualified accounting professionals.",

            "GST, tax, invoicing, statutory, or compliance-related functionality may assist operational processes but does not transfer legal responsibility for statutory filings or regulatory obligations to SBL.",

            "Customers remain responsible for determining applicable tax treatment, maintaining supporting records, submitting required returns, and meeting deadlines imposed by competent authorities.",

            "Financial information, reports, analytics, forecasts, or calculations generated through SBL should be independently validated before being used for material financial decisions.",

            "Legal information appearing on SBL websites or within software does not constitute a formal legal opinion, legal representation, or attorney-client relationship.",

            "Statements concerning security, privacy, reliability, performance, or compliance describe intended practices or service characteristics and shall not be interpreted as absolute guarantees.",

            "SBL shall not be treated as holding a certification, accreditation, registration, licence, statutory approval, or compliance status unless the relevant status is expressly verified for the applicable scope.",

            "Illustrative performance figures, examples, case scenarios, dashboards, screenshots, or demonstrations may not represent results achievable by every customer or operating environment.",

            "Business outcomes depend upon customer strategy, data quality, implementation, user adoption, configuration, integrations, market conditions, management decisions, and other factors beyond SBL's control.",

            "Customers are responsible for configuring services appropriately, assigning permissions correctly, validating imported information, and establishing internal approval and review procedures.",

            "Customer-provided information may be incomplete, inaccurate, delayed, corrupted, unlawfully obtained, or otherwise unsuitable, and SBL may reasonably rely on information supplied through authorised channels.",

            "External information sources may change, become unavailable, impose restrictions, or contain inaccuracies, and SBL does not automatically guarantee the completeness or continued availability of such sources.",

            "Links to third-party websites, platforms, documents, applications, or resources are provided for convenience and do not necessarily constitute endorsement, sponsorship, or verification by SBL.",

            "Third-party content remains subject to the terms, policies, security practices, availability, and accuracy standards of the relevant third party.",

            "Downloads, files, plugins, integrations, and external resources may introduce risks that cannot be fully controlled by SBL, and users should maintain appropriate security safeguards.",

            "Electronic communications may be delayed, filtered, misdirected, intercepted, unavailable, or otherwise affected by networks, devices, providers, spam controls, or technical conditions.",

            "Customers remain responsible for monitoring their accounts, notices, deadlines, service communications, renewal dates, payment dates, and regulatory obligations applicable to their operations.",

            "SBL may modify notices, interfaces, documentation, product information, or operational processes when necessary to reflect changes in technology, law, security, products, or business operations.",

            "Scheduled maintenance, emergency maintenance, infrastructure changes, vendor outages, network failures, or other technical events may temporarily affect access or functionality.",

            "Events beyond reasonable control may affect performance or availability, and SBL shall not assume responsibility for consequences caused exclusively by such external circumstances except where mandatory law provides otherwise.",

            "To the maximum extent permitted by law, SBL disclaims responsibility for indirect, consequential, incidental, special, exemplary, or loss-of-profit consequences arising from reliance on informational content or software outputs.",

            "Nothing in this Disclaimer excludes or limits liability that applicable mandatory law does not permit to be excluded or limited.",

            "Customer indemnity obligations, where agreed, may apply to claims arising from unlawful customer use, customer content, unauthorised instructions, or breaches attributable to the customer.",

            "Users are responsible for exercising reasonable judgment, obtaining professional advice where appropriate, and validating material information before taking consequential action.",

            "Customers should maintain appropriate backups, export procedures, business-continuity arrangements, and independent records according to the importance of their data and operations.",

            "Data export functionality, where available, may be subject to technical limitations, plan restrictions, supported formats, retention periods, or applicable termination procedures.",

            "Trial, demonstration, complimentary, preview, or free services may be provided with limited support, functionality, availability, warranties, or contractual commitments unless expressly agreed otherwise.",

            "Beta or experimental functionality may contain defects, incomplete features, changed interfaces, performance limitations, or other characteristics that are unsuitable for critical production reliance.",

            "Compatibility with operating systems, browsers, devices, networks, APIs, plugins, or third-party applications may change as external technologies evolve.",

            "Certain products or functions may be limited geographically, commercially, technically, or legally, and availability in one market does not create an entitlement to availability elsewhere.",

            "Customers remain responsible for determining whether the use of SBL software is legally suitable for their industry, jurisdiction, workforce, data categories, and regulated activities.",

            "Use of automated functionality in employment, financial, eligibility, access, or other consequential decisions requires appropriate human oversight and compliance with applicable law.",

            "No product description, demonstration, tutorial, statement, or support communication shall be interpreted as modifying a binding contract unless expressly incorporated into that contract.",

            "Where specific contractual terms conflict with a general website disclaimer, the specifically executed contractual provision shall govern to the extent of the lawful conflict.",

            "If any disclaimer provision is held unenforceable, the remaining provisions shall continue to operate to the fullest lawful extent.",

            "SBL may revise this Disclaimer when services, laws, technologies, risks, business practices, or contractual frameworks change.",

            "Users should review current policies and applicable contractual documents rather than relying solely upon historical screenshots, cached pages, archived statements, or informal communications.",

            "Information made available by SBL is not a substitute for the customer's own due diligence, verification, testing, professional review, or regulatory assessment.",

            "SBL does not guarantee that every published page, document, tutorial, example, or software output will be free from typographical, technical, calculation, or configuration errors.",

            "Use of SBL services remains subject to the customer's acceptance of applicable terms, payment obligations, security responsibilities, configuration duties, and lawful-use requirements.",

            "Any reliance on software, content, calculations, recommendations, automation, or AI output remains at the user's operational discretion, subject to mandatory legal protections.",

            "The absence of a warning, limitation, qualification, or disclaimer concerning a particular risk shall not be interpreted as a guarantee that such risk cannot occur.",

            "Nothing in this Disclaimer is intended to deprive a user of a statutory right, mandatory consumer protection, or legal remedy that cannot lawfully be waived.",

            "By continuing to access applicable SBL services after reviewing the relevant policies, the user acknowledges responsibility for understanding the service limitations, dependencies, and conditions described in those policies."

        ]

    };


    /* =========================================================
       GET PAGE ELEMENTS
       ========================================================= */

    const tabs = document.querySelectorAll(".sbl-legal-tab");
    const documents = document.querySelectorAll(".sbl-legal-document");
    const currentTitle = document.getElementById("sblCurrentTitle");


    const titles = {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security",
        cookies: "Cookie Policy",
        disclaimer: "Disclaimer"
    };


    /* =========================================================
       RENDER LEGAL POINTS
       ========================================================= */

    document.querySelectorAll(".sbl-legal-points").forEach(function (list) {

    const section = list.dataset.section;
    const points = legalData[section] || [];

    list.innerHTML = "";

    points.forEach(function (point, index) {

        const li = document.createElement("li");

        /* =====================================================
           SPECIAL FORMAT FOR TERMS POINT 13
           ===================================================== */

        if (section === "terms" && index === 12) {

            // Main paragraph
            const mainText = document.createElement("div");

            mainText.textContent =
                "To the extent permitted by applicable law, the User agrees to indemnify and hold harmless SBL, its affiliates, officers, employees, contractors, and service providers from claims, losses, liabilities, damages, costs, and reasonable expenses arising from:";

            li.appendChild(mainText);


            // Sub-points container
            const subPoints = document.createElement("div");

            subPoints.style.marginTop = "12px";
            subPoints.style.marginLeft = "20px";


            // (a)
            const a = document.createElement("div");
            a.style.marginBottom = "10px";
            a.innerHTML =
                "<strong>(a)</strong> The User's breach of these Terms.";
            subPoints.appendChild(a);


            // (b)
            const b = document.createElement("div");
            b.style.marginBottom = "10px";
            b.innerHTML =
                "<strong>(b)</strong> Unlawful or unauthorised use of the Services.";
            subPoints.appendChild(b);


            // (c)
            const c = document.createElement("div");
            c.style.marginBottom = "10px";
            c.innerHTML =
                "<strong>(c)</strong> Customer Data or materials supplied by the User that infringe applicable law or third-party rights.";
            subPoints.appendChild(c);


            // (d)
            const d = document.createElement("div");
            d.style.marginBottom = "10px";
            d.innerHTML =
                "<strong>(d)</strong> Misuse of the Services by the User or persons acting under the User's account.";
            subPoints.appendChild(d);


            // (e)
            const e = document.createElement("div");
            e.innerHTML =
                "<strong>(e)</strong> Violation of third-party rights caused by the User's actions or instructions.";
            subPoints.appendChild(e);


            li.appendChild(subPoints);

        } else {

            // Normal legal points
            li.textContent = point;

        }

        list.appendChild(li);

    });

});


    /* =========================================================
       SHOW SELECTED LEGAL FIELD
       ========================================================= */

    function showSection(target) {

        /* Activate selected left button */

        tabs.forEach(function (tab) {

            const active = tab.dataset.target === target;

            tab.classList.toggle("active", active);

            tab.setAttribute(
                "aria-selected",
                active ? "true" : "false"
            );

        });


        /* Show only selected content on right */

        documents.forEach(function (doc) {

            const active = doc.id === target;

            doc.classList.toggle("active", active);

            doc.hidden = !active;

        });


        /* Update mobile selected title */

        if (currentTitle) {

            currentTitle.textContent =
                titles[target] || "SBL Policies";

        }


        /* Update URL */

        if (history.replaceState) {

            history.replaceState(
                null,
                "",
                "#" + target
            );

        }

    }


    /* =========================================================
       LEFT SIDE BUTTON CLICK
       ========================================================= */

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const target = this.dataset.target;

            showSection(target);


            /* Mobile: move user to right-side content */

            if (window.innerWidth <= 780) {

                const content =
                    document.querySelector(".sbl-legal-content");

                if (content) {

                    content.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =========================================================
       OPEN SPECIFIC FIELD USING URL HASH
       
       Example:
       legal.html#privacy
       legal.html#terms
       legal.html#security
       legal.html#cookies
       legal.html#disclaimer
       ========================================================= */

    const hash =
        window.location.hash
            .replace("#", "")
            .toLowerCase();


    if (titles[hash]) {

        showSection(hash);

    } else {

        /* Default field */

        showSection("privacy");

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




