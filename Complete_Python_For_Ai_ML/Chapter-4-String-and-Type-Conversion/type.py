# Type Conversions
a = '12'
print(type(a))


b = int(a)
print(type(b))

# We can reassign the variable to a different type
c = '12'
c = int(c)
print(type(c))


# d = '12.5'
# d = int(d)
# print(type(d))
# you can conver string if you hold valid integer value in string format.
# you can convert float values to int.

e = '12.5'
e = float(e)
print(type(e))

f = '12'
f = float(f)
print(type(f))
print(f)

# we can convert anything into string using str() function
g = 12
print(type(g))
g = str(g)
print(type(g))



h = 12
i = 0
j =12.4
k = 0.0
l = ""
m = 'hello'

print(bool(h))
print(bool(i))
print(bool(j))
print(bool(k))
print(bool(l))
print(bool(m))


n = 12
print(n / 2)
