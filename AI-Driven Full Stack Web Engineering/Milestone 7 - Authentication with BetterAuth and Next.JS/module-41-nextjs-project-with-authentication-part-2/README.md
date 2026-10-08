# 📰 Next.js News Portal with BetterAuth Authentication (Part 2)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.7-black?logo=auth0&logoColor=white)](https://better-auth.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.7-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)

The complete continuation of the online News Portal project, integrating production-ready authentication using **BetterAuth**, **MongoDB persistence**, **Google and GitHub OAuth**, **route protection middleware**, dynamic user state handling with **UserInfo**, and interactive UI components.

---

## 📌 Features

- **Full-Stack BetterAuth**: Credential-based Sign In (`/signin`) and Sign Up (`/signup`) backed by BetterAuth with native MongoDB persistence via `@better-auth/mongo-adapter`.
- **Social OAuth Providers**: Seamless one-click authentication configured with Google and GitHub OAuth credentials.
- **Route Protection Middleware**: Next.js proxy middleware (`proxy.ts`) verifying server sessions and redirecting unauthorized visitors from `/profile` and individual article routes (`/article/:path`) to `/signin`.
- **User State Navigation**: Integrated `UserInfo.tsx` navigation component rendering user details (avatar, name, email) and interactive sign-out action directly in the newspaper header.
- **User Profile Page**: Dynamic `/profile` page displaying authenticated user profile details.
- **Catch-All API Handler**: `api/auth/[...all]/route.ts` handling all incoming authentication requests effortlessly.
- **Breaking News Marquee**: Real-time breaking news scrolling ticker header powered by `react-marquee-text`.
- **Skeleton Fallbacks**: Polished streaming loading skeletons via `loading.tsx` for optimal perceived performance.
- **Toast Notifications**: Real-time feedback and status alerts powered by `react-toastify`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript (Strict) |
| **Authentication** | BetterAuth (`better-auth`, `@better-auth/mongo-adapter`) |
| **Database** | MongoDB (`mongodb` driver) |
| **UI Components** | DaisyUI v5 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Ticker & Alerts** | React Marquee Text (`react-marquee-text`), React Toastify (`react-toastify`) |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   │   └── page.tsx          # User Sign In interface
│   │   └── signup/
│   │       └── page.tsx          # User Sign Up interface
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts      # BetterAuth Next.js catch-all API handler
│   ├── article/
│   │   └── [articleId]/
│   │       ├── not-found.tsx     # Article 404 handler
│   │       └── page.tsx          # Dynamic article detail view
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx          # Category-filtered articles
│   ├── profile/
│   │   └── page.tsx              # Authenticated user profile view
│   ├── favicon.ico
│   ├── globals.css               # Tailwind CSS v4 directives
│   ├── layout.tsx                # Root layout with Header & Marquee ticker
│   ├── loading.tsx               # Instant skeleton loaders for content feeds
│   ├── not-found.tsx             # Global 404 handler
│   └── page.tsx                  # Home page layout
├── components/
│   ├── Header.tsx                # Newspaper portal header with UserInfo
│   ├── MainNews.tsx              # Primary headlines grid
│   ├── Marquee.tsx               # Breaking news horizontal scrolling ticker
│   ├── MostRead.tsx              # Trending / most-read sidebar feed
│   ├── NavLinks.tsx              # Category navigation tabs
│   ├── NewsCard.tsx              # Reusable article summary card
│   └── UserInfo.tsx              # Dynamic session-aware user profile & logout
├── lib/
│   ├── auth.ts                   # BetterAuth server config (MongoDB + Google + GitHub)
│   └── auth-client.ts            # BetterAuth React client (signIn, signUp, useSession)
└── proxy.ts                      # Route protection middleware for /profile & /article/:path
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- A running [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)
- Google and GitHub OAuth credentials (optional for social sign-in)

### 2. Environment Variables

Create a `.env` file in the root of the project:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_CLIENT_URL=mongodb://localhost:27017/module-41-Bangla-News-Portal

# OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### 3. Installation

```bash
npm install
```

### 4. Run Development Server

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
