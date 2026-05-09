# Kulicage Dynamics LLC — KDyn.tech landing page

Static GitHub Pages site for Kulicage Dynamics LLC.

## Files

- `index.html` — main page
- `styles.css` — visual style and layout
- `script.js` — mobile menu and current year
- `assets/logo.svg` — logo
- `assets/favicon.svg` — browser icon
- `assets/plasma-header.svg` — plasma accent background

## GitHub Pages setup

1. Create a new repository.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Add the custom domain: `www.kdyn.tech`
6. Configure DNS at your domain provider.
7. Enable **Enforce HTTPS** when GitHub allows it.

## Contact form

The contact form currently uses a placeholder Formspree endpoint:

```html
https://formspree.io/f/YOUR_FORM_ID
```

Replace `YOUR_FORM_ID` with a real Formspree form ID, or replace the form with a direct email link.
