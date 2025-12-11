
CREATE DATABASE tanim_db;

SHOW DATABASES;

USE tanim_db;

CREATE TABLE Students (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Branch VARCHAR(50),
    Faculty VARCHAR(50),
    Age INT
);

SELECT * FROM Students;

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

SELECT * FROM Students;
