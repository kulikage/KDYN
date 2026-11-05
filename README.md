# Kulicage Dynamics LLC — kdyn.tech

Static GitHub Pages site for Kulicage Dynamics LLC.

## Files

- `index.html` — main page
- `404.html` — custom "page not found" page (GitHub Pages picks it up automatically)
- `styles.css` — visual style and layout
- `script.js` — mobile menu, current year, contact form submit
- `favicon.ico` — browser icon (16/32/48 px)
- `robots.txt`, `sitemap.xml` — search engine files
- `CNAME` — custom domain (`kdyn.tech`)
- `assets/logo.svg` — logo mark (vector, used in the header)
- `assets/logo.png` — logo mark 512 px (structured data / fallback)
- `assets/favicon.svg` — browser icon (vector)
- `assets/favicon.png` — PNG icon 192 × 192
- `assets/apple-touch-icon.png` — iOS home-screen icon (180 × 180)
- `assets/founder-office.jpg` — founder photo (office)
- `assets/work-skyforge.jpg`, `assets/work-hydraulics.jpg` — case images (from kulikov.tech)
- `assets/og-image.jpg` — link preview image for LinkedIn, Slack, Telegram, email (1200 × 630)
- `assets/plasma-header.svg` — decorative plasma lines

## Contact form

The form posts to Formspree (`https://formspree.io/f/xzdokprv`) via `script.js`.
The hidden `_gotcha` field is a spam honeypot; `_subject` sets the email subject.

## Content TODO (see HTML comments)

- Photo for the sealing-products card (currently a stats panel) if one becomes available.
- Verification chart: `assets/verification-chart.png` (commented `<img>` in `#program`).
- SAM.gov UEI / CAGE / NAICS in `#company`.
- Intellectual property line — only after confirming applicant/owner and status of each filing.

## GitHub Pages

Settings → Pages: deploy from branch `main`, folder `/ (root)`, custom domain `kdyn.tech`, **Enforce HTTPS** on.
