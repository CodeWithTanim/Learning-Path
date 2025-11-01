a = 10
b = 5
c = "15"
d = 2.5
# Implicit Typecasting
print("a + b =", a + b)          # int + int = int
print("a + d =", a + d)          # int + float = float
print("d + b =", d + b)          # float + int = float

# Explicit Typecasting
print("a + c =", a + int(c))     # int + str (explicit conversion needed)
