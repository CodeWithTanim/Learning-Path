# 📘 SQL – Student Marks Analysis (Aggregate + HAVING + Conditions)

This project goes deeper into analyzing student marks using:

* `SUM()`
* `MAX()`
* `GROUP BY`
* `HAVING`
* `BETWEEN`

Perfect for learning **SQL aggregation**, **filtering totals**, and **subject-wise analysis**.

---

## 📂 Folder Structure

```
📁 SQL-Student-Marks-Analysis/
├── 📖 README.md
└── 💾 student_marks_analysis.sql
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

---

## ✅ 2. Insert All Records

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

---

## ✅ 3. Total Marks of Each Student

```sql
SELECT St_Name, SUM(St_Marks) AS Total_Marks
FROM Student_marks
GROUP BY St_Name;
```

Calculates the sum of marks for all subjects per student.

---

## ✅ 4. Total Marks of Mohan Only

```sql
SELECT SUM(St_Marks) AS Mohan_Total_Marks
FROM Student_marks
WHERE St_Name = 'Mohan';
```

Shows Mohan’s total marks.

---

## ✅ 5. Maximum Marks in Each Subject

```sql
SELECT St_Subject, MAX(St_Marks) AS Max_Marks
FROM Student_marks
GROUP BY St_Subject;
```

Finds the highest marks achieved in **Math, Physics, Chemistry**.

---

## ✅ 6. Students With Total Marks > 205

```sql
SELECT St_Name, SUM(St_Marks) AS Total_Marks
FROM Student_marks
GROUP BY St_Name
HAVING SUM(St_Marks) > 205;
```

Uses `HAVING` to filter groups based on total marks.

---

## ✅ 7. Students With Total Marks > 205 AND Roll No. Between 1 & 2

```sql
SELECT St_Name, St_RollNo, SUM(St_Marks) AS Total_Marks
FROM Student_marks
WHERE St_RollNo BETWEEN 1 AND 2
GROUP BY St_Name, St_RollNo
HAVING SUM(St_Marks) > 205;
```

Combines:

* `BETWEEN` (range filtering)
* `GROUP BY`
* `HAVING` (group filtering)

