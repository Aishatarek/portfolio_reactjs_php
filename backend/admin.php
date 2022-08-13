<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost";
$user = "root";
$password = "";
$dbname = "portfolio";
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($method == 'POST') {
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql = "SELECT * FROM admin  WHERE email='$email' AND password='$password'";
    $result = mysqli_query($con, $sql);
    if ($result->num_rows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $output = $row;
        }
        echo json_encode($output);
    } else {
        http_response_code(404);
        die(mysqli_error($con));
    }
}

// echo "done";

if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}


$con->close();
