# DIAMONITE — rebuilt mobile-first website

## Installation
Upload the **contents of this folder** to `tolgaorhun.com/diamonite/` in your GitHub repository, preserving `assets/`. Do not upload the outer `diamonite-rebuilt` folder. GitHub Pages then serves `https://tolgaorhun.com/diamonite/`.

## Pages
- `index.html`: homepage
- `about.html`: brand story
- `gemstones.html`: all 17 inventory-backed gemstone categories with responsive selector
- `contact.html`: consultation CTA
- `stones.json`: editable gemstone descriptions
- `style.css`, `app.js`: design and interactions

## IMPORTANT: images
- All images are separate from text: no text is burned into images.
- `assets/hero.webp` is the existing clean three-gemstone image.
- The six editorial images are temporary **concept references**, reused across the 17 gemstone entries. They do NOT claim to depict the named stone or finished inventory. Replace each with a distinct approved portrait in a production version.
- For distinct per-stone photos, update the `photos` mapping in `app.js` to 17 filenames.

## WhatsApp
Set `WA_NUMBER` in `app.js` to the verified business WhatsApp number in international format without `+` or spaces. Until then the button is intentionally inactive; no number has been invented.

## Editorial and operational notes
- 17 categories verified against the supplied inventory spreadsheet; item counts not publicly displayed.
- Stone text is descriptive marketing copy, not certification, origin, treatment, or availability guarantees.
- All consultations and designs happen in person in Doha, not via online design tools.
- No checkout or product prices.
- Test on mobile Safari/Chrome before public launch.
