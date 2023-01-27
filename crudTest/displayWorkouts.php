<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    $info = json_decode(file_get_contents("php://input"), true);
    $target = $info['muscleGroup'];
    $level = $info['level'];

    $sql = "SELECT * FROM `exercises` WHERE Target='$target' AND Level='$level'";
    $res = mysqli_query($link, $sql);
    if(mysqli_num_rows($res)>0){        
        $workouts = array();
        while($row = mysqli_fetch_assoc($res)) {
        $workouts[] = $row;
}

        echo json_encode([
            'success' => 1,
            'records' => $workouts,
        ]);
        } else {
        echo json_encode([
            'success' => 0,
            'message' => 'No record found',
        ]);
        }

?>
