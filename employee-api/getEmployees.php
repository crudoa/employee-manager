<?php
include 'db.php';

$result = $conn->query("SELECT * FROM employees");

$employees = [];

while ($row = $result->fetch_assoc()) {
  $employees[] = $row;
}

echo json_encode($employees);
?>