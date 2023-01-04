<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post resultaat</title>
</head>
<body>
  <h1>Je post data</h1>
  <p>Normaal sla je die op in een databank of verstuur je ze in een e-mail, maar als demo ben ik gewoon een echo.</p>
  <pre>
  <?php

    $name = $_POST['ContactName'];
    $email = $_POST['E-mail'];
    $message = $_POST['bericht'];
    $send_copy = isset($_POST['contactCheckbox']) ? 1 : 0;

    echo "Name: $name\n";
    echo "Email: $email\n";
    echo "Message: $message\n";
    echo "Send copy: $send_copy\n";

  ?>
  </pre>
</body>
</html>
