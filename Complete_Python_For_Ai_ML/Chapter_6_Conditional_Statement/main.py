# you have to take input of age and tell the person can vote or not

age = int(input("Enter your age: "))

# # wrong:
# if age >= 18:
#     print("Yes you can vote.")

# # wrong:
# if age >= 18:
#     print("Yes you can vote.")

# print("Sorry Bro, You can't vote yet.")

# correct:
if age >= 18:
    print("Yoo Bro, You can vote.")
else:
    print("Sorry Bro, You can't vote yet.")

# # if-elif-else:
money = int(input("Give me money: "))

# version 1:
# if money == 10:
#     print("I will buy a ice-cream")
# elif money == 50:
#     print("I will buy a burger")
# elif money == 100:
#     print("I willl buy a plate of Biryani")
# else:
#     print("I will stay Hungry")

# version 2:
if money >= 10 and money <= 50:
    print("I will buy a ice-cream")
elif money >= 50 and money <= 100:
    print("I will buy a burger")
elif money >= 100 and money <= 200:
    print("I willl buy a plate of Biryani")
else:
    print("I will stay Hungry")

# Question 1: Accept two numbers and print the greatest between them:

num1 = int(input("Enter the Number 1: "))
num2 = int(input("Enter the Number 2: "))

if num1 > num2:
    print(num1, "is grater")
else:
    print(num2, "is grater")

# But if both are equal:
num1 = int(input("Enter the Number 1: "))
num2 = int(input("Enter the Number 2: "))

if num1 > num2:
    print(num1, "is grater")
elif num1 == num2:
    print("Both are the same number")
else:
    print(num2, "is grater")

# Question 2: Accept gender from user and print a greeting message.

# print("hello" > "hEllo") 
# print(ord("h"))
# print(ord("H"))

gender = input("Enter your Gender (M/F): ")

if gender == "M" or gender == "m":
    print("Hello Sir, Good Morning!")
elif gender == "F" or gender == "f":
    print("Hello Ma'am, Good Morning!")
else:
    print("You have input a worng value")

# Question 3: Accept an integer and check if it is even or odd.

int = int(input("Enter your number: "))

if int % 2 == 0:
    print("Your number is Even")
else:
    print("Your number is Odd")


# Question 4: Accept name and age — check if the user is a valid voter (18+).

name = input("Enter your name: ")
age = int(input("Enter your age: "))

if age >= 18:
    print(f"Hello {name} you are a voter.")
else:
    print(f"Hello {name} you are not a voter. But you can vote after {18 - age} years later.")

# Question 5: Accept a year and check if it is a leap year.

year = int(input("Enter a year: "))

if year % 100 == 0 and year % 400 == 0:
    print("This is a centuary year and yeah it's a leap year")
elif year % 100 != 0 and year % 4 == 0:
    print("This is a normal year and yeah it's a leap year")
else:
    print("This is not a leap year")

# Question 6: Accept temperature in °C and print a description.

temp = int(input("Enter the Temperature: "))

if temp <= 5:
    print("Very Cold")
elif temp >= 6 and temp <= 20:
    print("Cold")
elif temp >= 21 and temp <= 30:
    print("Hot")
else:
    print("Very Hot")
