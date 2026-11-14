# DIAMONITE — website

Static site served at `https://tolgaorhun.com/diamonite/` via GitHub Pages.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `about.html` | About Us / Our Story |
| `gemstones.html` | Gemstone browser (desktop vertical menu, mobile horizontal scroll) |
| `contact.html` | Contact / consultation (WhatsApp) |
| `style.css` | All styles (design tokens at the top, responsive rules at the bottom) |
| `app.js` | Mobile menu, gemstone browser, WhatsApp link |
| `stones.json` | The 17 gemstone categories (name, slug, description) |
| `assets/` | All images: `hero-gems.webp` (home banner), `editorial-1…6.webp`, `home-hero.webp`, and one `<stone-slug>.webp` per gemstone |

## Brand (Line Agency proposal — Direction 1)

- `assets/brand/wordmark.svg`, `assets/brand/monogram.svg`: vector logo and "D" monogram, extracted from `DIAMONITE_PROPOSAL_V1.pdf`. Replace with the agency's final export files when available.
- `assets/brand/script.png`: "Customized Jewellery" signature (cropped from the proposal, low resolution, replace with the final file).
- `assets/brand/favicon.svg`: monogram in brand indigo.
- Colours: black `#0c0c0d`, white, mist `#edeff1`, indigo `#2b1b59`, deep indigo `#150938`, polished-silver gradient on the home wordmark.
- Fonts (Google Fonts, closest matches to the proposal): Manrope (headings and text), Space Mono (small captions and statements).

When CSS/JS changes, bump the `?v=` number on the `style.css` / `app.js` links in every HTML page so browsers fetch the new files.

## Images

The gemstone images in `assets/<stone-slug>.webp` are *conceptual styling inspiration*, not photographs of stock, and may not show the exact mineral or colour. Replace them with approved imagery before a public launch.

## Before publishing

- Add the WhatsApp number in `app.js`: `const WA_NUMBER='974XXXXXXXX';` (digits only, with country code). Until it is set, the Contact button is intentionally inactive.
- Check stone names and descriptions in `stones.json` against the actual inventory.
- Preview on mobile and desktop.

No checkout, no prices, no online jewellery design workflow.
