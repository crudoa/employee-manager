# 🧑‍💼 Employee Manager

Fullstack Employee Manager with **React** frontend and **PHP + MySQL** backend.  
Enables **create, read, update, and delete (CRUD) operations** for employees in a clean and functional interface.

---

## 📌 Technologies

**Frontend:**
- React
- JavaScript
- HTML / CSS
- Fetch API for backend communication

**Backend:**
- PHP
- MySQL
- REST API

**Tools:**
- Git / GitHub
- Node.js / npm

---

## 🚀 Features

- ✅ List employees
- ✅ Add employee
- ✅ Edit employee
- ✅ Delete employee
- 🔄 Frontend ↔ backend communication via REST API

---

## 📁 Project Structure


employee-manager/
│
├─ employee-frontend/ # React Frontend
│ ├─ public/
│ └─ src/
│ ├─ components/
│ │ ├─ EmployeeForm.js
│ │ └─ EmployeeList.js
│ └─ App.js
│
├─ employee-api/ # PHP Backend
│ ├─ createEmployee.php
│ ├─ deleteEmployee.php
│ ├─ getEmployees.php
│ ├─ updateEmployee.php
│ └─ db.php # MySQL connection
│
└─ README.md


---

## ⚙️ Installation & Setup

### Backend (PHP + MySQL)

1. Set up a local server (XAMPP, WAMP, MAMP, etc.)  
2. Create a database `employee_manager` in MySQL  
3. Create the `employees` table:

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL
);

Edit db.php with your MySQL credentials.

Place the employee-api folder in your server’s root (htdocs or similar).

Frontend (React)

Navigate to the frontend folder:

cd employee-frontend

Install dependencies:

npm install

Start the React app:

npm start

The app will open at http://localhost:3000
 and communicate with your PHP backend.

📌 Usage

Add employee: fill in the form and click “Add”

Edit employee: click “Edit”, modify the fields, and save

Delete employee: click “Delete”

The employee list updates automatically

📝 Notes

Ideal project to learn basic Fullstack development

Demonstrates how React interacts with PHP using Fetch API and JSON

Perfect for portfolio or CRUD practice

📫 Contact

Gustavo — Backend & Fullstack Developer
GitHub: [Your GitHub Link Here]
