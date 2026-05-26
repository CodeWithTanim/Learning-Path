# Chapter 02: Comments & Variables

## Comments
Comments are notes you write in your code for yourself (or other developers). Python completely ignores them — they don't affect how the program runs.

```python
# This is a single-line comment

"""
This is a multiline comment
written using a docstring
"""
```

> [!NOTE]
> Python doesn't have a true multiline comment syntax. We "borrow" the triple-quote string `"""..."""` for this purpose.

---

## Variables
Think of a variable as a **labelled box** — you put a value inside and refer to it by the label whenever you need it.

```python
name = "Akarsh"
age  = 20
city = "Indore"
```

> [!WARNING]
> **Rules — these will cause errors:**
> - ❌ `1name = "x"` → can't start with a number
> - ❌ `my name = "x"` → no spaces allowed
> - ❌ `my-name = "x"` → no special characters (except underscore)

### Naming Conventions
```python
camelCase  → myVariableName
PascalCase → MyVariableName
snake_case → my_variable_name  # ✅ Python prefers this
```
