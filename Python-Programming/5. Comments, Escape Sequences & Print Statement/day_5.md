# Day 5 - Comments, Escape sequence & Print in Python

In this video I learn how to use comments in Python, The Usages of Escape Sequence & Print Statement.


# Python Comments
A comment is a part of the code that a programmer does not want to execute. It is used to explain a block of code, and it is not executable. The Python interpreter ignores comments.

## Single-Line Comments: 

To write a comment just we have to add '#' at the start of the line.

### example 1:
```python
#This is a 'Single-Line Comment'
print("This is a print statement.")
``` 

Output:

```markup
This is a print statement. 
``` 

### example 2:
```python
print("Hello World !!!") #Printing Hello World
```

Output:

```markup
Hello World!!!
``` 

### Example 3:

```python
print("Python Program")
#print("Python Program")
``` 

### Output: 

```markup
Python Program
```

## Multi-Line Comments:

To write multi-line comments you can use ‘#’ at each line or you can use the multiline string.

### Example 1: The use of ‘#’.

```python
#It will execute a block of code if a specified condition is true.
#If the condition is false then it will execute another block of code.
p = 7
if (p > 5):
    print("p is greater than 5.")
else:
    print("p is not greater than 5.")
```


Output:

```markup
p is greater than 5.
```


### Example 2: The use of multiline string.

```python
"""This is an if-else statement.
It will execute a block of code if a specified condition is true.
If the condition is false then it will execute another block of code."""
p = 7
if (p > 5):
    print("p is greater than 5.")
else:
    print("p is not greater than 5.")
```

### Output

```markup
p is greater than 5.
```

### Escape Sequences in Python  
Escape sequences are special characters used inside strings to perform actions like making a new line or adding tabs.
To insert characters that we can’t type directly in a string, we use **escape sequence characters**.  
An escape sequence starts with a backslash `\` followed by another character.

### Example:  
```python
print("Hello\nWorld")  # \n makes a new line
print("Hello\tWorld")  # \t adds a tab space
```

Alright bestie 😎 here’s a clean, **easy-to-understand** version for your **README.md**, perfect for beginners — clear, simple, and well-formatted:

### More on the `print()` Statement  

The `print()` function is used to display output on the screen.  
The basic syntax looks like this:  

```python
print(object(s), sep=separator, end=end, file=file, flush=flush)
````

#### 🧩 Parameters of `print()`

1. **object(s):** The value(s) you want to print. You can print multiple items separated by commas.
2. **sep='separator':** Defines how to separate multiple objects. The default is a space `' '`.
3. **end='end':** Defines what to print at the end. The default is `'\n'` (new line).
4. **file:** Where to send the output. By default, it goes to the screen (`sys.stdout`).
5. **flush:** If `True`, the output is flushed immediately. Usually, you can ignore this as a beginner.

#### 💡 Example:

```python
print("Hello", "World", sep="-", end="!")  
# Output: Hello-World!
```

