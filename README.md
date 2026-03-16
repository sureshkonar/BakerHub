# BakerHub

A bakery website for my sister to streamline orders and daily operations. Built as a modern bakery website and business dashboard for a home baker in Tirunelveli using Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Product browsing with modern cards and filtering
- UPI-based order flow with payment screenshot upload (demo mode)
- Gallery with masonry layout
- Owner dashboard with stats, orders, products, gallery, AI helper, analytics

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GitHub Pages (Hosting)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

## Deployment (GitHub Pages)

This project is configured for static export.

```bash
npm run build
```

Then deploy the `out/` folder to GitHub Pages (recommended via GitHub Actions or manual upload). The `basePath` is set to `/BakerHub` in production.

## Notes

Orders are demo-only on GitHub Pages. Connect a backend later if you want to store orders and payment screenshots.
