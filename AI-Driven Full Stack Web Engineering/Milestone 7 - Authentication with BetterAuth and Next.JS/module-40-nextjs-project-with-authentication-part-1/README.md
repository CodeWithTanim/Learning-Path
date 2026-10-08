# 📰 Next.js News Portal (Part 1)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)

A high-performance online News Portal application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4** with **DaisyUI v5**, integrating live REST API endpoints to deliver dynamic breaking news tickers, editorial layouts, category navigation, and rich article rendering.

---

## 📌 Features

- **Live Breaking News Marquee**: Real-time breaking news ticker header powered by `react-marquee-text` (`Marquee.tsx`).
- **REST API Integration**: Dynamic server-side data fetching directly from external news endpoints (`https://news-api-v2.vercel.app/api/news/...`).
- **Editorial Newspaper Layout**:
  - `Header.tsx`: Responsive navigation header with branding, date display, and portal navigation.
  - `NavLinks.tsx`: Category links for quick topic navigation.
  - `MainNews.tsx`: Hero news grid highlighting lead stories and major headlines.
  - `NewsCard.tsx`: Reusable, responsive article preview cards with thumbnail, category badge, and published timestamps.
  - `MostRead.tsx`: Sidebar featuring trending and most-read articles.
- **Dynamic Article Detail View**: `/article/[articleId]` rendering deep article bodies with support for multi-block payloads (rich text, full-width images, image captions, subheadings, tags, bylines, and Bengali locale date formatting `bn-BD`).
- **Category Routing**: `/category/[categoryId]` displaying category-filtered news feeds.
- **Custom Error Handling**: Styled custom `not-found.tsx` fallback page for missing or invalid article routes.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript (Strict) |
| **Styling** | Tailwind CSS v4, PostCSS |
| **UI Components** | DaisyUI v5 |
| **Animation / Ticker** | React Marquee Text (`react-marquee-text`) |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── article/
│   │   └── [articleId]/
│   │       ├── not-found.tsx     # Article-specific 404 handler
│   │       └── page.tsx          # Dynamic article detail view with rich body blocks
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx          # Category-filtered news feed
│   ├── favicon.ico
│   ├── globals.css               # Tailwind CSS v4 directives
│   ├── layout.tsx                # Root layout with Header & Marquee ticker
│   ├── not-found.tsx             # Global 404 handler
│   └── page.tsx                  # Newspaper home page (Sections & Sidebar)
└── components/
    ├── Header.tsx                # Newspaper portal header & logo
    ├── MainNews.tsx              # Featured primary headlines grid
    ├── Marquee.tsx               # Breaking news horizontal scrolling marquee
    ├── MostRead.tsx              # Trending / most-read sidebar feed
    ├── NavLinks.tsx              # Category navigation tabs
    └── NewsCard.tsx              # Reusable article summary card
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- `npm`, `yarn`, or `pnpm`

### 2. Installation

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Builds the production bundle |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint checks |

---

_Keep learning, keep coding!_ 💻🔥
