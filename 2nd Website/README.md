# Evertz Technology Service USA - Website Foundation

A modern, professional B2B website built with HTML, CSS, and JavaScript featuring a clean capabilities grid design for Evertz Technology Service USA.

## ?? Project Structure

```
project-root/
??? index.html           # Main HTML file
??? styles.css           # Main stylesheet
??? script.js            # JavaScript interactivity
??? README.md            # This file
??? assets/              # Images and media
?   ??? logo.png
?   ??? facility.jpg
?   ??? ...
??? pages/               # Additional pages (optional)
    ??? finished-slabs.html
    ??? finished-rounds.html
    ??? other-products.html
    ??? facility.html
    ??? the-evertz-group.html
```

## ?? Design Overview

### ? Clean & Modern Capabilities Grid
This website features a professional B2B aesthetic with:
- **Hero Section** - Bold tagline ("Over 1.6M Tons Processed") with facility background image and floating CTA button
- **Stats Bar** - Key metrics displayed prominently (Tons Ground, Years Experience, Max Temperature, Crane Capacity)
- **Flip Card Grid** - 6 interactive capability cards with smooth 3D hover effects
  - Front: Icon, title, and short description
  - Back: Detailed specifications and benefits
  - Smooth 180° rotation on hover
- **Modern Color Palette** - Deep blue/slate with bright blue accents and gold highlights
- **Professional Typography** - Clean, readable fonts optimized for technical content
- **Client Logos** - Showcase of trusted industry partners
- **Responsive Design** - Perfect on mobile, tablet, and desktop

### ?? Design Highlights
- **Color Scheme** 
  - Primary: Deep slate (#0f172a)
  - Secondary: Professional blue (#1e40af)
  - Accent: Bright blue (#3b82f6)
  - Highlight: Gold (#f59e0b)
- **Interactive Elements**
  - Smooth flip card animations
  - Floating animation on CTA button
  - Subtle hover effects throughout
  - Cubic-bezier transitions for premium feel
- **Typography**
  - Modern system fonts for fast loading
  - Careful hierarchy and spacing
  - Optimized for readability
- **Spacing & Layout**
  - Generous padding for breathing room
  - Grid-based responsive layouts
  - Maximum content width: 1200px

## ? Key Features

### Implemented
- **Responsive Design** - Mobile-first approach, works on all devices
- **3D Flip Cards** - Interactive capability cards with 180° rotation
- **Hero Section** - Background image, overlay, bold tagline, floating CTA
- **Stats Bar** - Key metrics in grid layout with gold accent numbers
- **Capabilities Grid** - 6 flip cards with icons and detailed specs
- **About Section** - Company information with feature checklist
- **Client Logos** - Grid of trusted partner companies
- **Contact Form** - Functional form with validation
- **Sticky Navigation** - Professional navbar with dropdown menus
- **Mobile Menu** - Hamburger menu for smaller screens
- **Smooth Animations** - Professional transitions and effects
- **SEO Optimized** - Meta tags, semantic HTML, proper structure
- **Accessibility** - ARIA labels, semantic elements, keyboard navigation

## ?? Getting Started

### 1. Basic Setup
```bash
# Clone or download the project
# No build process needed - just open index.html in a browser!
```

### 2. Add Your Assets
Create an `assets/` folder and add:
- `logo.png` - Company logo (recommended: 288x192px)
- `facility.jpg` - Facility or processed steel image for hero (recommended: 1920x1200px for best quality)
- Other product/service images as needed

### 3. Update Content
Edit `index.html` to:
- Replace placeholder text with your content
- Add real images to the assets folder
- Update company statistics in stats bar
- Update contact information
- Customize capability cards

### 4. Customize Colors (Optional)
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0f172a;       /* Main dark color */
    --secondary-color: #1e40af;     /* Secondary blue */
    --accent-color: #3b82f6;        /* Bright accent */
    --highlight-color: #f59e0b;     /* Gold highlight */
}
```

### 5. Set Up Contact Form (Optional)
Make the contact form send emails by integrating a backend service:
- **Formspree**: Easy form backend (recommended)
- **EmailJS**: Frontend email solution
- **Netlify Forms**: Built-in form handling

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## ?? Component Guide

### Hero Section
- Large background image with gradient overlay
- Bold typography
- Floating call-to-action button with animation
- Tagline: "Over 1.6M Tons Processed – Your Trusted Partner in Steel Conditioning"

### Flip Cards
Each capability card features:
- **Front**: Icon, title, description
- **Back**: Detailed specs, benefits, category label
- Smooth 3D rotation on hover
- Works on touch devices (requires second tap)

### Stats Bar
Displays 4 key metrics:
- Tons Ground (1.6M+)
- Years Experience (22+)
- Max Temperature (1,000°F)
- Crane Capacity (45T)

### Contact Section
- Contact information cards (phone, email, address)
- Functional contact form
- Form validation
- Responsive layout

## ?? Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px to 1199px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

Cards flip beautifully on all devices. Touch devices get second-tap behavior for flipping.

## ? Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High color contrast ratios
- Screen reader friendly
- Touch-friendly interactive areas
- Readable font sizes and line heights

## ?? SEO Optimization

- Descriptive meta tags
- Semantic heading hierarchy
- Image alt attributes
- Proper link structure
- Mobile-friendly design
- Fast-loading optimized
- Open Graph ready (can add in `<head>`)

## ?? Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

CSS 3D transforms work in all modern browsers. Graceful fallback for older browsers.

## ?? Customization Examples

### Change Hero Tagline
Edit in `index.html`:
```html
<h1>Over 1.6M Tons Processed</h1>
<p class="hero-tagline">Your Trusted Partner in Steel Conditioning</p>
```

### Update Capability Cards
Find capability cards in `index.html` and modify:
```html
<div class="capability-card">
    <div class="card-inner">
        <div class="card-front">
            <div class="card-icon"><i class="fas fa-cube"></i></div>
            <h3>Your Service Name</h3>
            <p>Short description</p>
        </div>
        <div class="card-back">
            <h4>Specifications</h4>
            <ul>
                <li>Your spec here</li>
            </ul>
        </div>
    </div>
</div>
```

### Update Statistics
In `index.html` stats-bar section:
```html
<div class="stat-box">
    <div class="stat-number">1.6M+</div>
    <div class="stat-label">Tons Ground</div>
</div>
```

## ?? Deployment

### Deploy to Netlify (Free)
1. Drag and drop your project folder, or
2. Use Netlify CLI: `netlify deploy`

### Deploy to Vercel (Free)
1. Push to GitHub
2. Connect to Vercel in dashboard

### Deploy to GitHub Pages
1. Push to `gh-pages` branch
2. Enable in repository settings

## ?? Resources

- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS-Tricks**: https://css-tricks.com/
- **Font Awesome Icons**: https://fontawesome.com/
- **Browser Support**: https://caniuse.com/

## ?? Next Steps

1. ? Create `assets/` folder
2. ? Add facility/steel image to hero
3. ? Update company information
4. ? Update stats bar with your metrics
5. ? Customize colors if desired
6. ? Set up contact form backend
7. ? Create additional service pages
8. ? Deploy to hosting platform

---

**Professional B2B website design. Built with modern web standards. Ready to customize!**
