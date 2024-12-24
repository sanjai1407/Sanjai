<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "sanjai.g1407@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "You have received a new message:\n\nName: $name\nEmail: $email\nMessage:\n$message\n";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send the message.";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed.";
}
?>
