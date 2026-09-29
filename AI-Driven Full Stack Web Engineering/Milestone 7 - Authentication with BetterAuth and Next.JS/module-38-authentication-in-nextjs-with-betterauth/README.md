# 🔐 Next.js Authentication with BetterAuth & MongoDB

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.7-black?logo=auth0&logoColor=white)](https://better-auth.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.6-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.2-000000)](https://heroui.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

A modern full-stack authentication implementation in **Next.js 16 (App Router)** utilizing **BetterAuth** with a native **MongoDB** adapter, and modern UI components powered by **HeroUI** and **Tailwind CSS v4**.

---

## 📌 Features

- **BetterAuth Engine**: Production-ready email and password authentication powered by `better-auth`.
- **MongoDB Persistence**: Seamless database integration with `@better-auth/mongo-adapter` and native `MongoClient`.
- **Catch-All API Route**: Single handler (`/api/auth/[...all]`) managing all auth endpoints automatically.
- **Client-Side Auth Client**: React hooks and methods (`signIn`, `signUp`, `signOut`, `useSession`) for effortless state management.
- **Interactive Forms**: Responsive Sign In and Sign Up forms built with HeroUI (`Form`, `TextField`, `InputGroup`, `Button`, `Spinner`).
- **Comprehensive Validation**: Client-side validation enforcing email patterns, minimum length, uppercase characters, and numeric digits.
- **Password Visibility Toggle**: Interactive show/hide password toggle powered by Gravity UI icons.
- **Session-Aware Navigation**: Dynamic navigation bar displaying authenticated user details, loading indicators, and logout actions.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Authentication** | BetterAuth (`better-auth`, `@better-auth/mongo-adapter`) |
| **Database** | MongoDB (`mongodb` driver) |
| **UI Components** | HeroUI (`@heroui/react`, `@heroui/styles`) |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Icons** | Gravity UI Icons (`@gravity-ui/icons`) |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── page.jsx          # Sign In form with validation & visibility toggle
│   │   └── sign-up/
│   │       └── page.jsx          # Sign Up form with validation
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js      # BetterAuth Next.js catch-all route handler
│   ├── components/
│   │   └── Navbar.jsx            # Dynamic navigation bar with useSession
│   ├── globals.css               # Global styles & Tailwind CSS v4 directives
│   ├── layout.js                 # Root layout with Geist font & Navbar
│   └── page.js                   # Landing page
└── lib/
    ├── auth.js                   # BetterAuth server config with MongoDB adapter
    └── auth-client.js            # Client-side BetterAuth React client
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- A running [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)

### 2. Environment Variables

Create a `.env` file in the root of the project:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DB_URL=mongodb://localhost:27017/better-auth-db
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
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks |

---

_Keep learning, keep coding!_ 💻🔥
