# My Web Dev Journey: Class 9 Notes
## ID vs. Class: The Aadhar Card Analogy

Today I cleared up one of the most confusing things in HTML—**IDs and Classes**. I finally understand that while they both help categorize and target elements, they have very different rules. Here’s what I learned.

---

### 1. The ID (Unique Identity)
Think of an ID as an **Aadhar Card** or a Social Security Number. 
*   **One per person:** Each element can have only one ID.
*   **Unique values:** An ID value (like `john-id`) can only be used **once** on a single page. 
*   **Linking:** This was a cool discovery! If I put `#my-id` at the end of a URL, the browser will automatically scroll down to the element with that ID.
*   **CSS Selector:** In CSS, I target an ID using the hash symbol (`#`). For example: `#firstdiv`.

---

### 2. The Class (Classification)
Think of a Class as a **School Class** (like 10th Grade) or a T-shirt color.
*   **Group items:** Multiple elements can share the same class (like 50 kids in one class).
*   **Multiple classes:** One element can belong to multiple classes. For example, a `<div>` can be in the "red" class AND the "bg-yellow" class at the same time. I just separate the names with a space: `class="red bg-yellow"`.
*   **CSS Selector:** In CSS, I target a class using a dot (`.`). For example: `.red`.

---

### 3. Story Comparison: John and Harry
The teacher used a great story to explain this:
*   **John and Harry** are friends. They have their own unique **Aadhar Numbers** (IDs). No one else in the world has those numbers.
*   However, they are both in **Class 10th**. This "10th" is a **Class** because it’s a property they share with many other students.
*   If Harry wears a **Red T-shirt**, "Red" is also a **Class** property. He can be in Class 10th AND the Red T-shirt class at the same time!

---

### 4. Why use them?
I use IDs when I want to target a **specific, unique element** for styling or jumping to a section. I use Classes when I want to apply the **same styling to many elements** at once (like making all warning messages red).

---

**What I've done today:**
- [x] Created unique IDs for two different DIVs.
- [x] Applied multiple classes (color and background) to a single element.
- [x] Learned how to use `#` and `.` as selectors in CSS.
- [x] Discovered how IDs can be used to link to specific parts of a page.
- [ ] Practice building a page where clicking a menu link jumps to a specific ID section.
