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

switch ($method) {
    case 'GET':
        if (isset($_GET["id"])) {
            $id = $_GET['id'];
        }
        $sql = "select * from projects" . ($id ? " where id=$id" : '');
        break;
    case 'POST':
        if (isset($_GET["id"])) {
            $id = $_GET["id"];
            $title = $_POST['title'];
            $description = $_POST["description"];
            $link = $_POST["link"];
            if (isset($_FILES["photo"]["name"])) {
                $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                $filename = rand(0, 1000) . $_FILES["photo"]["name"];
                $filetype = $_FILES["photo"]["type"];
                $filesize = $_FILES["photo"]["size"];
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
                $maxsize = 5 * 1024 * 1024;
                if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                if (in_array($filetype, $allowed)) {
                    $result = move_uploaded_file($_FILES["photo"]["tmp_name"], "photos/" . $filename);
                } else {
                    echo "Error: There was a problem uploading your file. Please try again.";
                }
                $photo = $filename;
                $sql = "UPDATE projects SET title='$title', description='$description' , photo='$photo' , link='$link' WHERE id = $id";
            } else {
                $sql = "UPDATE projects SET title='$title', description='$description' , link='$link' WHERE id = $id";
            }
        } else if (isset($_GET["delete"])) {
            $delete = $_GET['delete'];
            $sql = "DELETE FROM projects WHERE id = $delete";
        } else {
            $title = $_POST["title"];
            $description = $_POST["description"];
            $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
            $filename = rand(0, 1000) . $_FILES["photo"]["name"];
            $filetype = $_FILES["photo"]["type"];
            $filesize = $_FILES["photo"]["size"];
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
            $maxsize = 5 * 1024 * 1024;
            if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
            if (in_array($filetype, $allowed)) {
                $result = move_uploaded_file($_FILES["photo"]["tmp_name"], "photos/" . $filename);
            } else {
                echo "Error: There was a problem uploading your file. Please try again.";
            }
            $photo = $filename;

            $link = $_POST["link"];
            $sql = "insert into projects (title, description, photo, link) values ('$title', '$description', '$photo' , '$link')";
        }
        break;
}

// run SQL statement
$result = mysqli_query($con, $sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) {
        $employeeArr = array();
        while ($row = $result->fetch_assoc()) {
            array_push($employeeArr, $row);
        }
        echo json_encode($employeeArr);
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            $output = $row;
        }
        echo json_encode($output);
    }
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {

    echo mysqli_affected_rows($con);
}

$con->close();
