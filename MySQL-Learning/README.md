# 🚀 MySQL Learning – Complete SQL Practice Repository

Welcome to the **MySQL-Learning** module of my learning journey! This directory contains a comprehensive collection of beginner-to-intermediate SQL exercises, database schemas, table manipulation tasks, and analytical query scripts.

## 📚 Modules & Topics Overview

### 🔹 `1. SQL-Student-Database`
Focuses on the foundational fundamentals of relational databases and SQL table operations. Covers creating and managing databases (`CREATE DATABASE`, `SHOW DATABASES`, `USE`), table definition with data types and primary key constraints (`Roll_No INT PRIMARY KEY`, `Name VARCHAR(50)`, `Branch`, `Faculty`, `Age`), batch record insertion (`INSERT INTO`), and data retrieval using `SELECT * FROM Students`. Includes both structured schema files (`student_database.sql`) and consolidated query practice scripts (`student_database2.sql`).

### 🔹 `2. SQL-Employee-Database`
Demonstrates an Employee Management System schema (`EMPLOYEE`). Covers storing employee records with varied data types (`INT`, `VARCHAR`, `DECIMAL`), department numbers and names (`Dept_no`, `Dept_name`), job identifiers (`Job_id`), filtering records with conditional queries (`WHERE Dept_no = 'D10'`, `WHERE Dept_name = 'SALES'`), updating field values (`UPDATE ... SET ... WHERE`), and resetting values using `NULL` (e.g., removing employee contact numbers).

### 🔹 `3. SQL-Employee-Table-Modification`
Covers Data Definition Language (DDL) table schema modifications using `ALTER TABLE`. Demonstrates adding new columns with specific data types (`ALTER TABLE ... ADD COLUMN HIREDATE DATE`), modifying existing column data types (`ALTER TABLE ... MODIFY COLUMN Job_id VARCHAR(20)`), and renaming columns (`ALTER TABLE ... CHANGE COLUMN Emp_no E_no INT`) to improve database schema design, flexibility, and naming conventions.

### 🔹 `4. SQL-Student-Marks`
Focuses on managing student academic scores and subject-level performance in SQL (`Student_marks`). Covers designing tables for multi-row subject entries per student (`St_RollNo`, `St_Name`, `St_Subject`, `St_Marks`), inserting multi-subject data (Math, Physics, Chemistry), and performing aggregate calculations using `SUM(St_Marks)` combined with `GROUP BY St_Name` to calculate total marks obtained by each student.

### 🔹 `5. SQL-Student-Marks-Analysis`
Advanced SQL querying and analytical aggregation on student performance datasets. Explores aggregate calculations (`SUM()`, `MAX()`), targeted student filtering (`WHERE St_Name = 'Mohan'`), subject-level maximum score analysis (`GROUP BY St_Subject`), group-level condition filtering using the `HAVING` clause (`HAVING SUM(St_Marks) > 205`), and combined range filtering using `BETWEEN` and `GROUP BY ... HAVING`.

---

## 📂 Repository Structure

```
📦 MySQL-Learning/
├── 📁 1. SQL-Student-Database/
│   ├── 💾 student_database.sql
│   └── 💾 student_database2.sql
├── 📁 2. SQL-Employee-Database/
│   ├── 💾 employee.sql
│   └── 💾 employee2.sql
├── 📁 3. SQL-Employee-Table-Modification/
│   ├── 💾 alter_employee.sql
│   └── 💾 alter_employee2.sql
├── 📁 4. SQL-Student-Marks/
│   ├── 💾 student_marks.sql
│   └── 💾 student_marks2.sql
└── 📁 5. SQL-Student-Marks-Analysis/
    ├── 💾 student_marks_analysis.sql
    └── 💾 student_marks_analysis2.sql
```

---

## 🛠️ Technologies & SQL Concepts Learned
- **SQL DDL (Data Definition Language)**: `CREATE DATABASE`, `SHOW DATABASES`, `USE`, `CREATE TABLE`, `ALTER TABLE` (`ADD COLUMN`, `MODIFY COLUMN`, `CHANGE COLUMN`), Primary Key constraints, and schema evolution.
- **SQL DML (Data Manipulation Language)**: Single and batch `INSERT INTO`, updating records (`UPDATE ... SET ... WHERE`), and setting attributes to `NULL`.
- **SQL DQL (Data Query Language)**: `SELECT`, column projection, table aliasing (`AS`), row filtering (`WHERE`), and range filtering (`BETWEEN ... AND`).
- **Data Types**: Numeric (`INT`), Character & String (`CHAR`, `VARCHAR`), Fixed-Point Decimal (`DECIMAL(10,2)`), and Date (`DATE`).
- **Aggregate Functions**: `SUM()` for calculating total marks/metrics, `MAX()` for identifying highest subject scores across groups.
- **Grouping & Filtering**: Categorical data aggregation with `GROUP BY`, and post-aggregation condition filtering using `HAVING`.

---

## 🚀 How to Practice / Run the Database Scripts

### 1. Open MySQL Terminal / CLI
```sh
mysql -u root -p
```

### 2. Select any folder and run the script
```sh
SOURCE student_database.sql;
```

### 3. Explore, tweak, and learn!
Experiment with queries, modify database records, and run analytical queries.

---

*Keep learning, keep coding!* 💻🔥
