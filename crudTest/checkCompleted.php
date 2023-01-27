<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';
    
    $exerciseId = $_GET['exerciseId'];
    $userId = $_GET['userId'];
    
    $query = "SELECT * FROM complete WHERE UserID = '$userId' AND ExID = '$exerciseId'";
    $result = mysqli_query($link, $query);
    
    if (mysqli_num_rows($result) > 0) {
      // Exercise has been completed by the user
      echo json_encode(['completed' => true]);
    } else {
      // Exercise has not been completed by the user
      echo json_encode(['completed' => false]);
    }
    
    
?>