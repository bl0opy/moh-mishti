# Luxe Yogurt - Premium Artisanal Yogurt Website

A high-quality, luxury website template for Luxe Yogurt featuring smooth animations, dynamic scrolling, and an elegant design optimized for GitHub Pages.

## 🌟 Features

- **Three Complete Pages**: Home, Locations, and About
- **Smooth Animations**: Fade-ins, slide-ins, and parallax effects
- **Dynamic Scrolling**: Scroll progress bar and section-based animations
- **Luxury Design**: Premium color palette and sophisticated layouts
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Optimized for GitHub Pages**: Ready to deploy immediately
- **Interactive Elements**: Hover effects, 3D card transforms, and ripple buttons
- **Modern JavaScript**: Intersection Observer API for performance
- **Clean Code**: Well-organized HTML, CSS, and JavaScript

## 📂 Project Structure

```
luxe-yogurt/
├── index.html          # Home page with hero and product showcase
├── locations.html      # Locations page with store details
├── about.html          # About page with brand story and values
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── main.js         # Interactive features and animations
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Option 1: GitHub Web Interface

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select the branch you want to deploy (usually `main` or `master`)
4. Click **Save**
5. Your site will be available at `https://[username].github.io/[repository-name]/`

### Option 2: Command Line

```bash
# If not already done, commit all changes
git add .
git commit -m "Initial commit: Luxe Yogurt website"

# Push to main branch
git push origin main

# Enable GitHub Pages (if not already enabled)
# Go to Settings → Pages in your GitHub repository
```

## 💻 Local Development

Simply open `index.html` in your web browser to view the site locally. No build process or server required!

```bash
# Open in default browser (macOS)
open index.html

# Open in default browser (Linux)
xdg-open index.html

# Open in default browser (Windows)
start index.html
```

## 🎨 Customization

### Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-cream: #FBF7F0;
    --accent-gold: #D4AF37;
    --text-dark: #2C2C2C;
    --text-light: #666666;
    --pure-white: #FFFFFF;
    --soft-purple: #E6D5F5;
    --deep-purple: #8B7BA8;
}
```

### Content

- **Home Page**: Edit `index.html` - Update hero text, product descriptions, and features
- **Locations Page**: Edit `locations.html` - Add/remove locations and update details
- **About Page**: Edit `about.html` - Customize your brand story and values

### Images

Currently using emoji placeholders (🥛, 🍓, etc.). To add real images:

1. Create an `images/` folder
2. Add your images
3. Replace emoji divs with `<img>` tags:

```html
<!-- Replace this -->
<div class="card-icon">🥛</div>

<!-- With this -->
<img src="images/your-image.jpg" alt="Description">
```

## ✨ Key Features Explained

### Smooth Animations

- **Scroll Progress Bar**: Visual indicator at the top of the page
- **Section Fade-ins**: Sections animate into view as you scroll
- **Parallax Hero**: Background moves at different speeds for depth
- **Card Animations**: 3D hover effects with mouse tracking
- **Page Transitions**: Smooth fades between pages

### Performance Optimizations

- **Intersection Observer**: Efficient scroll-based animations
- **CSS Transforms**: Hardware-accelerated animations
- **Minimal Dependencies**: Pure CSS and vanilla JavaScript
- **Optimized Assets**: No heavy libraries or frameworks

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations, Custom Properties
- **JavaScript (ES6+)**: Intersection Observer, Event Listeners
- **No frameworks**: Pure vanilla code for maximum performance

## 📄 License

This is a template website. Feel free to customize and use for your own projects.

## 🤝 Credits

Created as a premium yogurt business website template with luxury design principles and modern web technologies.

---

**Enjoy your new luxury website! 🥛✨**