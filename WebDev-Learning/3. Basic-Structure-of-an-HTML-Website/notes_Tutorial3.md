# My Web Dev Journey: Class 3 Notes
## Understanding the Skeleton & A Cool Mobile Trick

I just finished the third lesson of the Sigma Web Development course! Today was all about the "why" behind that big block of code we call the HTML boilerplate. Here’s what I learned in my own words.

---

### 1. Decoding the Basic Structure
I used to wonder why we need so many tags just to say "Hello World." Now I get it. Every website has a specific hierarchy:

*   **`<!DOCTYPE html>`:** This tells the browser, "Hey, I’m using HTML5!"
*   **`<html>`:** The root of everything. I added the `lang="en"` attribute to tell the browser the page is in English.
*   **`<head>`:** This is like the "behind-the-scenes" area. It has the title, links to my CSS, and meta tags.
*   **`<body>`:** This is the actual stage. Everything I want users to see goes here.

---

### 2. Tags: Pairs vs. Self-Closing
I noticed there are two types of tags:
*   **Pair Tags:** Like `<html></html>` or `<p></p>`. They have a start and an end. Whatever is inside is the content.
*   **Self-Closing Tags:** Like `<meta>` or `<br>`. They don't need a closing tag because they don't "hold" content; they just provide information.

---

### 3. SEO & Metadata
I learned that the `<title>` tag isn't just for the tab at the top of the browser. It's actually huge for **SEO (Search Engine Optimization)**.
*   Google uses it to understand what my page is about.
*   The `<meta name="description">` tag is also super important because that’s the text people see under the link when they search on Google.

---

### 4. The "Sigma Rule" (Copy-Paste Thinking)
The teacher mentioned a "Sigma Rule" that I really liked: **Don't waste time typing things that never change.**
It’s perfectly fine to copy-paste the basic HTML boilerplate from sites like CodeWithHarry.com or use Emmet shortcuts. As a developer, I should spend my brainpower on the *unique* parts of my website, not the repetitive skeleton.

---

### 5. My Favorite Part: Previewing on My Phone!
I learned a really cool trick to see my website on my actual phone while I'm coding:
1.  I opened the terminal and typed `ipconfig` to find my **IPv4 Address** (e.g., `192.168.1.199`).
2.  I went into VS Code settings and changed the "Live Preview" host from `127.0.0.1` to my actual IP.
3.  I made sure my PC and Phone were on the same Wi-Fi (set to **Private**).
4.  Now, when I type that IP followed by the port (like `:5000`) into my phone's browser, I can see my site! This is so helpful for testing how things look on a small screen.

---

**What I've done today:**
- [x] Learned the meaning of every tag in the basic HTML structure.
- [x] Successfully previewed my website on my mobile phone.
- [x] Understood the importance of attributes and metadata.
- [ ] Practice modifying meta descriptions for better SEO.
