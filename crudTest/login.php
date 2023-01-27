<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    $info = json_decode(file_get_contents("php://input"), true);
    $username = $info['username'];
    $password = $info['password'];

    // Check if the username and password are correct
    $query = "SELECT * FROM user WHERE `Username` = '$username' AND `Password` = '$password'";
    $result = mysqli_query($link, $query);

    if (mysqli_num_rows($result) > 0) {
    // Login successful
    $user = mysqli_fetch_assoc($result);    
    echo json_encode([
        'success' => 1,
        'message' => 'Login successful',
        'user' => $user,
    ]);
    } else {
    // Login failed 
    echo json_encode([
        'success' => 0,
        'message' => 'Invalid login credentials',
    ]);
    }
?>