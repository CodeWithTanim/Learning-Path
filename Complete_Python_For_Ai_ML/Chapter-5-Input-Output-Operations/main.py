# name = 'Tanim'
# age = 24
# print(f"Hi My name is {name} and my name is {age}")

# print('Hi, My Name is ', name, "and my age is", age)

# age = input('What is your age: ')
# print(f'Hello your age is {age}')


# Arithmetic Operators
# numbers ---> int, float, complex
# (+, -, /, //, *, **, %)

# a = 10
# b = 20
# c = 12
# d = 34
# print(a + b + c + d + 9)
# print(a - b - c - d - 9)

a = 12
# print(a / 2)
# print(int(a / 2))
# print(a // 2)

# print(12 * 12)

print(12**2)
# print(10000**1000)


print(37 % 5)

"""
() ---> Brackets
** ---> Exponent (right to left: 2**2**3 = 2**(2**3))
* / //  % ---> Multiplication, Division, Floor Division, Modulus
+ - ---> Addition, Substraction
"""

print(3 + 4 * 2)
print(15 // 4 + 15 % 4)
print(3 + 2 ** 2 * 5 - 1)


# Comparision Operator

# ==
# !=
# <
# >
# <=
# >=

print(12 == 12) # True
print(14 == 12) # False
print(12 != 14) # True
print(12 != 12) # False
print(12 < 14) # True
print(14 < 12) # False
print(12 > 14) # False
print(14 > 12) # True
print(12 <= 14) # True
print(14 <= 12) # False
print(12 >= 14) # False
print(14 >= 12) # True

a = 12
b = 56
print(b > a)

# Logical Operators

# and or not
print(12 > 10, 34 == 34)
print(12 > 10 and 34 == 34 and 45 == 45)
print(12 > 10 and 34 == 34 and 45 == 45 and 10 > 20)

print(34 == 45 or 12 == 23 or 67 == 69 or 12 == 12)

print(not 12 == 34)



print((5 > 3 and 10 == 10) or (4 != 4 and 2 < 1))
print((10 == 10 and 23 != 23) or (34 == 12 and bool('hello')))
print(not(5 == 5 and 3 != 4) or 10 > 20)

