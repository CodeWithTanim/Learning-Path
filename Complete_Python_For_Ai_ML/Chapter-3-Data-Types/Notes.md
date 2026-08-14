# Chapter 03: Data Types

## What are Data Types?
Every value in Python has a **type** that tells Python what kind of data it is and what you can do with it. You don't need to declare types — Python figures it out automatically.

---

## The Main Data Types
| Type | Description | Examples |
| :--- | :--- | :--- |
| **int** | Whole numbers | `1, 42, -7` |
| **float** | Decimal numbers | `3.14, -0.5` |
| **complex** | Real + imaginary numbers | `3+4j` |
| **str** | Text in quotes | `"hello"` |
| **bool** | Boolean values | `True` or `False` |
| **NoneType** | Represents nothing | `None` |

---

## Checking the Type
You can check the type of any value or variable using the `type()` function.

```python
print(type(42))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("hello"))  # <class 'str'>
print(type(True))     # <class 'bool'>
```
