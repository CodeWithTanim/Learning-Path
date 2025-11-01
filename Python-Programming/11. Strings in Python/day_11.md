# String in Python

## What are Strings?

In Python, anything written inside single (`' '`) or double (`" "`) quotation marks is called a **string**.  
A string is a sequence of characters (text) like words or sentences.  
Strings are mostly used when working with text or letters.

### Example
```python
name = "Tanim"
print("Hello, " + name)
````

### Output:

```
Hello, Tanim
```

Note: You can use either single or double quotes for strings — both work the same.

---

## Using Quotes Inside Strings

Sometimes, we need to include quotation marks inside a string.
For example, to print this sentence:
`He said, "I want to eat an apple".`

We can use single quotes around the string:

```python
print('He said, "I want to eat an apple".')
```
### Output:

```
He said, "I want to eat an apple".
```

---

## Multiline Strings

If you want your string to have multiple lines, use triple quotes (`""" """` or `''' '''`).

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
```

---

## Accessing Characters in a String

Strings in Python work like an array of characters.
Each character has an **index** (position number) starting from **0**.
You can access characters using square brackets `[ ]`.

```python
name = "Tanim"
print(name[0])  # prints T
print(name[1])  # prints a
```

---

## Looping Through a String

You can use a `for` loop to go through each character in a string.

```python
name = "Tanim"
for character in name:
    print(character)
```

This will print each character of the string one by one.