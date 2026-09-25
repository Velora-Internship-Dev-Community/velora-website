# Velora typography

Two fonts, one rule: **headings use Bricolage Grotesque, everything else uses Inter.**

## The fonts

| Role | Font | Tailwind class | Where it is set |
| --- | --- | --- | --- |
| Body, UI, labels, captions | Inter (400, 500, 600, 700) | `font-sans` (default on `<body>`) | `app/layout.tsx` via `next/font/google`, exposed as `--font-inter` |
| Headings, titles, buttons, key numbers | Bricolage Grotesque (400–800) | `font-heading` | `<link>` in `app/layout.tsx`, exposed as `--font-bricolage` in `app/globals.css` |

Both are mapped in `tailwind.config.ts`:

```ts
fontFamily: {
  sans: ["var(--font-inter)", "sans-serif"],
  heading: ["var(--font-bricolage)", "sans-serif"],
}
```

Inter is self-hosted by Next.js (no external request at runtime). Bricolage Grotesque
is not yet available in `next/font/google` on Next.js 14.2.31, so it loads from Google
Fonts with `display=swap` (text shows in the fallback font first, then swaps).

## How to use it

- Body text needs nothing: `<body>` already has `font-sans`.
- For a heading, add `font-heading`:

  ```tsx
  <h2 className="font-heading text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
    Section title
  </h2>
  ```

- Do not use inline `font-family` or import another font.

## Common heading recipe

`font-heading` + weight + `tracking-tight` + a responsive size + `text-slate-900`.

| Use | Classes |
| --- | --- |
| Page hero (h1) | `text-4xl sm:text-5xl md:text-6xl`, `leading-[1.2]`, `font-normal` (home hero uses `font-extrabold`, `text-[2rem] sm:text-6xl` on phones) |
| Section title (h2) | `text-3xl sm:text-4xl`, `font-normal` |
| Sub-section / article section | `text-2xl sm:text-3xl`, `font-normal` |
| Card title (h3) | `text-xl` or `text-lg`, `font-normal` |
| Buttons | `font-heading font-semibold` (see `components/Button.tsx`) |

## Body sizes

| Use | Class |
| --- | --- |
| Lead paragraph | `text-lg` / `text-xl`, `text-slate-600` or `text-slate-700` |
| Normal body | `text-base`, `text-slate-600` |
| Card text, descriptions | `text-sm`, `text-slate-600`, `leading-relaxed` |
| Meta (dates, authors, labels) | `text-xs` / `text-sm`, `text-slate-500` |

## Colours

- Headings: `text-slate-900` (or `text-white` on dark or image backgrounds).
- Body: `text-slate-600`; secondary text: `text-slate-500`.
- Links and accents: `text-brand-blue` (`#366FE5`).

## Good to know

- Headings are mostly `font-normal` (light and clean); use `font-bold` or `font-extrabold` only for emphasis, such as the home hero.
- Keep line length readable: article body is capped at `max-w-3xl`.
- Text on images or gradients needs a scrim or sits on a white area, so contrast never depends on the image (see `components/ValueCard.tsx`).
- Sizes are responsive with Tailwind breakpoints (`sm:` 640px, `md:` 768px, `lg:` 1024px), mobile first.
