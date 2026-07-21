# EL VERSE ECOSYSTEM - Premier Tech Universe in West Africa

Welcome to the official repository of **EL VERSE ECOSYSTEM**. This portal acts as a "skills-to-income" pipeline that connects tech learning with real earning.

This React + Vite application is built using Tailwind CSS, TypeScript, and Framer Motion. It is optimized to perform seamlessly on any screen size and is built to convert visitors and leads into active ecosystem participants.

## Key Search & SEO Optimization (Google Rankings)

To maximize Google Search discovery and visibility, we've integrated several advanced SEO enhancements:

### 1. Dedicated FAQ Section with Schema.org JSON-LD Markup
The application hosts a beautifully designed, highly interactive, and completely responsive **Frequently Asked Questions (FAQ)** section answering critical queries about the ecosystem:
- **What is the EL VERSE ECOSYSTEM?**
- **What are the five arms of EL VERSE and how do they work together?** (Presented via a clean desktop table and dynamic mobile grid layout)
- **What makes EL VERSE ECOSYSTEM different from other platforms?**

Within `src/components/FAQ.tsx`, valid **Schema.org JSON-LD structured data (`FAQPage`)** is programmatically injected directly into the document `<head>`. This guarantees that Google crawlers will parse and display rich, eye-catching question-answer snippets in organic search rankings.

### 2. Comprehensive Sitemap Coverage
Our `public/sitemap.xml` file has been updated to explicitly target our sub-sections (`#services`, `#about`, `#faq`, and `#contact`) with appropriate priority ratings and update frequencies. This helps crawl bots index specific content segments easily.

---

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d65df920-0efd-40ee-9ab0-3b66599afceb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

---

## What technologies are used for this project?

This project is built with:

- **Vite** & **TypeScript**
- **React** with **Framer Motion** for sleek transitions and high-performance loading state experiences
- **shadcn-ui** & **Tailwind CSS**
