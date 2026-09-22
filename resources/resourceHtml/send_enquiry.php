<?php

header("Content-Type: application/json");


/* =====================================================
   ONLY ALLOW POST REQUESTS
===================================================== */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}


/* =====================================================
   GET FORM DATA
===================================================== */

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$company = trim($_POST["company"] ?? "");
$requirement = trim($_POST["requirement"] ?? "");
$message = trim($_POST["message"] ?? "");


/* =====================================================
   BASIC SERVER-SIDE VALIDATION
===================================================== */

if (
    empty($name) ||
    empty($email) ||
    empty($phone) ||
    empty($requirement) ||
    empty($message)
) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Please complete all required fields."
    ]);

    exit;
}


/* =====================================================
   EMAIL VALIDATION
===================================================== */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);

    exit;
}


/* =====================================================
   CLEAN DATA
===================================================== */

$name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$email = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$phone = htmlspecialchars($phone, ENT_QUOTES, "UTF-8");
$company = htmlspecialchars($company, ENT_QUOTES, "UTF-8");
$requirement = htmlspecialchars($requirement, ENT_QUOTES, "UTF-8");
$message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");


/* =====================================================
   EMAIL SETTINGS
===================================================== */

$to = "sblforge@gmail.com";

$subject = "New SBL Website Enquiry - " . $name;


/* =====================================================
   EMAIL BODY
===================================================== */

$emailBody = "

====================================================
                NEW SBL ENQUIRY
====================================================

Customer Details
----------------------------------------------------

Name:
$name

Email:
$email

Phone:
$phone

Company:
$company

Requirement:
$requirement


Message
----------------------------------------------------

$message


====================================================
Submitted through:
SBL Website Contact Form

====================================================
";


/* =====================================================
   EMAIL HEADERS
===================================================== */

$headers = [];

$headers[] = "From: SBL Website <sblforge@gmail.com>";
$headers[] = "Reply-To: " . $email;
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";


/* =====================================================
   SEND EMAIL
===================================================== */

$sent = mail(
    $to,
    $subject,
    $emailBody,
    implode("\r\n", $headers)
);


/* =====================================================
   RESPONSE
===================================================== */

if ($sent) {

    echo json_encode([
        "success" => true,
        "message" => "Your enquiry has been sent successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to send your enquiry. Please try again."
    ]);

}

?>