name = "Tanim"
age = 23
# v1.0
print("My name is", name)
print("My name is", name, "and I am", age, "years old")
# v2.0
print(f"My name is {name}")
print(f"My name is {name} and I am {age} years old")

# Input
# name = input("Enter your name: ")
# age = input("Enter your age:")
# print(type(age))
# print(f"Your name is {name} and your age is {age}")

# age = int(input("Enter your age: "))
# print(type(age))
# print(f"Your age is in integer is {age}")


# Arithmetic Operators
# Operators: + , - , / , // , * , ** , %

a = 20
b = 10

print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a // b) # Floor Division
print(a ** b) # Exponentiation
print(a % b)  # Modulus


"""Step By Step:
Step 1: () — Brackets
Step 2: ** — Exponent (right to left: 2**2**3 = 2**(2**3))
Step 3: * / // % — Multiplication, Division, Floor Division, Modulus
Step 4: + - — Addition, Subtraction
"""
# print(10 / 2 * 5)
# print(10 * 2 / 5)

# Test:
print("Test")
print(3 + 4 * 2)
print(15 // 4 + 15 % 4)
print(3 + 2 ** 2 * 5 - 1)

# Comparison Operators:
# (== , > , < , >= , <= , !=)

print("Comparison Operators:")
print(16 == 16) # True
print(12 > 14) # False
print(12 < 45) # True
print(12 >= 12) # True
print(45 <= 56) # True
print(23 != 23) # False
print(24 != 56) # True

a = 45
b = 56
print(a >= 45)

# Logical Operators:
# (AND , OR , NOT)

print("Logical Operators:")
print(12 > 10, 34 == 34)
print(12 > 10 and 34 == 34) # If all True then it will print True
print(12 > 13 and 34 == 34) # If any single one is false then it will print False.
print(12 > 10 and 34 == 34 and 45 == 45 and 10 > 20)

print(34 == 45 or 12 == 23 or 67 == 69 or 12 == 12) # If anyone is True then it will print True.

print(not 12 == 34) # change the boolean

# Test:
# print((5 > 3 and 10 == 10) or (4 != 4 and 2 < 1))
# (True and True) or (False and False)
# True or False
# True
print((5 > 3 and 10 == 10) or (4 != 4 and 2 < 1))

# print((10 == 10 and 23 != 23) or (34 == 12 and bool("hello")))
# (True and False) or (False and True)
# False or True
# True
print((10 == 10 and 23 != 23) or (34 == 12 and bool("hello")))

# print(not (5 == 5 and 3 != 4) or (10 > 20))
# not ((True and True) or False)
# not (True or False)
# not True
# False
print(not (5 == 5 and 3 != 4) or (10 > 20))

# Assignment Operators:
# Operators: = , += , -= , *= , /= , //= , **= , %= 

a = 10
# print(a + 20)
b = a + 20
a = a + 20 # re-assign value

a = 10
a = a + 10
a = a + 10
a = a + 10
print(a)

a = 10
a += 10
a += 10
a += 10
print(a)

# Same as like:
a -= 10
a *= 10
a /= 10
a //= 10
a **= 10
a %= 10

