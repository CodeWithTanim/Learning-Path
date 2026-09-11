# 📘 SQL – Student Marks Project

This SQL mini-project focuses on managing and aggregating student marks using:

* `CREATE TABLE` with multi-row subject records
* `INSERT INTO` multiple subject rows per student
* `SUM()` aggregate function
* `GROUP BY` grouping by student name

These operations are fundamental for academic reporting, score cards, and grade management systems.

---

## 📂 Folder Structure

```
📁 SQL-Student-Marks/
├── 📖 README.md
├── 💾 student_marks.sql
└── 💾 student_marks2.sql
```

---

# 📄 SQL Breakdown

## ✅ 1. Create the `Student_marks` Table

```sql
CREATE TABLE Student_marks (
    St_RollNo INT,
    St_Name VARCHAR(50),
    St_Subject VARCHAR(50),
    St_Marks INT
);
```

This table stores:

* `St_RollNo` → Student Roll Number
* `St_Name` → Student Name
* `St_Subject` → Subject Name (Math, Physics, Chemistry)
* `St_Marks` → Marks obtained

---

## ✅ 2. Insert Student Marks Records

```sql
INSERT INTO Student_marks VALUES (1, 'Mohan', 'Math', 70);
INSERT INTO Student_marks VALUES (1, 'Mohan', 'Physics', 75);
INSERT INTO Student_marks VALUES (1, 'Mohan', 'Chemistry', 65);
INSERT INTO Student_marks VALUES (2, 'Vipul', 'Physics', 70);
INSERT INTO Student_marks VALUES (2, 'Vipul', 'Chemistry', 75);
INSERT INTO Student_marks VALUES (2, 'Vipul', 'Math', 60);
INSERT INTO Student_marks VALUES (3, 'Jitendra', 'Physics', 85);
INSERT INTO Student_marks VALUES (3, 'Jitendra', 'Chemistry', 75);
INSERT INTO Student_marks VALUES (3, 'Jitendra', 'Math', 60);
```

Nine subject records inserted across three students.

---

## ✅ 3. Find Total Marks Obtained by Each Student

```sql
SELECT St_Name, SUM(St_Marks) AS Total_Marks
FROM Student_marks
GROUP BY St_Name;
```

Calculates the aggregate sum of marks obtained across all subjects for each student.
