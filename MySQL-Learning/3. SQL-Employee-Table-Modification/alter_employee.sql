-- Create the EMPLOYEE table

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

-- 1. Add a new column HIREDATE

ALTER TABLE EMPLOYEE 
ADD COLUMN HIREDATE DATE;

-- 2. Change the datatype of JOB_ID from CHAR to VARCHAR

ALTER TABLE EMPLOYEE 
MODIFY COLUMN Job_id VARCHAR(20);

-- 3. Rename column Emp_no to E_no

ALTER TABLE EMPLOYEE 
CHANGE COLUMN Emp_no E_no INT;