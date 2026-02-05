# Quick Start Guide

## ?? Get Up and Running in 5 Minutes

### Step 1: Open the Website
1. Open `index.html` in your web browser
2. The website should display fully functional!

### Step 2: Add Your Images
1. Create an `assets/` folder in your project root (if not already created)
2. Add these images:
   - `logo.png` - Your company logo
   - `facility.jpg` - Picture of your facility
   - `slabs.jpg` - Product images (for inner pages)
3. Images will automatically display once added

### Step 3: Update Company Information
Edit `index.html` and replace:
- **Phone number**: Search for `513-217-8403`
- **Email**: Search for `Info@etsusainc.com`
- **Address**: Search for `2601 S. Verity Pkwy`
- **Company description**: Update text in sections

### Step 4: Customize Colors (Optional)
Edit `styles.css` top section:
```css
:root {
    --primary-color: #1e3a8a;      /* Main color (currently blue) */
    --secondary-color: #3b82f6;    /* Secondary color */
    --accent-color: #f59e0b;       /* Highlight color (currently gold) */
}
```

### Step 5: Create Additional Pages
Copy and modify `pages/finished-slabs.html` for:
- Finished Rounds
- Other Products
- Facility
- The Evertz Group

Just change the content and update image src paths!

---

## ?? File Structure Reference

```
project/
??? index.html                          # Main homepage
??? styles.css                          # All styling
??? script.js                           # All interactivity
??? README.md                           # Full documentation
??? QUICKSTART.md                       # This file
??? assets/                             # Your images
?   ??? logo.png
?   ??? facility.jpg
?   ??? slabs.jpg
??? pages/                              # Additional pages
    ??? finished-slabs.html
    ??? finished-rounds.html
    ??? other-products.html
    ??? facility.html
    ??? the-evertz-group.html
```

---

## ?? Key Areas to Customize

### Header/Hero Section
In `index.html`:
```html
<h1>YOUR SPECIALIST FOR PROCESSING OF SEMI-FINISHED PRODUCTS</h1>
<p>Your custom description here</p>
```

### Services
In `index.html`, edit the service cards:
```html
<div class="service-card">
    <div class="service-icon"><i class="fas fa-cube"></i></div>
    <h3>Slab Grinding</h3>
    <p>Your description here</p>
</div>
```

### Contact Information
Search and replace throughout:
- Phone: `513-217-8403`
- Email: `Info@etsusainc.com`
- Address: `2601 S. Verity Pkwy. Bldg. 102, Middletown, Ohio 45044`

---

## ?? Common Customizations

### Change Logo
Replace `assets/logo.png` with your logo (recommended size: 288x192px)

### Change Colors
Edit CSS variables in `styles.css`:
```css
--primary-color: #YOUR-COLOR;
--secondary-color: #YOUR-COLOR;
--accent-color: #YOUR-COLOR;
```

### Add/Remove Services
Find services section in `index.html` and add/remove cards

### Update Clients List
Edit the clients grid section with your actual client names

### Change Font
In `styles.css`, update:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

---

## ? Testing Checklist

- [ ] All links work
- [ ] Images display correctly
- [ ] Mobile menu works (test at 768px width)
- [ ] Contact form validates input
- [ ] Smooth scrolling works
- [ ] All text is readable
- [ ] No broken images (check console for errors)

---

## ?? Test on Different Devices

### Desktop
- Open in browser and test
- Try resizing window

### Tablet
- Use browser DevTools (F12)
- Change viewport to 768px width

### Mobile
- Use browser DevTools
- Change viewport to 375px width
- Test touch interactions

---

## ?? Deploy Your Site

### Free Options:
1. **Netlify** - Drag & drop your folder
2. **GitHub Pages** - Push to `gh-pages` branch
3. **Vercel** - Connect GitHub repo

### With Email:
For working contact form, add Formspree:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

Get YOUR_ID at https://formspree.io

---

## ?? Troubleshooting

### Images not showing?
- Check file paths in HTML
- Ensure images are in `assets/` folder
- Check file names match exactly (case-sensitive)

### Menu not working on mobile?
- Make sure `script.js` is loaded
- Check browser console for errors (F12)

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check `styles.css` file is in same folder as HTML
- Ensure file names match exactly

### Links not scrolling?
- Make sure section IDs match href values
- Check that smooth scroll is enabled in `script.js`

---

## ?? Resources

- **HTML Help**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Help**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Help**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Icons**: https://fontawesome.com/icons
- **Colors**: https://color.adobe.com/

---

## ?? Learning Tips

1. **Inspect Elements** - Right-click ? Inspect to see HTML/CSS
2. **Experiment** - Change values and see what happens
3. **Use DevTools** - F12 to debug and test
4. **Check Console** - Look for error messages in DevTools
5. **Search MDN** - For any web development questions

---

## ? Next Steps

1. ? Set up images in `assets/` folder
2. ? Update contact information
3. ? Customize colors to match brand
4. ? Create additional service/product pages
5. ? Set up email for contact form
6. ? Deploy to hosting platform

**You're all set! Start customizing and enjoy your new website!**

---

*Need help? Check README.md for detailed documentation.*
