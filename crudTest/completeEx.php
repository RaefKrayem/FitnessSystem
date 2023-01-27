<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    // Read the user ID from SESSION and exercise ID from the request
    $IDs = json_decode(file_get_contents("php://input"), true);
    $userId = $IDs['UserId'];
    $exId = $IDs['ExId'];
    $weight = $IDs['Weight'];
    $reps = $IDs['Reps'];

        $query = "INSERT INTO `complete`(`UserID`, `ExID`, `Weight`, `Repetitions`) VALUES ($userId, $exId, $weight, $reps)";
        $result = mysqli_query($link, $query);
        if ($result) {
            echo $result;
        } else {
            echo 'Error completing exercise';
        }
    // }
?>