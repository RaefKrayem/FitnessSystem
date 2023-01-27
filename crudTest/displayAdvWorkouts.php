<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: content-type");

    require 'db_connect.php';

    $info = json_decode(file_get_contents("php://input"), true);
    $daysNum = $info['daysNum'];
    $sql = '';

    if ($daysNum == 3) {
        $sql = "SELECT * FROM `advexercises` WHERE ID > 300 AND ID < 500";
    } 
    else if ($daysNum == 5) {
        $sql = "SELECT * FROM `advexercises` WHERE ID > 500 AND ID < 600";
    } else if ($daysNum == 6) {
        $sql = "SELECT * FROM `advexercises` WHERE ID > 600";
    }

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