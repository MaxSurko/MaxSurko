<?php

$frm_name  = "Max Surko"
$recepient = "maksonanime21@gmail.com";
$sitename  = "Fullstack developer's portfolio";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "E-mail: $email \nИмя: $name \nСообщение: $message";
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
