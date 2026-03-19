<?php
include 'db.php';

$id = $_GET['id'];

$conn->query("DELETE FROM employees WHERE id=$id");

echo json_encode(["message" => "Deleted"]);
?>