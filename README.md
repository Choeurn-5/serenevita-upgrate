# serenevita-upgrate

A modern, high-performance web experience for **Serene Vita Retreat** in Kep City, Cambodia. Built with Next.js 15 (App Router), React 19, TypeScript, and modern Vanilla CSS animations, seamlessly integrated with a headless Laravel backend and live Inn-Connect booking engine.

## 🌿 Highlights & Architecture

- **Next.js 15 & React 19**: Modern SSR/SSG App Router architecture for ultra-fast page speeds.
- **Bespoke Luxury Aesthetics**: Earthy tones, glassmorphic headers, smooth transitions, and responsive typography matching the original retreat brand identity.
- **Dynamic Content & Headless CMS**: Fully connected to the headless Laravel REST API (`/api/rooms`, `/api/settings`, `/api/dining`, `/api/wellness`, `/api/activities`, `/api/gallery`).
- **Graceful Fallbacks**: Includes static built-in fallbacks for zero downtime even during backend maintenance.
- **Inn-Connect Engine Integration**: Directly integrated with live booking flow on Inn-Connect (`https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat`).
- **Complete Suite Profiles**:
  - *Private Pool Suite Villa* (27 Amenities & Inclusions, $175.20 USD / night)
  - *Premier Mount View Room* (24 Amenities & Inclusions, $86.25 USD / night)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm or yarn or pnpm

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_API_URL=https://admin.serenevita.asia/laravel/api
NEXT_PUBLIC_SITE_URL=https://serenevita.asia
NEXT_PUBLIC_BOOKING_URL=https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
frontend/
├── public/               # Static assets & optimized image media
├── src/
│   ├── app/              # Next.js 15 App Router pages
│   │   ├── accommodation/
│   │   ├── activity/
│   │   ├── contact-us/
│   │   ├── dinning/
│   │   ├── gallery/
│   │   ├── wellness/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx      # Retreat Home Page
│   ├── components/       # Header, Footer, navigation & UI modules
│   └── lib/              # API clients, default data, and TypeScript types
```

---

## 🌐 Deployment
This project is ready to deploy on:
- **Vercel**: Simply import the repository and deploy.
- **Node.js VPS / cPanel Node.js Selector**: Run `npm run build && npm start`.
- **Static Export**: Can be exported via `next build` if configured for static hosting.

---
© Serene Vita Retreat. All rights reserved.
