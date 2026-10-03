# ⚡ Conceptual Session 11: BetterAuth Introduction with Next.js

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.7-black?logo=auth0&logoColor=white)](https://better-auth.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.7-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Resend](https://img.shields.io/badge/Resend-6.3-black?logo=resend&logoColor=white)](https://resend.com)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.2-000000)](https://heroui.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

A conceptual project exploring foundational and advanced authentication patterns in **Next.js 16 (App Router)** using **BetterAuth**, **MongoDB**, **Resend email verification**, **Google OAuth**, and **route protection middleware**.

---

## 📌 Features

- **BetterAuth Architecture**: Core server-side configuration using `betterAuth` integrated with native MongoDB persistence via `@better-auth/mongo-adapter`.
- **Mandatory Email Verification**: Automatically triggers HTML email verification links upon user registration with expiration control (3 minutes) and auto-sign-in on confirmation.
- **Google OAuth Provider**: Pre-configured social authentication provider with Google OAuth 2.0.
- **Route Protection Middleware**: Edge proxy middleware (`proxy.js`) inspecting active session cookies and redirecting unauthorized visitors from `/profile` and `/dashboard` to `/sign-in`.
- **Reactive Session Consumer**: Custom `/profile` route and navigation bar actively reading real-time authentication state with the `useSession` hook.
- **Dynamic Catch-All Route**: Automatic Next.js request handling through `api/auth/[...all]/route.js`.
- **Modern UI Components**: Sleek, responsive layout using HeroUI and Tailwind CSS v4.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Authentication** | BetterAuth (`better-auth`, `@better-auth/mongo-adapter`) |
| **Email Delivery** | Resend (`resend`) |
| **Database** | MongoDB (`mongodb` driver) |
| **UI Components** | HeroUI (`@heroui/react`, `@heroui/styles`) |
| **Styling** | Tailwind CSS v4, PostCSS |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── page.jsx          # User Sign In interface
│   │   └── sign-up/
│   │       └── page.jsx          # User Registration interface
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js      # BetterAuth catch-all API handler
│   ├── profile/
│   │   └── page.jsx              # Protected user profile page (useSession)
│   ├── favicon.ico
│   ├── globals.css               # Global styles & Tailwind CSS v4 config
│   ├── layout.js                 # Root layout with Geist font & Navbar
│   └── page.js                   # Landing page
├── components/
│   └── Navbar.jsx                # Session-aware dynamic navigation bar
├── lib/
│   ├── auth.js                   # BetterAuth server config (MongoDB + Resend + Google)
│   └── auth-client.js            # BetterAuth React client (signIn, signUp, useSession)
└── proxy.js                      # Route protection middleware for /profile & /dashboard
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- A running [MongoDB](https://www.mongodb.com/) instance
- A [Resend](https://resend.com/) API key for email delivery
- Google OAuth credentials from Google Cloud Console

### 2. Environment Variables

Create a `.env` file in the root of the project:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGODB_URI=mongodb://localhost:27017/better-auth-conceptual-11

# Resend Email Service
RESEND_API_KEY=re_your_resend_api_key

# Google OAuth Credentials
GOOGLE_AUTH_CLIENT_ID=your_google_client_id
GOOGLE_AUTH_CLIENT_SECRET=your_google_client_secret
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
| `npm run dev` | Runs the development server |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

---

_Keep learning, keep coding!_ 💻🔥
