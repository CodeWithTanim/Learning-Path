# String Slicing & Operations on Strings

## Length of a String  
We can find how many characters a string has using the `len()` function.

### Example:
```python
fruit = "Mango"
len1 = len(fruit)
print("Mango is a", len1, "letter word.")
````

### Output:

```
Mango is a 5 letter word.
```

---

## String as an Array

A string is basically a **sequence of characters** (like an array).
This means you can access each character using its position number (called **index**).

### Example:

```python
pie = "ApplePie"
print(pie[:5])   # prints from start to index 4
print(pie[6])    # prints character at index 6
```

### Output:

```
Apple
i
```

---

## String Slicing

**Slicing** means taking out a part of a string using its start and end indexes.
You write it as: `string[start:end]`

* If you leave `start` empty, it begins from the start.
* If you leave `end` empty, it goes till the end.
* You can also use **negative indexes** to count from the end.

### Example:

```python
pie = "ApplePie"
print(pie[:5])      # Slicing from start
print(pie[5:])      # Slicing till end
print(pie[2:6])     # Slicing between indexes
print(pie[-8:])     # Using negative index
```

### Output:

```
Apple
Pie
pleP
ApplePie
```

---

## Looping Through a String

Since strings are sequences (like arrays), you can loop through them easily using a `for` loop.

### Example:

```python
alphabets = "ABCDE"
for i in alphabets:
    print(i)
```

### Output:

```
A
B
C
D
E
```

---

**In short:**

* `len()` → finds length of the string
* `[]` → accesses characters
* `[:]` → slices parts of string
* `for` loop → goes through each character
