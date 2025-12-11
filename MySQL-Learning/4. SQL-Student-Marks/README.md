# 📘 SQL – Employee Table Modification (ALTER TABLE) Project

This SQL mini-project focuses on **modifying an existing table**, specifically using:

* `ALTER TABLE ADD`
* `ALTER TABLE MODIFY`
* `ALTER TABLE CHANGE`

These operations are super important when updating database structures **after** they’ve been created.

---

## 📂 Folder Structure

```
📁 SQL-Employee-Table-Modification/
├── 📖 README.md
└── 💾 alter_employee.sql
```

---

# 📄 SQL Breakdown

## ✅ 1. Create the EMPLOYEE Table

```sql
CREATE TABLE EMPLOYEE (
    Emp_no INT PRIMARY KEY,
    E_name VARCHAR(50),
    E_address VARCHAR(255),
    E_ph_no VARCHAR(15),
    Dept_no INT,
    Dept_name VARCHAR(50),
    Job_id CHAR(10),
    Salary DECIMAL(10,2)
);
```

This table includes employee details like:

* Name
* Address
* Phone
* Department
* Job ID
* Salary

---

## ✅ 2. Add a New Column: `HIREDATE`

```sql
ALTER TABLE EMPLOYEE 
ADD COLUMN HIREDATE DATE;
```

Adds a **new DATE column** to store when the employee was hired.

---

## ✅ 3. Change Data Type of `Job_id` (CHAR → VARCHAR)

```sql
ALTER TABLE EMPLOYEE 
MODIFY COLUMN Job_id VARCHAR(20);
```

Why this matters:

* `CHAR` = fixed length (not flexible)
* `VARCHAR` = variable length, better for job codes

This update makes the column more scalable.

---

## ✅ 4. Rename Column `Emp_no` → `E_no`

```sql
ALTER TABLE EMPLOYEE 
CHANGE COLUMN Emp_no E_no INT;
```

Renaming columns is common when improving naming conventions or aligning with new standards.
