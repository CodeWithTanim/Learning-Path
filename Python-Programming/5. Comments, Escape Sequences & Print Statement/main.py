# Comments in Python

# This is single line comment

'''This is a
multi-line comment
using triple single quotes'''

"""This is another
multi-line comment
using triple double quotes"""

# Comments are ignored by the Python interpreter. They are used to explain code and make it more readable.
print("Hello, World!")  # This prints a greeting message


# Escape Sequences in Python
print("Hello,\nThis is CodeWithTanim.")  # \n is a newline escape sequence
print("Hello,\tThis is CodeWithTanim.")  # \t is a tab escape sequence
print("He said, \"Hello!\"")  # \" is used to include double quotes in a string
print('It\'s a beautiful day!')  # \' is used to include single quotes in a string
print("This is a backslash: \\")  # \\ is used to include a backslash in a string
print("First Line\rSecond Line")  # \r is a carriage return escape sequence

# Print Statement in Python
print("This is a simple print statement.")  # Prints a string to the console
name = "Tanim"
age = 23
print("My name is", name, "and I am", age, "years old.")  # Prints multiple items
print(f"My name is {name} and I am {age} years old.")  # Using f-strings for formatted output
print("My name is {} and I am {} years old.".format(name, age))

# Using the format() method for formatted output
print("Hello World!", end=" *** ")  # Custom end character
print("This is the next print statement.")
print("Hello", "World", sep="---")  # Custom separator between items
print("Hello", "World", sep="***", end="!!!\n")  # Custom separator and end character
print("This is the next line after custom end.")
