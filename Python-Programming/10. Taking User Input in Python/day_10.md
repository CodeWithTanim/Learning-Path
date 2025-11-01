# User Input in Python
In python we can take user input directly by using input()  function. This input fucntion gives a return values as string/character as programmed by the programmer.

## Syntax:
```python
variable=input()
```
In reality, input functions returns the values as string. So we need to use typecasting them to convert the string into another datatype.

## Example:
```python
variable=int(input())
variable=float(input())
```

We can also display a text using the input function. This will make input() function take user input and display the message at the same time.

## Example:
```python
a=input("Enter the name: ")
print(a)
```
## Output:
```
Enter the name: CodeWithTanim
CodeWithTanim
```