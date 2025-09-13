# Sarah Sun Studio - Premium Tanning Website

Een ultra-premium website voor Sarah Sun Studio, een premium bruiningsstudio in Aachen, Duitsland.

## Features

### 🌟 Premium Design
- **Apple-style UI/UX** met clean, moderne esthetiek
- **Purple theme** met verschillende tinten en gradients
- **Dark/Light mode** toggle met smooth transitions
- **Responsive design** geoptimaliseerd voor alle apparaten

### 🌍 Multi-language Support
- **4 talen**: Duits (DE), Nederlands (NL), Frans (FR), Engels (EN)
- **Dynamic language switching** zonder page reload
- **Localized content** voor alle teksten en interfaces

### ✨ Advanced Animations
- **Scroll animations** met AOS (Animate On Scroll)
- **Parallax effects** voor enhanced user experience
- **Smooth transitions** en hover effects
- **Interactive elements** met micro-animations

### 📱 Mobile Optimization
- **Responsive grid layouts** voor alle secties
- **Mobile-first approach** met touch-friendly interfaces
- **Hamburger menu** voor mobile navigation
- **Optimized images** voor verschillende screen sizes

### 🗺️ Integration Features
- **Google Maps** integration voor locatie
- **WhatsApp contact form** voor directe communicatie
- **Social media links** (Facebook, Instagram)
- **SEO optimized** met meta tags en structured data

### ⚡ Performance & PWA
- **Service Worker** voor offline functionality
- **Lazy loading** voor images en content
- **Caching strategy** voor snelle loading times
- **PWA manifest** voor app-like experience

## Technische Details

### Tech Stack
- **HTML5** met semantic markup
- **CSS3** met custom properties en modern features
- **Vanilla JavaScript** (ES6+) zonder dependencies
- **AOS Library** voor scroll animations
- **Font Awesome** voor icons
- **Google Fonts** (SF Pro Display/Text)

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **Critical CSS** inlined
- **Font preloading** voor snelle rendering
- **Image optimization** met responsive images
- **Minimal JavaScript** footprint
- **Efficient caching** strategy

## Project Structure

```
sarahsun/
├── index.html          # Main HTML file
├── styles.css          # CSS with theme support
├── script.js           # JavaScript functionality
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
├── README.md          # Documentation
└── img/
    ├── logo/
    │   └── logo.png
    └── hero/
        ├── herodesktop.png
        └── heromobile.png
```

## Content Sections

### 1. Hero Section
- Premium value proposition
- Call-to-action buttons
- Key features highlight
- Responsive hero images

### 2. Services
- UV-Solarien (Tanning Beds)
- UV-freies Bräunen (Airbrush Tanning)
- Fachkundige Beratung (Expert Consultation)

### 3. Pricing
- Transparent pricing structure
- Popular package highlighting
- Clear value propositions
- Direct booking integration

### 4. Reviews
- Customer testimonials
- Star ratings display
- Social proof elements
- Trust indicators

### 5. Contact
- Complete contact information
- Opening hours
- Google Maps integration
- WhatsApp booking system

## Customization

### Theme Colors
```css
:root {
  --primary-color: #8B5CF6;
  --secondary-color: #EC4899;
  --accent-color: #F59E0B;
}
```

### Language Support
To add a new language, update the `translations` object in `script.js` with the new language code and corresponding translations.

### Content Updates
All content is managed through the translation system, making it easy to update text across all languages.

## Deployment

1. Upload all files to your web server
2. Ensure HTTPS is enabled (required for PWA features)
3. Configure server to serve the manifest.json file
4. Test all functionality across different devices

## SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags
- Structured data markup
- Mobile-friendly design
- Fast loading times
- SSL certificate support

## Analytics Ready

The website is prepared for Google Analytics integration with event tracking for:
- Language switches
- Theme toggles
- WhatsApp clicks
- Service interactions

## Support

Voor vragen over de website of technische ondersteuning, neem contact op via:
- E-mail: info@sarahsunstudio.de
- Telefoon: +49 241 90054154
- WhatsApp: Direct via de website

---

**Sarah Sun Studio** - Premium Bräunungserlebnis in Aachen seit 2011
