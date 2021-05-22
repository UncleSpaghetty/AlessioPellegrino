<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_form = 'alexiope98@gmail.com';

    $email_subject = "Nuovo messaggio dal Sito";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "alexiope98@gmail.com";

    $headers = "From: $email_form \r\n";

    $headers = "Replay_To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header ("Location: index.html");

?>