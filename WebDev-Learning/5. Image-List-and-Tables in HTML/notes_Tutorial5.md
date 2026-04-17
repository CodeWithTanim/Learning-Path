# My Web Dev Journey: Class 5 Notes
## Dealing with Images, Tables, and Lists

I just finished the 5th lesson! Things are getting a bit more complex, especially with tables, but I'm starting to see how professional websites organize their data. Here’s what I learned today.

---

### 1. Adding Images (More than just a picture)
I learned that adding an image isn't just about the `<img>` tag and the `src`.
*   **The `alt` Attribute:** This is super important. If the image fails to load or if a visually impaired person is using a screen reader, the `alt` text describes the image. It’s also great for SEO!
*   **Dimensions:** I can set `width` and `height` directly in the tag. I found out that if I only set one, the other adjusts automatically to keep the picture from looking stretched.
*   **Pro Tip:** Always set these dimensions! It helps the browser "reserve" space while the page is loading, which makes the site feel smoother (the teacher mentioned **Core Web Vitals**).

---

### 2. HTML Tables (Merging and Grouping)
Tables seemed a bit scary at first with all the `<tr>`, `<th>`, and `<td>` tags, but I broke it down:
*   **`<caption>`**: Like a title for the table.
*   **Merging Cells:** This was the coolest part. I used `colspan` to merge cells horizontally and `rowspan` to merge them vertically. It’s exactly like "Merge Cells" in Excel!
*   **Semantic Grouping:** I learned to wrap my rows in `<thead>`, `<tbody>`, and `<tfoot>`. It doesn't change the look immediately, but it helps me target specific parts with CSS later.

---

### 3. Organized Lists
I learned that there are three types of lists, but two are used most of the time:
*   **`<ul>` (Unordered):** Bullet points. I can change them to squares or circles using the `type` attribute.
*   **`<ol>` (Ordered):** Numbered lists (1, 2, 3). I can change these to letters (`A`, `a`) or Roman numerals (`I`, `i`).
*   **`<dl>` (Definition List):** I found out this is less common but good to know for interviews. It uses `<dt>` for the term and `<dd>` for the definition.

---

### 4. Coding on the Go?
The teacher gave a shoutout to **Replit.com**. He said that if I don't have a powerful computer or if I'm away from my desk, I can use the Replit mobile app to keep practicing. That's a great tip for staying consistent!

---

**What I've done today:**
- [x] Successfully added and resized a train image.
- [x] Built a complex employee table using `colspan` and `rowspan`.
- [x] Experimented with different list types and styles.
- [x] Linked my HTML to a `style.css` file to add a border to my table cells.
- [ ] Try creating a recipe page using all three concepts!
