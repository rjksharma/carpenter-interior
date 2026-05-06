# Sharma Interior Website

Static, mobile-friendly business website for **Sharma Interior**, designed for GitHub Pages hosting.

## What is included

- Responsive one-page website
- Curated local image set for services, gallery, and video sections
- Local woodworking video asset for a stronger visual presentation
- WhatsApp-based enquiry form that works on static hosting
- GitHub Actions workflow for automatic GitHub Pages deployment

## Business details used

The current build uses publicly available details found from the provided Google Maps share link and supporting public listing data:

- Business name: `Sharma Interior`
- Address: `Civil Aviation Layout, 375/1, Rachenahalli, Thanisandra, Bengaluru, Karnataka 560077`
- Phone currently used on the site: `+91 97427 41841`
- Service area: `Rachenahalli, Thanisandra, and nearby Bengaluru areas`
- Highlighted services:
  - Modular Kitchen
  - Bedroom
  - False Ceiling
  - TV Unit
  - Residential Building
  - Commercial Building
  - Painting
  - Wood Work
  - Bed
  - Almirah and Cupboard

## Local preview

Because this is a plain static site, you can open [index.html](./index.html) directly in a browser.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Open a terminal in this folder.
3. Run:

```powershell
git init
git add .
git commit -m "Add Sharma Interior website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

4. In GitHub, go to `Settings > Pages`.
5. Make sure GitHub Pages is set to use **GitHub Actions**.
6. Pushes to `main` will deploy automatically with `.github/workflows/deploy.yml`.

## Notes

- The contact form is intentionally static-hosting friendly. It prepares a WhatsApp message instead of requiring a backend.
- The Google Maps button uses the corrected shared link you provided.
- The phone number currently in the site is based on a public directory snippet tied to the exact Bengaluru address. If you want a different number, replace it in `index.html` and `assets/js/main.js`.
