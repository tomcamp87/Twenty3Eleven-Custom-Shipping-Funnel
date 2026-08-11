# Asylum Wellness Collective, Website (Design v3)

Static, GitHub-ready reference build for the one-site hub on **asylumwiv.com**. Designed to be reviewed live, then rebuilt in Elementor. No build step, no dependencies. Open `index.html` in a browser, or push the `site/` folder to GitHub Pages.

## What changed in v3 (redesign)

A full visual redesign that "punches up" the brand to match the dark, premium, athletic reference the client liked, plus the supplementation feel of ways2well and the luxury polish of Aventura.

- **New palette and feel:** near-black blue base with an electric blue to cyan accent (was ember orange), glassmorphic cards, aurora glows, large uppercase Saira display type, scroll-reveal animations, animated stat counters, and a sticky blurred nav. The brand mark is recreated in CSS as a stylized tree-heart that echoes the clinic's neon sign.
- **Video header on every page:** each hero uses a full-bleed looping `<video>` behind a dark gradient overlay, exactly as requested. A subtle placeholder (`assets/video/header.mp4`) ships so headers work immediately. Replace it with the client's "Asylum Idea.mp4" (see `assets/video/README.txt`).
- **Real photography wired in:** curated and web-optimized from the four shoot folders (Evergreen, Clinic Shots, Product Shots, B-Roll Clinic/Lifting). Includes IV lounge, blood draws, the vials lineup, coaching/gym shots, and the neon tree-heart brand sign. All in `assets/img/`.
- **Stronger SEO:** per-page titles and meta descriptions, canonical tags, Open Graph and Twitter cards, theme-color, descriptive alt text, lazy loading, and JSON-LD structured data on every page (MedicalBusiness org with the three LLCs as `sameAs`, plus BreadcrumbList, Service, and FAQPage schema where relevant). Updated `sitemap.xml` and `robots.txt`.

## Pages (13)

| File | Purpose | Primary keyword targets |
|---|---|---|
| `index.html` | Umbrella home | iv therapy cherry hill nj, iv hydration, functional medicine |
| `iv-therapy.html` | IV hub | iv drip near me, mobile iv therapy nj, hangover iv |
| `iv-therapy-nad.html` | NAD+ | nad+ iv therapy, nad+ infusion |
| `iv-therapy-injections.html` | Injections | b12 injections near me, glutathione iv |
| `labs.html` | Lab testing | blood work, lab testing, hormone testing, full body checkup |
| `coaching.html` | 1:1 coaching | health coach nj, nutrition coach, personal trainer |
| `sports-performance.html` | SPR hub | sports recovery, cryotherapy, cold plunge, infrared sauna |
| `sports-performance-acupuncture.html` | Acupuncture | acupuncture near me, acupuncture cherry hill nj |
| `sports-performance-spinal-decompression.html` | Decompression | spinal decompression near me |
| `supplements.html` | Natural Health | brand + GBP play |
| `about.html` | Team & story | functional medicine near me, wellness center |
| `resources.html` | Blog/content engine | content cluster landing |
| `contact.html` | Booking | iv therapy nj, near-me conversions |

## The Asylum Method animation

The homepage includes an animated, auto-playing journey (`#aj` section): bloodwork reading, supplements and coaching, the medical sign-off, then health/energy/fitness meters maxing out. It plays on scroll, loops, has a Replay button, and respects `prefers-reduced-motion`. Styles live in the journey block at the end of `assets/css/styles.css`; the timeline is the last block of `assets/js/main.js`.

## Structure

```
site/
  index.html ... contact.html      13 pages, flat (Elementor-friendly)
  assets/css/styles.css            single design system, CSS variables (v3)
  assets/js/main.js                nav, sticky nav, scroll reveal, count-up, journey
  assets/img/                      curated, web-optimized real photography
  assets/video/header.mp4          looping hero background (placeholder, swap in real)
  sitemap.xml  robots.txt          SEO scaffolding
```

## Design system (v3)

Edit the variables at the top of `assets/css/styles.css` to retheme everything:

- `--bg` near-black blue base, `--bg-2` / `--surface` panels and cards
- `--accent` electric blue (`#2E8BFF`), `--accent-2` cyan (`#3FE0FF`), `--grad` the blue-cyan gradient used on CTAs, links, and accents
- `--text` / `--muted` / `--faint` text ramp
- Fonts: Saira (wide athletic display, uppercase headings) + Inter (body), from Google Fonts

## Placeholders to replace before launch

- **Header video:** swap `assets/video/header.mp4` for the client's real footage (same filename, no HTML changes).
- **Team photos:** Tyler uses a real photo. Coach George, Dr. Nisar, and Colin show styled monogram tiles. Drop real portraits into `assets/img/` and swap the monogram markup on `about.html` (and confirm names/titles/credentials).
- **Prices** on IV / injection / NAD+ / coaching pages: sample numbers, confirm with the partners.
- **Contact form** is a non-sending demo. Wire to OptiMantra (Wellness & IV) / Jane App (SPR), or embed your scheduler.
- **Map** on `contact.html` uses a Google Maps embed for the address. Swap for an API-keyed embed or your GBP map if preferred.
- **Hours** on `contact.html` are placeholder (Mon to Fri 9 to 7, Sat 9 to 2).
- **Domain:** canonical, Open Graph, and schema URLs use `https://asylumwiv.com`. Update if the live domain differs.

## Publish to GitHub Pages

1. Create a repo, push the contents of `site/`.
2. Repo Settings, Pages, deploy from branch, root.
3. Or just `git clone` and open `index.html` locally to review.

## Notes carried from strategy

- One site, three brand sections (Wellness & IV, Sports Performance & Recovery, Natural Health). 301 the other two domains in.
- Footer states the three LLCs operate independently at one location.
- Supplement pages carry the FDA disclaimer.
- No em dashes anywhere, per house style.
