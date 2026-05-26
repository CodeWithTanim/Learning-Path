# Chapter 06: Conditional Statements

## Making Decisions in Code
Real-world programs do not execute the exact same lines of code every time they run. Instead, they make decisions based on inputs or conditions. 

Conditional statements allow your program to choose different execution paths based on whether a condition evaluates to `True` or `False`. Because they control the direction of code execution, they are also referred to as **Control Flow Statements**.

### Syntax:
```python
if condition:
    # Runs when condition is True
elif another_condition:
    # Runs if the previous conditions were False, and this condition is True
else:
    # Runs when none of the conditions above were True
```

---

## Indentation in Python
Unlike many programming languages (like C++, Java, or JavaScript) that use curly braces `{}` to define code blocks, Python uses **indentation** (whitespace spaces).

- A colon `:` is placed after the conditional statement.
- The next line must be indented (usually by **4 spaces** or **1 tab**).
- All statements within the same indentation level belong to the same block.

> [!WARNING]
> Inconsistent indentation will result in an `IndentationError`. Always make sure your code blocks are aligned properly.

---

## Types of Conditional Statements

| Statement | When to Use It | Description |
| :--- | :--- | :--- |
| `if` | Single check | Evaluates a single condition. If it is `True`, the code block executes. |
| `if-else` | Two paths | Chooses between two alternative paths (either the condition is met, or it is not). |
| `if-elif-else` | Multiple conditions | Evaluates multiple conditions sequentially. Once a condition is met, its block executes and the rest are skipped. |

---

## Practice Questions & Solutions

### Q1: Greatest of Two Numbers
**Problem:** Accept two numbers from the user and print the greatest between them.
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if num1 > num2:
    print(f"{num1} is greater")
elif num2 > num1:
    print(f"{num2} is greater")
else:
    print("Both numbers are equal")
```
* **Sample Input:** `14, 7`
* **Sample Output:** `14.0 is greater`

---

### Q2: Gender Greeting Message
**Problem:** Accept a gender character from the user and print a custom greeting.
```python
gender = input("Enter gender (M/F): ").strip().upper()

if gender == "M":
    print("Good Morning Sir")
elif gender == "F":
    print("Good Morning Ma'am")
else:
    print("Good Morning")
```
* **Sample Input:** `M`
* **Sample Output:** `Good Morning Sir`

---

### Q3: Even or Odd Integer Check
**Problem:** Accept an integer and check if it is even or odd.
```python
num = int(input("Enter an integer: "))

if num % 2 == 0:
    print(f"{num} is Even")
else:
    print(f"{num} is Odd")
```
* **Sample Input:** `9`
* **Sample Output:** `9 is Odd`

---

### Q4: Voter Eligibility Check
**Problem:** Accept the user's name and age. Check if they are a valid voter (18+). If they are not, print a message showing how many years they must wait before they can vote.
```python
name = input("Please tell your name: ")
age = int(input("Please tell your age: "))

if age >= 18:
    print(f"Hello {name}, you are a valid voter ✅")
else:
    years_to_wait = 18 - age
    print(f"Hello {name}, you cannot vote yet. You can vote after {years_to_wait} years.")
```
* **Sample Input:** `Shery, 12`
* **Sample Output:** `Hello Shery, you cannot vote yet. You can vote after 6 years.`

---

### Q5: Leap Year Checker
**Problem:** Accept a year and check if it is a leap year. 
* **Logic:** 
  - **Century Years** (ending in `00` like `1900`, `2000`) must be divisible by `400` to be leap years.
  - **Normal Years** must be divisible by `4` (and not by `100`).

```python
year = int(input("Please tell your year: "))

# Check if it is a century year
if year % 100 == 0:
    if year % 400 == 0:
        print(f"{year} is a leap year ✅")
    else:
        print(f"{year} is not a leap year")
else:
    if year % 4 == 0:
        print(f"{year} is a leap year ✅")
    else:
        print(f"{year} is not a leap year")
```

**Alternative (Simplified Logic):**
```python
year = int(input("Please tell your year: "))

if (year % 100 == 0 and year % 400 == 0) or (year % 100 != 0 and year % 4 == 0):
    print(f"{year} is a leap year ✅")
else:
    print(f"{year} is not a leap year")
```
* **Sample Input:** `2024`
* **Sample Output:** `2024 is a leap year ✅`
* **Sample Input:** `1900`
* **Sample Output:** `1900 is not a leap year`

---

### Q6: Temperature Ladder
**Problem:** Accept temperature in °C and print a description based on its range.
* **Ranges:**
  - `-5°C` to `5°C` -> `Very Cold 🥶`
  - `6°C` to `18°C` -> `Cold ❄️`
  - `19°C` to `30°C` -> `Hot ☀️`
  - Any other value -> `Very Hot 🔥`

```python
temp = int(input("Please tell your temperature: "))

if temp >= -5 and temp <= 5:
    print("Very Cold 🥶")
elif temp >= 6 and temp <= 18:
    print("Cold ❄️")
elif temp >= 19 and temp <= 30:
    print("Hot ☀️")
else:
    print("Very Hot 🔥")
```
* **Sample Input:** `25`
* **Sample Output:** `Hot ☀️`
