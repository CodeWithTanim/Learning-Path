# 📘 SQL – Employee Management Database Project

This project demonstrates how to create and manage an **Employee Database** in SQL.
You’ll learn how to:

* Create tables
* Insert data
* Filter records
* Update values
* Delete specific fields

Super useful for anyone learning **SQL, DBMS, or backend basics**!

---

## 📂 Folder Structure

```
📁 SQL-Employee-Database/
├── 📖 README.md
└── 💾 employee.sql
```

---

# 📄 SQL Breakdown

## ✅ 1. Create EMPLOYEE Table

```sql
CREATE TABLE EMPLOYEE (
    Emp_no INT,
    E_name VARCHAR(50),
    E_address VARCHAR(100),
    E_ph_no VARCHAR(15),
    Dept_no VARCHAR(10),
    Dept_name VARCHAR(50),
    Job_id VARCHAR(10),
    Salary DECIMAL(10,2)
);
```

This table stores:

* Employee ID
* Name
* Address
* Phone
* Department details
* Job ID
* Salary

---

## ✅ 2. Insert Employee Records

```sql
INSERT INTO EMPLOYEE (Emp_no, E_name, E_address, E_ph_no, Dept_no, Dept_name, Job_id, Salary) 
VALUES 
(1, 'Mohammed Ayaan', 'Mumbai', '9876543210', 'D10', 'HR', 'J001', 50000),
(2, 'Fatima Rahman', 'Delhi', '8765432109', 'D20', 'SALES', 'J002', 55000),
(3, 'James', 'Kolkata', '7654321098', 'D10', 'HR', 'J003', 48000),
(4, 'Amit Sharma', 'Bangalore', 'MECH', 'MECHANICAL', 'J004', 60000),
(5, 'Priya Verma', 'Chennai', '5432109876', 'D30', 'IT', 'J005', 65000);
```

Five employees added — clean and structured.

---

## ✅ 3. Display the Entire Table

```sql
SELECT * FROM EMPLOYEE;
```

Shows all employee data.

---

## ✅ 4. Employees Working in Department D10

```sql
SELECT * FROM EMPLOYEE WHERE Dept_no = 'D10';
```

Filters employees by department number.

---

## ✅ 5. Update Address of Employee No. 3

```sql
UPDATE EMPLOYEE 
SET E_address = 'Nagpur' 
WHERE Emp_no = 3;
```

Updates **James**’ city to **Nagpur**.

---

## ✅ 6. Employees Working in MECH Department

```sql
SELECT * FROM EMPLOYEE WHERE Dept_name = 'MECH';
```

---

## ✅ 7. Delete the Phone Number of Employee “James”

```sql
UPDATE EMPLOYEE 
SET E_ph_no = NULL 
WHERE E_name = 'James';
```

NULL removes the stored phone number.

---

## ✅ 8. Employees Working in SALES Department

```sql
SELECT * FROM EMPLOYEE WHERE Dept_name = 'SALES';
```
