# Chapter 05: Input, Output & Operators

## Output — print()
The `print()` function is used to output data to the standard output device (screen). It can print strings, numbers, variables, or expressions.

### Usage Examples:
- **Basic String Output**: Prints a simple message.
- **Multiple Values**: Prints multiple arguments separated by space (by default).
- **f-Strings (Formatted Strings)**: Embeds variables directly inside a string literal using curly braces `{}`.

```python
name = "Akarsh"
age  = 20

print("Hello!")                         # Basic output
print("Name:", name, "Age:", age)      # Multiple values
print(f"My name is {name} and I am {age} years old.")  # f-string
```

---

## Input — input()
The `input()` function allows you to accept user input from the terminal. 

> [!WARNING]
> The `input()` function **always** returns the user's input as a **string** (`str`). If you need to perform mathematical calculations or work with numbers, you must manually convert (typecast) the input using `int()` or `float()`.

### Numerical Input Example:
```python
name = input("What is your name? ")
age  = int(input("How old are you? "))  # Convert input string to integer

print(f"Hello {name}, next year you will be {age + 1} years old!")
```

---

## Arithmetic Operators
Arithmetic operators are used with numeric values to perform common mathematical operations.

| Operator | Name | Example | Result | Description |
| :--- | :--- | :--- | :--- | :--- |
| `+` | Addition | `10 + 3` | `13` | Adds two values together |
| `-` | Subtraction | `10 - 3` | `7` | Subtracts one value from another |
| `*` | Multiplication | `10 * 3` | `30` | Multiplies two values |
| `/` | Division | `10 / 3` | `3.3333...` | Divides one value by another (always returns a **float**) |
| `//` | Floor Division | `10 // 3` | `3` | Divides and rounds down to the nearest whole number |
| `%` | Modulus | `10 % 3` | `1` | Returns the division remainder |
| `**` | Exponentiation | `2 ** 8` | `256` | Calculates the power of a number ($2^8$) |

> [!NOTE]
> Division (`/`) in Python always returns a float value, even if the division is clean (e.g. `12 / 2` returns `6.0`). Floor division (`//`) discards the fractional part and returns an integer.

---

## Operator Precedence (BODMAS in Python)
When multiple operators appear in an expression, Python evaluates them in a specific order of precedence:

1. **Parentheses** `()` (Highest precedence)
2. **Exponentiation** `**`
3. **Multiplication, Division, Floor Division, Modulus** `*`, `/`, `//`, `%` (Evaluated left-to-right)
4. **Addition, Subtraction** `+`, `-` (Evaluated left-to-right)

### Precedence Evaluation Examples:
```python
# Example 1: Multiplication before addition
print(3 + 4 * 2)  
# Evaluation: 3 + 8 -> 11

# Example 2: Floor Division and Modulus have same precedence (left-to-right)
print(15 // 4 + 15 % 4)  
# Evaluation: 3 + 3 -> 6

# Example 3: Exponentiation, then Multiplication, then Addition & Subtraction
print(3 + 5 * 2 ** 2 - 1)  
# Evaluation: 3 + 5 * 4 - 1 -> 3 + 20 - 1 -> 22

# Example 4: Same-level operators evaluated left-to-right
print(10 / 2 * 5)  
# Evaluation: 5.0 * 5 -> 25.0
```

---

## Comparison Operators
Comparison operators are used to compare two values. They always return a Boolean value (`True` or `False`).

| Operator | Meaning | Example | Result |
| :--- | :--- | :--- | :--- |
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `5 > 3` | `True` |
| `<` | Less than | `5 < 3` | `False` |
| `>=` | Greater than or equal to | `5 >= 5` | `True` |
| `<=` | Less than or equal to | `3 <= 5` | `True` |

---

## Logical Operators
Logical operators are used to combine conditional statements.

| Operator | Returns `True` when... | Example |
| :--- | :--- | :--- |
| `and` | Both conditions are `True` | `age > 18 and has_id == True` |
| `or` | At least one condition is `True` | `is_admin or is_staff` |
| `not` | Reverses the Boolean value (negation) | `not is_banned` |

---

## Assignment Operators
Assignment operators are used to assign values to variables. Shortcut operators (compound assignment) combine an arithmetic operation with assignment.

| Operator | Example | Equivalent to |
| :--- | :--- | :--- |
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `//=` | `x //= 3` | `x = x // 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |
