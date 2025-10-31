# Day 6: Variable & Data Types

## What is Variables?
Variable is like a container that can holds or stores data. It's like we stores groceries in the container. e.g: sugar, salt, etc.

Creating a variables is like creating a placeholder. in memory and assigning it some value for future usages. In python it's easy to write:

```python
a = 1
b = True
c = "CodeWithTanim" # Strings are stored in the double quotes.
d = None
```

## What is a Data Type?
Data type specifies the types of value a variable holds. It is required in programming to do various operatios without creating any error. 

In Python there are **4** types of Data Type:

### 1. Numeric data: int, float, complex
- int: 3, -8, 0
- float: 7.349, -9.0, 0.0000001
- complex: 6 + 2i

 ### 2. Text data: str
 
 str: "Hello World!!!", "Python Programming"

### 3. Boolean data:

Boolean data consists of values True or False.

### 4. Sequenced data: list, tuple

A **list** is a collection of items stored in a specific order. The elements are separated by commas and written inside square brackets `[ ]`.  
Lists are **changeable (mutable)**, which means you can modify them after creating.  

**Example:**

```python
list1 = [8, 2.3, [-4, 5], ["apple", "banana"]]
print(list1)
```

Output:

```markup
[8, 2.3, [-4, 5], ['apple', 'banana']]
```

A **tuple** is an ordered collection of items, just like a list, but the elements are written inside **parentheses `( )`** instead of square brackets.  
Tuples are **unchangeable (immutable)**, which means once created, you can’t modify them.  

**Example:**

```python
tuple1 = (("parrot", "sparrow"), ("Lion", "Tiger"))
print(tuple1)
```


Output:

```python
(('parrot', 'sparrow'), ('Lion', 'Tiger'))
```


### 5. Mapped data: dict
    

A **dictionary** is an unordered collection of data that stores information in **key:value pairs**.  
Each key is unique, and the pairs are written inside **curly brackets `{ }`**.

**Example:**

```python
dict1 = {"name":"Sakshi", "age":20, "canVote":True}
print(dict1)
```


Output:

```python
{'name': 'Sakshi', 'age': 20, 'canVote': True}
```

Everything is **Objects** in Python.