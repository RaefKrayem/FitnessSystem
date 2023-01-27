<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    $Info = json_decode(file_get_contents("php://input"), true);
    $userId = $Info['UserId'];
    $exId = $Info['ExId'];
    $weight = $Info['Weight'];
    $reps = $Info['Reps'];
    $split = $Info['Splits'];

        $query = "INSERT INTO `advcomplete`(`UserID`, `ExID`, `Weight`, `Repetitions`, `Splits`) VALUES ($userId, $exId, $weight, $reps, '$split')";
        $result = mysqli_query($link, $query);
        if ($result) {
            echo $result;
        } else {
            echo 'Error completing exercise';
        }
    // }
?>