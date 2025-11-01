# Typecasting in Python  

**Typecasting** means changing one data type into another.  
In Python, this process is also called **type conversion**.  

Python gives us many built-in functions to do typecasting like:  
`int()`, `float()`, `str()`, `tuple()`, `set()`, `list()`, `dict()`, `hex()`, `oct()`, etc.  

---

## Types of Typecasting  

There are **two types** of typecasting in Python:  
1. **Explicit Typecasting (Manual Conversion)**  
2. **Implicit Typecasting (Automatic Conversion)**  


### Explicit Typecasting  
When a programmer **manually** converts one data type into another, it’s called **explicit typecasting**.  
We use Python’s built-in functions like `int()`, `float()`, `str()`, etc. for this.  

**Example:**  
```python
string = "15"
number = 7

# convert string into integer
string_number = int(string)

sum = number + string_number
print("The sum of both numbers is:", sum)
````

**Output:**

```
The sum of both numbers is: 22
```


### Implicit Typecasting

In **implicit typecasting**, Python automatically converts one data type to another.
This happens when we mix two different types in an operation — Python converts the smaller type to a bigger one to avoid data loss.

**Example:**

```python
a = 7       # integer
b = 3.0     # float

# Python automatically converts 'a' to float
c = a + b

print(c)
print(type(c))
```

**Output:**

```
10.0
<class 'float'>
```

---

**In short:**

* **Explicit Typecasting** = You do it manually.
* **Implicit Typecasting** = Python does it automatically.
