<?php

    $nome = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $from = 'From: My Contact Form';
    $to = 'pellegrino-alessio@virgilio.it';
    $subject = 'Nuovo messaggio dal sito personale';

    $body = "Da: $name\n E-Mail: $email\n Messaggio:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
        echo '<p>Messaggio inviato con successo</p>';
        } else {
        echo '<p>Si è verificato un errore. Prova di nuovo</p>';
        }
    }
 ?>
    
    