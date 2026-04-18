# My Web Dev Journey: Class 6 Notes
## SEO, Core Web Vitals, and the "Hidden" Chrome Tool

Today I learned that building a website isn't just about making it look good—it's about making Google like it! I found out that Google is actually very picky about how fast and stable a website is. Here’s what I learned today.

---

### 1. What is SEO?
I learned that **SEO** stands for Search Engine Optimization. It’s basically the art of making my website show up at the top of Google searches. Google prefers websites that are:
*   Fast.
*   Relevant (the title matches the content).
*   Easy to use on mobile.

---

### 2. The Big Three: Core Web Vitals
This was new to me! Google uses three main metrics to grade a website's "health":
*   **CLS (Cumulative Layout Shift):** Have you ever tried to click a button, but it moved because an image loaded above it? That’s high CLS, and it’s annoying! 
    *   *My Fix:* I learned I should always set `width` and `height` on images so the browser leaves space for them before they load.
*   **LCP (Largest Contentful Paint):** This is how long it takes for the biggest part of the page (like a hero image) to load. It should be under **2.5 seconds**.
*   **FID (First Input Delay):** This is how long the browser takes to react when I click a button. It should be faster than **100 milliseconds**.

---

### 3. Lighthouse: My New Favorite Tool
I discovered a hidden tool inside Chrome DevTools called **Lighthouse**. 
*   I can right-click my page, go to **Inspect > Lighthouse**, and click "Analyze page load."
*   It gives me a report card on Performance, Accessibility, Best Practices, and SEO. 
*   It even tells me exactly what I need to change (like "size your images properly") to make my site faster.

---

### 4. Meta Tags & Titles
I learned that the tags inside the `<head>` section are the keys to SEO:
*   **`<title>`**: This is exactly what people see in Google search results. It must be honest and descriptive.
*   **`<meta name="description">`**: This is the little summary people see under the link.
*   **Meta Keywords:** I learned these are **deprecated**. Google doesn't really care about them anymore because people abused them. Nowadays, Google's AI just reads my content to figure out what my page is about.

---

### 5. Mobile Testing without a Mobile
I found a cool trick in DevTools! If I click the little "Device Toggle" icon, I can see exactly how my website looks on an iPhone 12 Pro, an iPad, or a Surface Pro. My website *must* look good on all of them to be successful.

---

**What I've done today:**
- [x] Learned about CLS, LCP, and FID.
- [x] Generated a Lighthouse report for my site.
- [x] Optimized my `index.html` with better title and meta description tags.
- [x] Tested my site in "Responsive View" for different mobile devices.
- [ ] Try to reach a 100/100 score in Lighthouse for my next project!
