# Project Specs — B.E. Classics Website

## 1. What the app does and who uses it

A marketing website for **B.E. Classics**, a digital marketing agency that runs Google/Facebook ad campaigns exclusively for automotive repair shops.

**Users:** auto repair shop owners (prospective clients) browsing the site to learn about services, read the blog, and book a free Google Ads audit via an embedded Cal.com link. There are no logged-in users, no accounts, and no admin area — everyone who visits sees the same public content.

This migrates the existing static HTML/CSS/JS site (already built and content-complete) into the Next.js stack, preserving the current design and content 1:1. It is not a new product — it's a rebuild of what already exists at `index.html`, `services.html`, `blog.html`.

## 2. Tech stack

- **Framework:** Next.js (latest, App Router), TypeScript
- **Styling:** Tailwind CSS (replacing the current hand-written `css/styles.css`; same visual design, ported to Tailwind utility classes + a small amount of custom CSS for the marquee/animations that don't map cleanly to utilities)
- **Hosting:** Vercel
- **Backend-as-a-Service:** **Not used.** See note below — flagging this rather than adding it silently, per "build exactly what's needed, nothing more."

> **Supabase note:** the CLAUDE.md tech stack section lists Supabase (Auth, Postgres, Storage, RLS) as standard. This site has no user accounts, no forms that persist data, and no content that needs a database — every page is static marketing copy. Adding Supabase here would mean wiring up auth/RLS/tables for nothing to actually use. **I'm leaving it out of this spec.** If you want a contact form that stores leads, or want blog posts to live in a database instead of code, tell me and I'll add a `posts` table + the relevant API route — that's the only scenario where Supabase would do real work here.

## 3. Pages and user flows

All pages are public, no authentication anywhere.

| Route | Purpose |
|---|---|
| `/` | Home — hero, services overview, differentiators, partner shop showcase (with real client logos), CTA, footer |
| `/services` | Full breakdown of the 4 services + 4-step process, CTA |
| `/blog` | Featured post + grid of post cards (static placeholder content, no CMS) |

Shared across all pages: nav (with mobile hamburger menu), floating "Free Google Audit" tab, footer with contact/social links. All "Book a Free Google Audit" buttons link out to `https://cal.com/baden-ewen-apjluu/30min`.

No forms submit anywhere on the current site (the Cal.com booking and `mailto:` link are both external), so there's no API route needed for the MVP port.

## 4. Data models and where data is stored

None. All content (service descriptions, partner shop info, blog post placeholders) is hardcoded in the page/component files, same as the current static site. No database, no `/lib/supabase` needed.

## 5. Third-party services

- **Cal.com** — external booking link, no integration code needed beyond the `<a href>` links
- **Google Fonts** — Inter, loaded via `next/font/google` (replacing the current `<link>` tag)
- **Client logo images** — `assets/partners/*.png` (Shift Masters Transmissions, HM Auto Repair and Body, Foreign Motor Service), moved into `/public`
- **Social links** — Instagram, TikTok (generic icon, not their trademarked logo — see earlier decision in this project), YouTube — plain external links, no API

## 6. File structure (per your CLAUDE.md conventions, adapted — no admin/candidate routes apply here)

```
/app
  /layout.tsx        — shared <html>/<body>, fonts, nav, footer
  /page.tsx          — Home
  /services/page.tsx
  /blog/page.tsx     — post list (reads from /content/blog)
  /blog/[slug]/page.tsx — single article page
/components
  Nav.tsx, Footer.tsx, ServiceCard.tsx, TestimonialCard.tsx, BlogCard.tsx, SocialIcons.tsx, Marquee.tsx, Reveal.tsx
/lib
  content.ts          — static content (services, partners) as typed data
  posts.ts            — reads/parses Markdown files from /content/blog
/content/blog
  *.md                — one file per blog post (see Content Authoring below)
/public
  logo.png, favicon, partner logos
```

No `/app/api`, no `/app/(admin)`, no `/lib/supabase` — none of that applies to a static marketing site with no data layer.

## 6a. Content Authoring — how to publish a blog post

Add a new file to `content/blog/`, named after the post (e.g. `my-first-post.md`). The filename becomes the URL: `content/blog/my-first-post.md` → `yoursite.com/blog/my-first-post`.

Template:

```markdown
---
title: Your Post Title
date: 2026-09-20
tag: Strategy
excerpt: One or two sentences shown on the blog list card.
cover: /blog/my-first-post-cover.jpg
---

Write the article here using normal Markdown: **bold**, *italic*,

## Subheadings

- bullet
- points

work as you'd expect.
```

- `title`, `date`, `excerpt` are required. `tag` and `cover` are optional (`cover` is an image path under `/public`; if left out, a plain colored background is used).
- Read time is calculated automatically from word count — no need to set it.
- The most recent post (by `date`) is automatically shown as the featured post at the top of `/blog`; everything else appears in the grid below.
- Delete a `.md` file to unpublish. That's the whole workflow — no login, no database, no admin panel.

## 7. What "done" looks like for this task

- `npm install` works cleanly
- `npm run dev` serves all 3 pages at `localhost:3000` with no console errors
- `npm run build` succeeds with no TypeScript/build errors
- Visual design, copy, images, and links match the current static site (mobile hamburger menu, marquee, testimonial logos, CTA buttons all working)
- Blog list shows real posts from `content/blog/`, each opens its own article page; shows a clean "no posts yet" message when the folder is empty
- Deployed to Vercel with a live URL

## 8. Deployment

You confirmed you want this on Vercel. Plan: once the Next.js app is built and approved locally, I'll walk you through connecting the project to Vercel (either via the Vercel CLI or by pushing to a GitHub repo and importing it in the Vercel dashboard — GitHub import is simpler for ongoing deploys since every push auto-deploys). Note: `npx plugins add vercel/vercel-plugin` isn't a real package I can run — there's no npm package by that name. The actual way to deploy is either the `vercel` CLI (`npm i -g vercel`, then `vercel`) or the Vercel + GitHub integration. I'll set this up once the app itself exists.

---

**Waiting on your approval before writing any code**, per Rule 2. If this looks right, say go — if you want Supabase included anyway, or want anything else changed (e.g., keep the CSS hand-written instead of porting to Tailwind), tell me and I'll update this doc first.
