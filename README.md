# Asylum Wellness Collective, Website

Static reference build for the one-site hub on **asylumwiv.com**. No build step, no dependencies, no framework. Open `index.html` in a browser, or push this folder to GitHub Pages.

Built to be reviewed live by the client, then rebuilt in WordPress/Elementor.

---

## BEFORE YOU GO LIVE

Three things must be handled before this is a public, indexable site.

1. **Remove the `noindex` tag.** Every page currently contains `<meta name="robots" content="noindex, nofollow">` so Google will not index the review build. Delete that line from all 14 HTML files when you are ready to launch.
2. **Add the logo file.** Drop the Asylum wordmark SVG at `assets/img/asylum-logo-white.svg`. It is referenced but not included. Until it exists, the header falls back automatically (see "Logo behavior" below), so nothing looks broken.
3. **Get a compliance pass on the copy.** Claims, testimonials, entity identification, lab/dosing language, and the discount pricing all need sign-off from the medical director before publication. See "Compliance notes".

---

## Pages (14)

| Page | File |
| --- | --- |
| Home | `index.html` |
| IV Therapy & Hydration | `iv-therapy.html` |
| NAD+ Therapy | `iv-therapy-nad.html` |
| Vitamin Injections | `iv-therapy-injections.html` |
| Lab Testing | `labs.html` |
| Coaching | `coaching.html` |
| Massage Therapy | `massage.html` |
| Sports & Recovery | `sports-performance.html` |
| Acupuncture | `sports-performance-acupuncture.html` |
| Chiropractic & Training | `sports-performance-spinal-decompression.html` |
| Supplements | `supplements.html` |
| About & Team | `about.html` |
| Resources | `resources.html` |
| Contact | `contact.html` |

## Structure

```
/
  *.html              14 pages
  robots.txt
  sitemap.xml
  assets/
    css/styles.css    entire design system, single file
    js/main.js        nav, scroll reveal, counters, Asylum Method animation
    img/              photography and graphics
    video/            home page hero video
```

## Design system

Defined as CSS custom properties at the top of `assets/css/styles.css`.

**Colour roles.** Blue is the action colour for Wellness & IV. Amber is the action colour for Sports & Recovery. Gold is a detail accent used site-wide for labels, prices, rules, and markers, and never on a button. That separation is what keeps the gold reading as premium instead of noisy.

- `--accent` `#2E8BFF` electric blue, `--accent-2` `#3FE0FF` cyan
- `--warm` `#F2A33D` amber, the Sports & Recovery wing
- `--gold` `#F2A33D` / `--gold-2` `#FFC978`, detail accent

**Wing theming.** Add `class="wing-sports"` to any `<main>`, `<header>`, or section and everything inside re-themes from blue to amber through token overrides. No duplicated rules. Used on the four Sports & Recovery pages and the Dr. Nisar panel on the home page.

**Type.** Michroma for hero headlines, Saira for headings and UI, Inter for body, Chakra Petch for the logo wordmark. Loaded from Google Fonts.

**House rule:** no em dashes anywhere in the copy.

## Logo behavior

The header logo tries three sources in order, so it can never render as a broken image:

1. `assets/img/asylum-logo-white.svg` (local, preferred)
2. the Cloudways-hosted SVG (fallback)
3. an on-brand CSS text wordmark, ASYLUM + Wellness & IV

Add the local file and it is picked up automatically with no code changes.

## Booking links

- **Wellness & IV** (header button, IV, NAD+, injections, labs, coaching, home, about, resources, contact) points to **OptiMantra**.
- **Sports & Recovery** (massage, acupuncture, chiropractic & training, sports hub) points to **Jane**.

Both open in a new tab. To change either, find-and-replace the URL across the HTML files.

## SEO

Per-page titles, meta descriptions, canonicals, Open Graph and Twitter cards, descriptive alt text, and lazy loading. JSON-LD on every page: `MedicalBusiness` plus `BreadcrumbList`, with `Service` and `FAQPage` where relevant. `sitemap.xml` lists all 14 pages.

## Accessibility and resilience

- One `<h1>` per page, every image has alt text
- A `<noscript>` block keeps all content visible if JavaScript fails; without it the scroll-reveal animations would leave the page blank
- Responsive at 1040px, 780px, and 560px, with a slide-down mobile nav and inline dropdowns
- `prefers-reduced-motion` is respected

## Compliance notes

The copy was written against a New Jersey compliance audit. Two rules to preserve when editing:

- **Coaching may not be tied to labs.** The coach is a non-practitioner, so never state or imply that he reads, orders, or interprets bloodwork. Labs are "reviewed by our clinical team."
- **No guaranteed outcomes.** No promised results or timelines, and no diagnose/treat/cure/prevent language. Use supportive framing such as "popular for" and "may help support."

Coaching testimonials are permitted. Testimonials for medical services (IV, injections, NAD+, labs) need New Jersey procedure-disclosure language before they go back on the site.

## Local preview

No server required. Open `index.html` directly, or:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder to a repository.
2. Settings, Pages, deploy from branch, root.
3. Add the custom domain if desired. Remember to remove the `noindex` tags first.
