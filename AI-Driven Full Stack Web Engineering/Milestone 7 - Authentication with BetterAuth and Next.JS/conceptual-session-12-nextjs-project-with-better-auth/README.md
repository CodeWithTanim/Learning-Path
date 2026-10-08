# 🛍️ Conceptual Session 12: Next.js Project with BetterAuth

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.7-black?logo=auth0&logoColor=white)](https://better-auth.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.7-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Resend](https://img.shields.io/badge/Resend-6.3-black?logo=resend&logoColor=white)](https://resend.com)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.2-000000)](https://heroui.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

A comprehensive full-stack conceptual e-commerce product showcase application built with **Next.js 16 (App Router)**, **React 19**, **BetterAuth**, native **MongoDB**, **Resend transactional emails**, **Google OAuth**, and modern UI styling powered by **HeroUI**, **DaisyUI**, and **Tailwind CSS v4**.

---

## 📌 Features

- **BetterAuth & MongoDB Integration**: Core server-side authentication setup using `betterAuth` with native MongoDB connectivity via `@better-auth/mongo-adapter`.
- **Email & Password Authentication**: Full Sign In (`/sign-in`) and Sign Up (`/sign-up`) workflows with secure credential hashing, validation, and session generation.
- **Mandatory Email Verification**: Automated HTML verification emails dispatched through the Resend API (`sendVerificationEmail`) with expiration control and auto-sign-in upon confirmation.
- **Transactional Password Reset Flow**: Complete password reset request (`/forget-password`) sending reset tokens via email, and token-based password updating (`/reset-password`, `PasswordForm.jsx`).
- **Google OAuth Provider**: Integrated one-click social authentication using Google OAuth 2.0 (`BETTER_AUTH_GOOGLE_CLIENT_ID`, `BETTER_AUTH_GOOGLE_CLIENT_SECRET`).
- **Route Protection Middleware**: Edge proxy middleware (`proxy.js`) verifying active user sessions and protecting routes like `/profile` and individual product views (`/product/:path`), redirecting unauthenticated visitors to `/sign-in`.
- **Product Catalog & Dynamic Routing**: Dynamic catalog feeds with slug-based routing (`/product/[slug]`), category navigation (`/category/[categorySlug]`), and external REST API integration (`baseUrl.js`).
- **Promotional Marquee & Dynamic Navbar**: Sticky header with session-aware sign-in/sign-out actions and category links (`Navbar.jsx`), paired with a top promotional announcement ticker powered by `react-marquee-text` (`Marquee.jsx`).
- **Modern UI Component System**: Clean, responsive layout leveraging HeroUI form controls (`Form`, `TextField`, `Input`, `Label`, `Button`), DaisyUI badges and cards, and Tailwind CSS v4 styling.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Authentication** | BetterAuth (`better-auth`, `@better-auth/mongo-adapter`) |
| **Database** | MongoDB (`mongodb` driver ^7.7.0) |
| **Email Delivery** | Resend (`resend` ^6.31.0) |
| **UI Components** | HeroUI (`@heroui/react`, `@heroui/styles`), DaisyUI (`daisyui` ^5.7.47) |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Ticker & Marquee** | React Marquee Text (`react-marquee-text` ^1.0.6) |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── page.jsx              # User Sign In interface
│   │   └── sign-up/
│   │       └── page.jsx              # User Registration interface
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js          # BetterAuth catch-all API handler
│   ├── category/
│   │   └── [categorySlug]/
│   │       └── page.jsx              # Category-filtered product grid
│   ├── forget-password/
│   │   └── page.jsx                  # Password reset request form
│   ├── product/
│   │   └── [slug]/
│   │       └── page.jsx              # Dynamic single product details (Protected)
│   ├── profile/
│   │   └── page.jsx                  # Protected user profile page
│   ├── reset-password/
│   │   └── page.jsx                  # Password reset token handler
│   ├── favicon.ico
│   ├── globals.css                   # Global styles, HeroUI & Tailwind CSS v4
│   ├── layout.js                     # Root layout with Marquee & Navbar
│   └── page.js                       # Home page with catalog showcase
├── components/
│   ├── AllProducts.jsx               # Product grid showcase component
│   ├── Marquee.jsx                   # Promotional announcement ticker
│   ├── Navbar.jsx                    # Sticky session-aware navigation bar
│   ├── PasswordForm.jsx              # Reset password input & submission form
│   └── ProductCard.jsx               # Reusable product card with pricing & badge
├── lib/
│   ├── auth.js                       # BetterAuth server config (MongoDB + Resend + Google)
│   └── auth-client.js                # BetterAuth React client (signIn, signUp, useSession)
├── services/
│   └── baseUrl.js                    # External backend API base URL
└── proxy.js                          # Route protection middleware (/profile, /product/:path)
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- A running [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)
- A [Resend](https://resend.com/) API key for email delivery
- Google OAuth credentials from the Google Cloud Console

### 2. Environment Variables

Create a `.env` file in the root of the project:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGODB_URI=mongodb://localhost:27017/better-auth-project

# Resend Email Service
RESEND_API_KEY=re_your_resend_api_key

# Google OAuth Credentials
BETTER_AUTH_GOOGLE_CLIENT_ID=your_google_client_id
BETTER_AUTH_GOOGLE_CLIENT_SECRET=your_google_client_secret
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
| `npm run dev` | Runs the Next.js development server |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

---

_Keep learning, keep coding!_ 💻🔥
