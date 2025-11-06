
# String Methods in Python

Python has many built-in methods that help us **work with and modify strings** easily.  
Below are some common ones explained simply with examples.

---

## 1️⃣ upper()
Converts all characters in the string to **uppercase**.

```python
str1 = "AbcDEfghIJ"
print(str1.upper())
````

**Output:**

```
ABCDEFGHIJ
```

---

## 2️⃣ lower()

Converts all characters in the string to **lowercase**.

```python
str1 = "AbcDEfghIJ"
print(str1.lower())
```

**Output:**

```
abcdefghij
```

---

## 3️⃣ strip()

Removes any extra spaces from the **beginning** and **end** of the string.

```python
str2 = " Silver Spoon "
print(str2.strip())
```

**Output:**

```
Silver Spoon
```

---

## 4️⃣ rstrip()

Removes specific characters from the **end** of the string.

```python
str3 = "Hello !!!"
print(str3.rstrip("!"))
```

**Output:**

```
Hello
```

---

## 5️⃣ replace()

Replaces parts of a string with another string.

```python
str2 = "Silver Spoon"
print(str2.replace("Sp", "M"))
```

**Output:**

```
Silver Moon
```

---

## 6️⃣ split()

Splits a string into a **list** using a separator (like space, comma, etc.).

```python
str2 = "Silver Spoon"
print(str2.split(" "))  # splits at spaces
```

**Output:**

```
['Silver', 'Spoon']
```

---

## 7️⃣ capitalize()

Makes the **first letter uppercase** and the rest lowercase.

```python
str1 = "hello world"
print(str1.capitalize())
```

**Output:**

```
Hello world
```

---

## 8️⃣ center()

Centers the string within a space of given width.
You can also add a fill character.

```python
str1 = "Welcome to Python!"
print(str1.center(30))
print(str1.center(30, "."))
```

**Output:**

```
      Welcome to Python!
......Welcome to Python!......
```

---

## 9️⃣ count()

Counts how many times a word or letter appears in a string.

```python
str2 = "Abracadabra"
print(str2.count("a"))
```

**Output:**

```
4
```

---

## 🔟 endswith()

Checks if a string **ends** with a certain word or character.

```python
str1 = "Welcome to the Console !!!"
print(str1.endswith("!!!"))
```

**Output:**

```
True
```

You can also check between specific indexes:

```python
print(str1.endswith("to", 4, 10))
```

**Output:**

```
True
```

---

## 11️⃣ find()

Searches for the **first occurrence** of a word and returns its index.
If not found, returns **-1**.

```python
str1 = "He's name is Dan. He is an honest man."
print(str1.find("is"))
print(str1.find("Daniel"))
```

**Output:**

```
10
-1
```

---

## 12️⃣ index()

Works like `find()`, but gives an **error** if the word is not found.

```python
str1 = "He's name is Dan. Dan is an honest man."
print(str1.index("Dan"))
```

**Output:**

```
13
```

If the word doesn’t exist:

```python
print(str1.index("Daniel"))
```

**Output:**

```
ValueError: substring not found
```

---

## 13️⃣ isalnum()

Returns **True** if the string has only letters and numbers (no spaces or symbols).

```python
str1 = "WelcomeToPython123"
print(str1.isalnum())
```

**Output:**

```
True
```

---

## 14️⃣ isalpha()

Returns **True** if the string has only letters (A–Z, a–z).

```python
str1 = "Welcome"
print(str1.isalpha())
```

**Output:**

```
True
```

---

## 15️⃣ islower()

Checks if all characters are lowercase.

```python
str1 = "hello world"
print(str1.islower())
```

**Output:**

```
True
```

---

## 16️⃣ isprintable()

Returns **True** if all characters are printable (no hidden or special characters).

```python
str1 = "We wish you a Merry Christmas"
print(str1.isprintable())
```

**Output:**

```
True
```

---

## 17️⃣ isspace()

Checks if the string only has **spaces or tabs**.

```python
str1 = "     "  # spaces
print(str1.isspace())

str2 = "\t\t"  # tabs
print(str2.isspace())
```

**Output:**

```
True
True
```

---

## 18️⃣ istitle()

Returns **True** if every word starts with a capital letter.

```python
str1 = "World Health Organization"
print(str1.istitle())
```

**Output:**

```
True
```

```python
str2 = "to kill a Mocking bird"
print(str2.istitle())
```

**Output:**

```
False
```

---

## 19️⃣ isupper()

Checks if all characters are uppercase.

```python
str1 = "WORLD HEALTH ORGANIZATION"
print(str1.isupper())
```

**Output:**

```
True
```

---

## 20️⃣ startswith()

Checks if the string **starts** with a specific value.

```python
str1 = "Python is an interpreted language"
print(str1.startswith("Python"))
```

**Output:**

```
True
```

---

## 21️⃣ swapcase()

Switches lowercase to uppercase and uppercase to lowercase.

```python
str1 = "Python is an Interpreted Language"
print(str1.swapcase())
```

**Output:**

```
pYTHON IS AN iNTERPRETED lANGUAGE
```

---

## 22️⃣ title()

Makes every word start with a capital letter.

```python
str1 = "he's name is dan. dan is an honest man."
print(str1.title())
```

**Output:**

```
He'S Name Is Dan. Dan Is An Honest Man.
```

---

### Summary:

| Method                                     | Description                    |
| ------------------------------------------ | ------------------------------ |
| upper(), lower()                           | Change text case               |
| strip(), rstrip()                          | Remove spaces or characters    |
| replace()                                  | Replace text                   |
| split()                                    | Split text into a list         |
| capitalize(), title(), swapcase()          | Change word style              |
| count(), find(), index()                   | Search or count text           |
| isalpha(), isalnum(), islower(), isupper() | Check string type              |
| startswith(), endswith()                   | Check beginning or end of text |

---

These methods make working with strings in Python much easier!

