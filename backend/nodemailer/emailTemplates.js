export const CONTACT_US_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us Message</title>
  <style>
    body {
      margin: 0; padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #2196F3, #0b7dda);
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content { padding: 20px; }
    .content p { margin: 0 0 15px; }
    .details { margin: 20px 0; }
    .details h3 {
      margin-bottom: 10px;
      color: #0b7dda;
      font-size: 18px;
    }
    .details ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .details li {
      margin-bottom: 8px;
      font-size: 14px;
    }
    .message-box {
      background-color: #fafafa;
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      font-size: 14px;
      color: #555555;
      white-space: pre-wrap;
    }
    .footer {
      text-align: center;
      padding: 15px 20px;
      font-size: 12px;
      color: #999999;
      background-color: #f9f9f9;
    }
    .signature {
      margin-top: 30px;
      font-size: 14px;
    }
    @media (max-width: 600px) {
      .header h1 { font-size: 20px; }
      .content, .footer { padding: 15px; }
      .details h3 { font-size: 16px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Message from Portfolio</h1>
    </div>
    <div class="content">
      <p>Hello Abhay,</p>
      <p>You have received a new message from your portfolio contact form:</p>

      <div class="details">
        <h3>Sender Details</h3>
        <ul>
          <li><strong>Name:</strong> {userName}</li>
          <li><strong>Email:</strong> {userEmail}</li>
        </ul>
      </div>

      <div class="details">
        <h3>Message</h3>
        <div class="message-box">{userMessage}</div>
      </div>

      <p class="signature">
        Please respond to this message as soon as possible.<br><br>
        Best regards,<br>
        Abhay's Portfolio System
      </p>
    </div>
    <div class="footer">
      <p>This message was sent through your personal website’s contact form.</p>
    </div>
  </div>
</body>
</html>
`;
export const CONTACT_US_EMAIL_TEMPLATE_COPY_TO_USER = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Message Received Confirmation</title>
  <style>
    body {
      margin: 0; padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #2196F3, #0b7dda);
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content p {
      margin: 0 0 15px;
      font-size: 14px;
      line-height: 1.6;
    }
    .details {
      margin: 20px 0;
    }
    .details h3 {
      margin-bottom: 10px;
      color: #0b7dda;
      font-size: 18px;
    }
    .details ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .details li {
      margin-bottom: 8px;
      font-size: 14px;
    }
    .message-box {
      background-color: #fafafa;
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      font-size: 14px;
      color: #555555;
      white-space: pre-wrap;
    }
    .signature {
      margin-top: 30px;
      font-size: 14px;
    }
    .footer {
      text-align: center;
      padding: 15px 20px;
      font-size: 12px;
      color: #999999;
      background-color: #f9f9f9;
    }
    @media (max-width: 600px) {
      .header h1 { font-size: 20px; }
      .content, .footer { padding: 15px; }
      .details h3 { font-size: 16px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for Contacting Me!</h1>
    </div>
    <div class="content">
      <p>Hello <strong>{userName}</strong>,</p>

      <p>Thank you for getting in touch! I’ve received your message and will review it as soon as possible.</p>

      <p>I appreciate your interest, and you'll hear back from me shortly.</p>

      <div class="details">
        <h3>Your Details</h3>
        <ul>
          <li><strong>Name:</strong> {userName}</li>
          <li><strong>Email:</strong> {userEmail}</li>
        </ul>
      </div>

      <div class="details">
        <h3>Your Message</h3>
        <div class="message-box">{userMessage}</div>
      </div>

      <p class="signature">
        Best regards,<br>
        Abhay Kumar
      </p>
    </div>
    <div class="footer">
      <p>This is an automated response from Abhay’s portfolio website. I’ll reach out to you soon!</p>
    </div>
  </div>
</body>
</html>
`;
