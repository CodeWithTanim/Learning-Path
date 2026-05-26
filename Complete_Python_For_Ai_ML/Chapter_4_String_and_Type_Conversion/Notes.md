# Chapter 04: Strings & Type Conversion

## How Strings Work Internally
Each character in a string is stored with its own **Unicode number** (similar to ASCII values in other languages). This is why strings occupy more memory than integers.

You can interact with Unicode values using these built-in functions:
- `ord()` → Returns the Unicode number of a character.
- `chr()` → Returns the character for a given Unicode number.

```python
ord("A")   # → 65  (Unicode of A)
chr(65)    # → "A" (Character from Unicode)
```

> [!NOTE]
> In Python, even spaces and special characters have Unicode numbers. For instance, space `ord(" ")` is `32`.

---

## String Indexing
Every character in a string has a position number called an **index**. 
- **Positive Indexing**: Starts from `0` on the left and goes to the right.
- **Negative Indexing**: Starts from `-1` on the right and goes to the left.

```python
a = "Hello"
#   H  e  l  l  o
#   0  1  2  3  4   ← positive
#  -5 -4 -3 -2 -1   ← negative

print(a[0])   # H
print(a[-1])  # o
```

---

## String Slicing
Slicing extracts a part (or "slice") of a string.
**Syntax**: `string[start : stop : step]`
- `start`: The starting index (inclusive). If omitted, defaults to `0`.
- `stop`: The ending index (**exclusive** — it stops one index before this). If omitted, defaults to the end of the string.
- `step`: How many indices to step forward/backward at a time. If omitted, defaults to `1`.

```python
a = "hello"
print(a[1:4])    # ell  (index 1, 2, 3 — 4 is excluded)
print(a[::-1])   # olleh (reverses the string using a step of -1)
```

---

## Type Conversion
Type conversion (or typecasting) is changing a value from one data type to another.

### 1. Implicit (Automatic) Conversion
Python automatically converts data types when needed without developer intervention.
```python
a = 12
print(a / 2)  # 6.0
# int / int automatically converts to float in Python!
```

### 2. Explicit (Manual) Conversion
You manually tell Python to convert a value using built-in functions:
- `int()` → Converts to a whole number.
- `float()` → Converts to a decimal number.
- `str()` → Converts to text.
- `bool()` → Converts to `True` or `False`.

```python
a = 12
a = str(a)
print(a)  # "12"
```

> [!WARNING]
> Python will raise a `ValueError` if you try to convert an invalid literal (e.g. `int("12.5")` or `int("hello")`). A string must contain a valid integer representation to be successfully converted into an `int`.

> [!NOTE]
> String can be convert if it only valid integer not float or any other characters.

### The 7 Falsy Values
Everything in Python converts to `True` when passed to `bool()` — **except** for these 7 values, which convert to `False`:
1. `0` (Integer zero)
2. `0.0` (Float zero)
3. `False` (Boolean False)
4. `""` (Empty string)
5. `[]` (Empty list)
6. `{}` (Empty dictionary)
7. `()` (Empty tuple)
