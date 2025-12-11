# **PHP Learning**

## **What is PHP?**

Think of PHP as a helpful **waiter** between you and a restaurant kitchen:

**You (Browser)** → **Waiter (PHP)** → **Kitchen (Server)**

When you visit a website:
1. Your browser sends a **REQUEST** (like ordering food)
2. PHP processes your request on the **server**
3. PHP prepares the webpage (HTML, CSS, JavaScript)
4. The server sends the webpage back as a **RESPONSE**

**Key Point:** PHP code runs on the **server**, not in your browser. That's why you can't see PHP code when you "view page source."

---

## **Getting Ready to Code PHP**

### **1. Install XAMPP**
Download from: [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

**Why XAMPP?**
- It gives PHP a place to run on your computer
- Includes everything needed: PHP + Database + Server

**After installing:**
1. Open XAMPP Control Panel
2. Click "Start" for **Apache** and **MySQL**
3. Open browser → Type: `localhost/phpmyadmin`

### **2. Install VS Code**
Download from: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
(VS Code is like a super-powered Notepad)

### **3. Set Up Your Project Folder**
1. Go to: `C:\xampp\htdocs\` (on Windows)
2. Create a new folder (example: `myproject`)
3. Right-click folder → "Open with VS Code"

---

## **Your First PHP File**

Create a file named `index.php` and type:

```php
<!DOCTYPE html>
<html>
<head>
    <title>My First PHP Page</title>
</head>
<body>
    <h1>Hello from PHP!</h1>
    
    <?php
        echo "This text comes from PHP!";
    ?>
</body>
</html>
```

**To view it:**
1. Make sure XAMPP is running
2. Open browser → Type: `localhost/myproject`
3. You'll see your PHP page!

---

## **PHP Basics Made Simple**

### **1. PHP Tags**
All PHP code lives between these tags:
```php
<?php
    // Your PHP code here
?>
```

### **2. Displaying Text**
Use `echo` to show text:
```php
<?php
    echo "Hello World!";
    echo "<br>";  // HTML line break
    echo "I'm learning PHP";
?>
```

### **3. Comments**
Notes for yourself that PHP ignores:
```php
<?php
    // Single line comment
    
    /*
        Multi-line
        comment
    */
?>
```

---

## **Variables - Data Containers**

Variables hold information. In PHP, they start with `$`:

```php
<?php
    $name = "John";     // Text
    $age = 25;          // Number
    $price = 99.99;     // Decimal number
    $is_student = true; // True/False
    
    echo "Hello, $name!";  // Shows: Hello, John!
    echo "<br>";
    echo "You are $age years old";
?>
```

**Remember:** PHP figures out the data type automatically!

---

## **Math & Comparisons**

### **Math Operators**
```php
<?php
    $a = 10;
    $b = 5;
    
    echo $a + $b;  // 15 (Addition)
    echo $a - $b;  // 5  (Subtraction)
    echo $a * $b;  // 50 (Multiplication)
    echo $a / $b;  // 2  (Division)
?>
```

### **Comparison Operators**
Check if things are true/false:
```php
<?php
    $x = 10;
    $y = 5;
    
    var_dump($x > $y);   // true (10 > 5)
    var_dump($x == $y);  // false (10 equals 5? No!)
    var_dump($x != $y);  // true (10 not equal to 5)
?>
```

---

## **Making Decisions (If-Else)**

```php
<?php
    $age = 20;
    
    if($age >= 18) {
        echo "You can vote!";
    } 
    else if($age >= 13) {
        echo "You're a teenager";
    }
    else {
        echo "You're a child";
    }
?>
```

Think of it like: **IF** this is true → do this, **ELSE IF** → do that, **ELSE** → do something different.

---

## **Lists of Items (Arrays)**

An array is a shopping list that holds multiple values:

```php
<?php
    // Create a list of fruits
    $fruits = array("Apple", "Banana", "Orange");
    
    // Or simpler way:
    $colors = ["Red", "Green", "Blue"];
    
    echo $fruits[0];  // "Apple" (First item, starts at 0)
    echo $fruits[1];  // "Banana"
    echo $fruits[2];  // "Orange"
    
    // Count items in array
    echo count($fruits);  // Shows: 3
?>
```

---

## **Repeating Actions (Loops)**

### **While Loop - Keep doing while true**
```php
<?php
    $count = 1;
    while($count <= 5) {
        echo "Number: $count<br>";
        $count++;  // Increase count by 1
    }
?>
```

### **For Loop - When you know how many times**
```php
<?php
    for($i = 1; $i <= 3; $i++) {
        echo "Repeat $i<br>";
    }
?>
```

### **Foreach Loop - For arrays**
```php
<?php
    $fruits = ["Apple", "Banana", "Orange"];
    
    foreach($fruits as $fruit) {
        echo "I like $fruit<br>";
    }
?>
```

---

## **Reusable Code (Functions)**

Functions are like recipes you use repeatedly:

```php
<?php
    // Create a function
    function greet($person_name) {
        echo "Hello, $person_name! Welcome!";
    }
    
    // Use the function
    greet("Alice");  // Shows: Hello, Alice! Welcome!
    greet("Bob");    // Shows: Hello, Bob! Welcome!
    greet("Charlie");// Shows: Hello, Charlie! Welcome!
?>
```

---

## **Working with Text (Strings)**

```php
<?php
    $text = "Hello World";
    
    // Get length of text
    echo strlen($text);  // 11 characters
    
    // Count words
    echo str_word_count($text);  // 2 words
    
    // Reverse text
    echo strrev($text);  // "dlroW olleH"
    
    // Find position of word
    echo strpos($text, "World");  // Position 6
    
    // Replace text
    echo str_replace("World", "PHP", $text);  // "Hello PHP"
?>
```

---

## **Real Project: Trip Registration Form**

Let's build a complete form that saves data to a database!

### **Step 1: Create Database**
1. Open `localhost/phpmyadmin`
2. Click "New" → Name: `trip_db`
3. Create table `trip` with these columns:
   - `name` (varchar)
   - `age` (int)
   - `gender` (varchar)
   - `email` (varchar)
   - `phone` (varchar)
   - `other` (text)
   - `dt` (timestamp)

### **Step 2: HTML Form (`index.php`)**
```php
<!DOCTYPE html>
<html>
<head>
    <title>Trip Registration</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .container { max-width: 500px; margin: auto; }
        input, textarea { width: 100%; padding: 10px; margin: 5px 0; }
        button { background: blue; color: white; padding: 10px; border: none; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Join Our Trip!</h2>
        
        <form method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="number" name="age" placeholder="Your Age" required>
            <input type="text" name="gender" placeholder="Gender">
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Phone">
            <textarea name="desc" placeholder="Other details"></textarea>
            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>
```

### **Step 3: Add PHP to Save Data**
Add this at the **top** of `index.php`:

```php
<?php
// Database connection
$server = "localhost";
$username = "root";
$password = "";
$database = "trip_db";

// Create connection
$conn = mysqli_connect($server, $username, $password, $database);

// Check connection
if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// If form is submitted
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $desc = $_POST['desc'];
    
    // Save to database
    $sql = "INSERT INTO trip (name, age, gender, email, phone, other, dt) 
            VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp())";
    
    if(mysqli_query($conn, $sql)) {
        echo "<p style='color:green;'>Registration Successful!</p>";
    } else {
        echo "<p style='color:red;'>Error: " . mysqli_error($conn) . "</p>";
    }
}
?>
```

### **Step 4: Test Your Form**
1. Fill the form in your browser
2. Click "Register"
3. Check `phpmyadmin` → `trip_db` → `trip` table to see saved data!

---

## **Quick Reference Cheat Sheet**

| PHP Element | Example | What it does |
|-------------|---------|--------------|
| **Variable** | `$name = "John"` | Stores data |
| **Echo** | `echo "Hello"` | Displays text |
| **If-Else** | `if($age > 18)` | Makes decisions |
| **Array** | `$colors = ["Red","Blue"]` | Stores lists |
| **Loop** | `for($i=0;$i<5;$i++)` | Repeats actions |
| **Function** | `function greet() { }` | Reusable code |
| **Database** | `mysqli_connect()` | Connects to database |

---

## **Common Questions Answered**

**Q: Where does PHP code run?**  
A: On the server, not in the browser.

**Q: Can I mix PHP with HTML?**  
A: Yes! PHP can generate HTML.

**Q: Is PHP case-sensitive?**  
A: Variables are case-sensitive, but functions/statements aren't.

**Q: How to see errors?**  
A: Check XAMPP error logs at `xampp/php/logs/`

---

## **Next Steps to Practice**

1. **Day 1:** Create variables and echo them
2. **Day 2:** Make an if-else for user login check
3. **Day 3:** Create an array of products and loop through them
4. **Day 4:** Build a contact form that saves to database
5. **Day 5:** Make a simple login system

---

## **Remember These Rules**

1. Always start PHP files with `.php` extension
2. PHP code must be inside `<?php ?>` tags
3. End statements with semicolon `;`
4. Variables start with `$`
5. Keep XAMPP running while testing
6. Save file and refresh browser to see changes

---

## **Troubleshooting**

**Problem:** Page shows PHP code instead of running it  
**Solution:** Make sure XAMPP Apache is running and file has `.php` extension

**Problem:** Database connection error  
**Solution:** Check XAMPP MySQL is running and database name is correct

**Problem:** Form data not saving  
**Solution:** Check column names match in PHP code and database

---

**Final Tip:** Don't try to memorize everything! Just start building. Google is your friend when you get stuck. Every PHP developer started exactly where you are now. 😊

**Happy Coding!** You're now ready to create amazing things with PHP!