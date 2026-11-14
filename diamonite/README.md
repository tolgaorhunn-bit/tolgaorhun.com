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
| `assets/` | All images: `hero.webp`, `editorial-1…6.webp`, `home-hero.webp`, and one `<stone-slug>.webp` per gemstone |

Fonts: Cormorant Garamond (headings) and Jost (body), loaded from Google Fonts with Georgia / Arial fallbacks.

## Images

The gemstone images in `assets/<stone-slug>.webp` are *conceptual styling inspiration*, not photographs of stock, and may not show the exact mineral or colour. Replace them with approved imagery before a public launch.

## Before publishing

- Add the WhatsApp number in `app.js`: `const WA_NUMBER='974XXXXXXXX';` (digits only, with country code). Until it is set, the Contact button is intentionally inactive.
- Check stone names and descriptions in `stones.json` against the actual inventory.
- Preview on mobile and desktop.

No checkout, no prices, no online jewellery design workflow.
