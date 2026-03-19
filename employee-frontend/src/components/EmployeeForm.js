import React, { useState, useEffect } from "react";

function EmployeeForm({ onAdd, editEmployee, onCancelEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Cuando editEmployee cambia, llena el formulario
  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setEmail(editEmployee.email);
      setRole(editEmployee.role);
    } else {
      setName("");
      setEmail("");
      setRole("");
    }
  }, [editEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !role) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (editEmployee) {
      // Actualizar empleado existente
      await fetch("http://localhost/employee-api/updateEmployee.php", {
        method: "PUT",
        body: JSON.stringify({ id: editEmployee.id, name, email, role })
      });
      onCancelEdit(); // limpiar el estado de edición
    } else {
      // Crear nuevo empleado
      await fetch("http://localhost/employee-api/createEmployee.php", {
        method: "POST",
        body: JSON.stringify({ name, email, role })
      });
    }

    onAdd(); // refrescar lista
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
      <button type="submit">{editEmployee ? "Update" : "Add"}</button>
      {editEmployee && (
        <button type="button" onClick={onCancelEdit} style={{ marginLeft: "5px" }}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;