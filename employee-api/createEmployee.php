<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$role = $data['role'];

$sql = "INSERT INTO employees (name, email, role)
VALUES ('$name', '$email', '$role')";

if ($conn->query($sql)) {
  echo json_encode(["message" => "Employee created"]);
} else {
  echo json_encode(["error" => $conn->error]);
}
?>