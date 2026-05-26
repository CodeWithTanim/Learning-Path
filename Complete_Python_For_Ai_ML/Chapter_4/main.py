# Unicode Number of a String
a = "a"
b = "A"

print(ord(a)) # gives ascii value
print(ord(b)) # gives ascii value
print(chr(90)) # gives character from ascii value

# String Indexing
c = "Hello"
#   H  e  l  l  o
#   0  1  2  3  4   ← positive
#  -5 -4 -3 -2 -1   ← negative

# Positing Indexing
print(c[0])
print(c[1])
print(c[2])
print(c[3])
print(c[4])

# Negative Indexing
print(c[-1])
print(c[-2])
print(c[-3])
print(c[-4])
print(c[-5])

# String Slicing
d = "Hello how are you"

# how:
print(d[6:9])
# you:
print(d[14:17])
# Hello:
print(d[0:5])

# Type Conversion
e = 12
e = 20
e = 50

e = "12"
print(type(e))
f = int(e)
print(type(f))

g = "13"
print(type(g))
g = int(g)
print(type(g))

g = 12.63
print(g)
print(type(g))
g = int(g)
print(g)
print(type(g))

# But if g is string here:
# g = "12.65"
# print(g)
# print(type(g))
# g = int(g)
# print(g) # Shows error: ValueError: invalid literal for int() with base 10: '12.65'

# Note: String can be convert if it only valid integer not float or any other characters.

h = "12.5"
print(h)
print(type(h))
h = float(h)
print(h)
print(type(h))

h = 12
print(h)
print(type(h))
h = float(h)
print(h)
print(type(h))

h = 3486
h = float(h)
print(type(h))
print(h)

a = 123
b = 34.5
c = 12 + 34j
d = True

a = str(a)
b = str(b)
c = str(c)
d = str(d)
print(a, "Type: ", type(a))
print(b, "Type: ", type(b))
print(c, "Type: ", type(c))
print(d, "Type: ", type(d))

a = 12 
b = 0 
c = 12.4
d = 0.0 
e = ""
f = "hello"
print(bool(a))
print(bool(b))
print(bool(c))
print(bool(d))
print(bool(e))
print(bool(f))

a = 12 
print(a/2)