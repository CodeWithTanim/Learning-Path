# My Web Dev Journey: Class 10 Notes
## Video, Audio, and the Power of iFrames

Today was all about rich media! I learned how to put more than just text and images on my site. Adding videos and audios makes the web feel alive. Here’s what I learned.

---

### 1. The Video Tag (Lights, Camera, Action!)
Adding a video is straightforward, but the **attributes** make it powerful:
*   **`controls`**: Without this, the user can't play or pause the video. It’s a must!
*   **`autoplay` & `muted`**: I learned that most browsers won't autoplay a video unless it's **muted**. This is because browsers want to save users from loud, unexpected noises.
*   **`loop`**: Perfect for background videos that should keep playing.
*   **`poster`**: This is like a YouTube thumbnail. It shows an image while the video is downloading or before the user hits play.
*   **Dimensions**: I can use `width` and `height` to control the size, just like with images.

---

### 2. Audio and the "Preload" Mystery
Audio works a lot like video but with some technical nuances:
*   **`preload`**: This was the most interesting part.
    *   `none`: Don't download anything until the user clicks play.
    *   `metadata`: Just download the duration and info.
    *   `auto`: Download the whole file in the background so it plays instantly.
*   **Quick Quiz Tip:** I used `sachin.mp3` and `audio.mp3` for my tests. It’s funny how a small sound file can change the whole vibe of a page.

---

### 3. SVG: High-Quality Graphics
I learned about **SVG (Scalable Vector Graphics)**. 
*   **The Problem:** Sometimes my SVG wouldn't show up in the browser. 
*   **The Fix:** I learned about the **Namespace Declaration** (`xmlns="http://www.w3.org/2000/svg"`). Including this makes sure the browser understands exactly what to do with the vector code.

---

### 4. iFrames: A Website Inside a Website
iFrames are like a window into another world.
*   **Embedding Sites:** I successfully embedded Wikipedia into my own page!
*   **YouTube Embeds:** This is the pro way to share videos. Instead of hosting huge video files myself, I can just use YouTube's "Embed" feature. It even lets me choose a **start time** so the video begins at the exact second I want.

---

### 5. Quick Quiz: Media Categories
I’m working on a website that categorizes different types of videos and audios. 
*   **Category 1:** Educational (YouTube embeds).
*   **Category 2:** Fun (Local video/audio files).
*   **Category 3:** External sites (iFrames).

---

**What I've done today:**
- [x] Experimented with all video attributes (autoplay, muted, poster).
- [x] Learned how to use the `preload` attribute for better audio performance.
- [x] Integrated an inline SVG and fixed the namespace issue.
- [x] Embedded a YouTube video starting at a specific timestamp.
- [ ] Practice putting multiple iframes into a grid layout.
