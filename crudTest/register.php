<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    $info = json_decode(file_get_contents("php://input"), true);
    $name = $info['name'];
    $age = $info['age'];
    $phone = $info['phone'];
    $height = $info['height'];
    $weight = $info['weight'];
    $gender = $info['gender'];
    $username = $info['username'];
    $password = $info['password'];

    $query = "SELECT * FROM user WHERE Username='$username'";
    $result = mysqli_query($link, $query);
    if ($result->num_rows > 0) {
        echo json_encode([
            'success' => 0,
            'message' => 'Username already exists',
        ]);
        exit();
    }else {

    $sql = "INSERT INTO `user`(`ID`, `Name`, `Age`, `Phone`, `Height`, `Weight`, `Gender`, `Username`, `Password`) VALUES (NULL ,'$name', $age, $phone, $height, $weight, '$gender', '$username', '$password')";
    $res = mysqli_query($link, $sql);

    if($res)
        echo json_encode([
            'success' => 1,
            'message' => 'Record Inserted!',
        ]);
    else 
        echo json_encode([
            'success' => 0,
            'message' => 'No Record Inserted!',
        ]);
    }
?>