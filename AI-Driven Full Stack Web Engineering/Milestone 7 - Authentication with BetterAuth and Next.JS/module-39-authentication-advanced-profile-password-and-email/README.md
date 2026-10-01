# 🛡️ Advanced Next.js Authentication: Profile, Password & Email Verification

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.7-black?logo=auth0&logoColor=white)](https://better-auth.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.6-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Resend](https://img.shields.io/badge/Resend-6.3-black?logo=resend&logoColor=white)](https://resend.com)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.2-000000)](https://heroui.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

An advanced full-stack authentication implementation in **Next.js 16 (App Router)** extending BetterAuth with email verification, transactional password reset workflows via **Resend**, social OAuth providers, profile management, and route protection middleware.

---

## 📌 Features

- **Mandatory Email Verification**: Automatically sends verification emails on sign-up with 1-hour expiration and auto-sign-in upon verification.
- **Transactional Password Reset**: End-to-end forgot/reset password workflows with custom HTML transactional emails powered by Resend.
- **Social OAuth Providers**: Multi-provider authentication configuration for Google, GitHub, and Discord.
- **Route Protection Middleware**: Custom server-side proxy middleware (`proxy.js`) protecting `/dashboard` and `/profile` routes by verifying active sessions with BetterAuth.
- **Profile Management**: Interactive profile settings page with live client-side user updates (`updateUser`) and HeroUI form controls.
- **Toast Notifications**: Integrated feedback via `react-toastify` on password reset requests and form submissions.
- **MongoDB Persistence**: Seamless database integration with `@better-auth/mongo-adapter` with native client transactions enabled.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Authentication** | BetterAuth (`better-auth`, `@better-auth/mongo-adapter`) |
| **Email Delivery** | Resend (`resend`) |
| **Database** | MongoDB (`mongodb` native driver) |
| **UI Components** | HeroUI (`@heroui/react`, `@heroui/styles`) |
| **Notifications** | React Toastify (`react-toastify`) |
| **Icons** | Gravity UI Icons (`@gravity-ui/icons`) |
| **Styling** | Tailwind CSS v4, PostCSS |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── dashboard/
│   │   │   └── page.jsx                  # Protected dashboard page
│   │   ├── forgot-password/
│   │   │   └── page.jsx                  # Password reset request form
│   │   ├── profile/
│   │   │   └── page.jsx                  # User profile settings (name update)
│   │   ├── reset-password/
│   │   │   ├── page.jsx                  # Reset password container (Suspense)
│   │   └── reset-password-form.jsx       # Token-based new password submission
│   │   ├── sign-in/
│   │   │   └── page.jsx                  # Sign In form with validation
│   │   └── sign-up/
│   │       └── page.jsx                  # Sign Up form with validation
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js              # Catch-all BetterAuth route handler
│   ├── components/
│   │   └── Navbar.jsx                    # Session-aware dynamic navigation bar
│   ├── globals.css                       # Global styles & Tailwind CSS v4 config
│   ├── layout.js                         # Root layout with ToastContainer & Navbar
│   └── page.js                           # Home page
├── lib/
│   ├── auth.js                           # BetterAuth server config with Resend & OAuth
│   └── auth-client.js                    # BetterAuth React client methods & hooks
└── proxy.js                              # Route protection middleware for protected paths
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or higher
- A running [MongoDB](https://www.mongodb.com/) instance
- A [Resend](https://resend.com/) API key for email delivery

### 2. Environment Variables

Create a `.env` file in the root of the project:

```env
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DB_URL=mongodb://localhost:27017/better-auth-db

# Resend Email Service
RESEND_API_KEY=re_your_resend_api_key

# Social OAuth Credentials
BETTER_AUTH_GOOGLE_CLIENT_ID=your_google_client_id
BETTER_AUTH_GOOGLE_SECRET=your_google_client_secret

BETTER_AUTH_GITHUB_CLIENT_ID=your_github_client_id
BETTER_AUTH_GITHUB_SECRET=your_github_client_secret

BETTER_AUTH_DISCORD_CLIENT_ID=your_discord_client_id
BETTER_AUTH_DISCORD_SECRET=your_discord_client_secret
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
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

---

_Keep learning, keep coding!_ 💻🔥
