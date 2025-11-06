# Strings are immutable
Name = "Tanim"
print(len(Name))
print(Name.upper())
print(Name.lower())

Name1 = "Tanim!!!!!!!!!"
print(Name1.rstrip("!"))
Name1_1 = "!!!!!!!!Tanim!!!!!!!!!!"
print(Name1_1.rstrip("!"))

print(Name.replace("Tanim", "Samiur"))

Name3 = "!!!!!Rahman !!!!! Tanim!!!!!!"
print(Name3.split(" "))

blogHeading = "coding is fun"
print(blogHeading.capitalize())

blogHeading1 = "coding is fuN"
print(blogHeading1.capitalize())

str1 = "Welcome to Python Programming"
print(len(str1))
print(str1.center(50))
print(len(str1.center(50)))

Name4 = "Tanim!!!! Tanim!!!! Tanim"
print(Name4.count("Tanim"))

str1 = "Welcome to Python Programming !!!!!!!!!!"
print(str1.endswith("!"))
print(str1.endswith("to", 0, 15))
print(str1.endswith("to", 4, 10))

print(str1.find("Python"))

print(str1.index("Programming"))

str2 = "WelcomeToPythonProgramming"
print(str2.isalnum()) # True if all characters are alphanumeric A-Z, a-z, 0-9

str2 = "WelcomeToPythonProgramming"
print(str2.isalpha()) # True if all characters are alphabetic A-Z, a-z (no spaces, no numbers)

print(str2.islower())

str3_1 = "Hello Bangaldesh"
print(str3_1.isprintable())
str3_2 = "Hello Bangladesh\n"
print(str3_2)
print(str3_2.isprintable())

str4_1 = "            "
str4_2 = "      "
print(str4_1.isspace())
print(str4_2.isspace())

str5_1 = "coding is fun so much"
print(str5_1.istitle())
str5_2 = "Coding Is Fun So Much"
print(str5_2.istitle())

str6_1 = "Python is Easy to Learn"
print(str6_1.startswith("Python"))

str6_2 = "Learning Python is Fun"
print(str6_2.startswith("Programming"))

str7 = "His name is exploitInject"
print(str7.swapcase())
print(str7.title())

