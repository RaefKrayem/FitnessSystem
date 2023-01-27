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

    // Check if the exercise is already completed
    $query = "SELECT * FROM complete WHERE UserID=$userId && ExID=$exId && Weight=$weight && Repetitions=$reps";
    $result = mysqli_query($link, $query);

    if (mysqli_num_rows($result) > 0) {
        // Uncomplete the exercise
        $query = "DELETE FROM complete WHERE UserID=$userId && ExID=$exId && Weight=$weight && Repetitions=$reps";
        $result = mysqli_query($link, $query);
        if ($result) {
            echo 'Exercise uncompleted';
        } else {
            echo 'Error uncompleting exercise';
        }
    }

?>