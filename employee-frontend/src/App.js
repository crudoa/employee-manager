import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  const fetchEmployees = () => {
    fetch("http://localhost/employee-api/getEmployees.php")
      .then(res => res.json())
      .then(data => setEmployees(data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const cancelEdit = () => setEditEmployee(null);

  return (
    <div>
      <h1>Employee Manager</h1>
      <EmployeeForm
        onAdd={fetchEmployees}
        editEmployee={editEmployee}
        onCancelEdit={cancelEdit}
      />
      <EmployeeList
        employees={employees}
        onRefresh={fetchEmployees}
        onEdit={setEditEmployee} // Pasamos función para setear el empleado a editar
      />
    </div>
  );
}

export default App;