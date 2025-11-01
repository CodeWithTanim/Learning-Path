# a = input()
# print("You entered:", a)

b = input("Please enter something: ")
print("You entered:", b)

x = input("Enter a number: ")
y = input("Enter another number: ")

# sum = int(x) + int(y)
# substraction = int(x) - int(y)
# multiplication = int(x) * int(y)
# division = int(x) / int(y)

# print("Sum:", sum)
# print("Subtraction:", substraction)
# print("Multiplication:", multiplication)
# print("Division:", division)

print("Sum:", int(x) + int(y))
print("Subtraction:", int(x) - int(y))
print("Multiplication:", int(x) * int(y))
print("Division:", int(x) / int(y))

# Note: input() function takes input as string by default.
# To perform arithmetic operations, we need to convert the input strings to integers using int().
# Alternatively, we could use float() if we want to handle decimal numbers.
# example:
'''
print("Sum (float):", float(x) + float(y))
print("Subtraction (float):", float(x) - float(y))
print("Multiplication (float):", float(x) * float(y))
print("Division (float):", float(x) / float(y))
'''

"""
error1 = input("Enter a number: ")
error2 = input("Enter a name: ")

# This will raise an error because we are trying to add an integer and a string
print("This will cause an error:", int(error1) + error2)  # TypeError
"""