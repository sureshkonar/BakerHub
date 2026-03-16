# BakerHub

A bakery website for my sister to streamline orders and daily operations. Built as a modern bakery website and business dashboard for a home baker in Tirunelveli using Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Supabase (free tier).

## Features

- Product browsing with modern cards and filtering
- UPI-based order flow with payment screenshot upload
- Gallery with masonry layout
- Owner-only dashboard with stats, orders, products, gallery, AI helper, analytics
- Supabase-backed database, auth, and storage

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Supabase (Database, Auth, Storage)
- Vercel (Hosting)

## Getting Started

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the dev server:

```bash
npm run dev
```

## Supabase Setup

Create the following tables:

### products
- id (uuid, pk)
- name (text)
- price (numeric)
- category (text)
- description (text)
- image (text)
- available_today (boolean)
- created_at (timestamp)

### orders
- id (uuid, pk)
- customer_name (text)
- phone (text)
- product_id (uuid)
- quantity (int)
- pickup_date (date)
- payment_screenshot (text)
- status (text)
- created_at (timestamp)

### gallery
- id (uuid, pk)
- image (text)
- caption (text)
- created_at (timestamp)

### customers
- id (uuid, pk)
- name (text)
- phone (text)
- order_count (int)

Storage buckets:
- `payments` for payment screenshots
- `gallery` for gallery uploads
- `products` for product images

## Deployment

- Push to GitHub
- Import the repo into Vercel
- Add `.env.local` values in Vercel environment variables
- Deploy

## Notes

This project uses a free AI placeholder in the dashboard AI Helper so it can be wired to Ollama, OpenRouter free models, or a local LLM later.
