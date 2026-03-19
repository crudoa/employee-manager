<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$role = $data['role'];

$sql = "UPDATE employees 
SET name='$name', email='$email', role='$role'
WHERE id=$id";

$conn->query($sql);

echo json_encode(["message" => "Updated"]);
?>