# Velora Tech Labs — Website

Official website for Velora Tech Labs LTD — Rwanda-based technology company.

---

## Setup

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

---

## Page Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About |
| `/what-we-do` | What We Do |
| `/projects` | Projects listing |
| `/projects/[slug]` | Individual project case study |
| `/industries-partnerships` | Industries & Partnerships |
| `/news` | News listing |
| `/news/[slug]` | Individual news article |
| `/contact` | Contact |

---

## Design Tokens

All design tokens (colors, typography, spacing, border radius) live in `tailwind.config.ts` under `theme.extend`.

**Do not change any token values without first checking the approved design spec.** The current values are placeholders — refer to `/docs/design-spec.md` and the Figma file before updating anything.

---

## Folder Structure

```
app/               # Next.js App Router pages
components/        # Shared UI components
content/
  projects/        # Future project case study content (markdown/JSON)
  news/            # Future news article content (markdown/JSON)
lib/               # Future data-fetching utilities (CMS, etc.)
public/
  images/          # Static image assets
docs/
  design-spec.md   # Design specification (to be filled in)
```
