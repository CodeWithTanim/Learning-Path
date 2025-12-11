# 📘 SQL – Student Database Project

Welcome to your **Student Database Management** mini-project!
This project demonstrates how to:

* Create a database
* Create a table
* Insert multiple rows
* Retrieve data

Perfect for beginners learning **MySQL**, databases, and CRUD operations.

---

## 📂 Folder Structure

```
📁 SQL-Student-Database/
├── 📖 README.md
└── 💾 student_database.sql
```

---

## 📄 SQL Explained

### ✅ 1. Create the Database

```sql
CREATE DATABASE tanim_db;
SHOW DATABASES;
USE tanim_db;
```

You're setting up a fresh database named **tanim_db** and switching into it.

---

### ✅ 2. Create the Students Table

```sql
CREATE TABLE Students (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Branch VARCHAR(50),
    Faculty VARCHAR(50),
    Age INT
);
```

This creates a table with:

* `Roll_No` → Unique ID
* `Name` → Student name
* `Branch` → Department
* `Faculty` → Faculty name
* `Age` → Age of student

---

### ✅ 3. Insert Sample Data

```sql
INSERT INTO Students (Roll_No, Name, Branch, Faculty, Age) VALUES
(1, 'Aryan Gupta', 'CSE', 'Engineering'),
(2, 'Zayan Amed', 'ECE', 'Electronics & Communication'),
(3, 'Bilal Khan', 'ME', 'Mechanical Engineering'),
(4, 'Rayyan Shaikh', 'CSE', 'Engineering'),
(5, 'Hamza Farooqi', 'EE', 'Electrical Engineering'),
(6, 'Zubair Qureshi', 'IT', 'Information Technology'),
(7, 'Saad Miraz', 'Civil', 'Civil Engineering'),
(8, 'Tariq Hussain', 'CSE', 'Engineering'),
(9, 'Ayesha Fatima', 'BIOTECH', 'Niotechnology'),
(10, 'Yusuf Rahmani', 'CSE', 'Engineering');
```

A full batch insert of 10 students — clean and efficient.

---

### ✅ 4. Retrieve Data

```sql
SELECT * FROM Students;
```

Displays all records from your **Students** table.
