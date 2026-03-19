function EmployeeList({ employees, onRefresh, onEdit }) {

  const deleteEmployee = async (id) => {
    await fetch(`http://localhost/employee-api/deleteEmployee.php?id=${id}`);
    onRefresh();
  };

  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id}>
          {emp.name} - {emp.email} - {emp.role}
          <button onClick={() => onEdit(emp)} style={{ marginLeft: "5px" }}>Edit</button>
          <button onClick={() => deleteEmployee(emp.id)} style={{ marginLeft: "5px" }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;