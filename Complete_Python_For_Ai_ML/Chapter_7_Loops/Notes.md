# Chapter 07: Loops

## Why Loops?
Imagine you need to print "Hello" 100 times on the screen. Without loops, you would have to write 100 lines of `print("Hello")` code. If you want to change it to "Hello World", you would have to edit all 100 lines.

With a loop, you can accomplish this task in just **2 lines of code**:
```python
for i in range(100):
    print("Hello")
```
Loops allow you to **repeat a block of code** as many times as needed, making your code:
- Much shorter and cleaner.
- Easy to update or modify.
- Less prone to repetitive errors (violates the DRY - *Don't Repeat Yourself* principle).

Python provides two main types of loops:
1. **`for` Loop**: Typically used when you know in advance how many times you want to run the loop (iterating over a sequence like a string, list, or range).
2. **`while` Loop**: Used when you want to repeat a block of code as long as a certain condition remains `True`.

---

## The Bucket Analogy 🪣
To understand how loops process data, think of the **Bucket Analogy**:

1. **The Bucket (Iterable)**: Imagine a bucket containing multiple items (like balls, numbers, or characters).
2. **Picking Items (Iteration)**: The loop picks one item out of the bucket at a time, processes it (runs the code block inside), and then goes back to pick the next one.
3. **Loop Termination**: The loop continues this process automatically. Once there are no more items left in the bucket, the loop terminates.

In Python, the bucket represents any **iterable** object (such as a string, list, or a range of numbers), and each pick is one **iteration** of the loop.

> [!NOTE]
> Detailed syntax, control flow statements (`break`, `continue`, `else`), and practical questions for each loop type are covered in the upcoming chapters:
> - **Chapter 08**: The `for` loop, ranges, and string iteration.
> - **Chapter 09**: The `while` loop, conditions, and infinite loop warnings.
