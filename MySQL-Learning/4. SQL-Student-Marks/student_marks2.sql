-- Q1. Create the above table with the given attributes and insert all records.
CREATE TABLE Students_marks (St_RollNo INT, St_Name VARCHAR(50), St_Subject VARCHAR(50), St_Marks INT);

INSERT INTO Students_marks VALUES (1, 'Mohan', 'Math', 70);
INSERT INTO Students_marks VALUES (1, 'Mohan', 'Physics', 75);
INSERT INTO Students_marks VALUES (1, 'Mohan', 'Chemistry', 65);
INSERT INTO Students_marks VALUES (2, 'Vipul', 'Physics', 70);
INSERT INTO Students_marks VALUES (2, 'Vipul', 'Chemistry', 75);
INSERT INTO Students_marks VALUES (2, 'Vipul', 'Math', 60);
INSERT INTO Students_marks VALUES (3, 'Jitendra', 'Physics', 85);
INSERT INTO Students_marks VALUES (3, 'Jitendra', 'Chemistry', 75);
INSERT INTO Students_marks VALUES (3, 'Jitendra', 'Math', 60);

-- Q2. Write a query to find the total number of marks obtained by each student.
SELECT St_Name, SUM(St_Marks) AS Total_Marks FROM Students_marks GROUP BY St_Name;

-- Q2. Write a query to find the total number of marks obtained by each student.
SELECT SUM(St_Marks) AS Mohan_Total_Marks FROM Students_marks WHERE St_Name = 'Mohan';

