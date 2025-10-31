a = 1
print(a)

b = True
print(b)

c = "CodeWithTanim"
# c1 = CodeWithTanim1 # This shows an error because the string is not in quotes.
print(c)

d = None
print(d)


e = 123
d = "Tanim"

# print(d+e) 
# it shows an error because we are trying to concatenate a string with an integer.

# To fix this error, we need to convert the integer to a string using the str() function.
print(d + str(e))  # Now it works fine.

f = complex(1, 2)
print(f)

g = 3 + 4j # Another way to create a complex number
print(g)

# Type checking
print("Type of a is", type(a))  # Output: <class 'int'>
print("Type of b is", type(b))  # Output: <class 'bool'>
print("Type of c is", type(c))  # Output: <class 'str'>
print("Type of d is", type(d))  # Output: <class 'str'>
print("Type of e is", type(e))  # Output: <class 'int'>
print("Type of f is", type(f))  # Output: <class 'complex'>
print("Type of g is", type(g))  # Output: <class 'complex'>
print("Type of None is", type(None))  # Output: <class 'NoneType'>


list1 = [1, 2, 3, 4, 5]
print(list1)

list2 = [8, 2.3, [-4, 5], ["apple", "banana"]]
print(list2)

tuple1 = (("parrot", "sparrow"), ("Lion", "Tiger"))
print(tuple1)

dict1 = {"name": "Tanim", "age": 22, "isStudent": True}
print(dict1)

