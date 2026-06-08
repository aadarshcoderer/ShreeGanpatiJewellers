# Elegant Jewelry Shop Website

A modern, responsive e-commerce website for a jewelry shop with product showcase, filtering, and WhatsApp integration for orders.

## 📁 File Structure

```
jewellery web/
├── index.html          # Main homepage
├── products.html       # Products showcase page
├── styles.css          # Styling and responsive design
├── script.js           # Interactivity and WhatsApp integration
└── README.md          # This file
```

## 🌟 Features

### Homepage (index.html)
- ✨ Hero section with call-to-action
- 📦 Featured products showcase
- 📝 About section
- 📞 Contact information with social links
- 📱 Fully responsive design

### Products Page (products.html)
- 🏷️ 8 diverse jewelry products (Rings, Necklaces, Bracelets, Earrings)
- 🔍 Product filtering by category
- ⭐ Product ratings and reviews
- 📊 Detailed product specifications
- 💬 WhatsApp integration for orders
- 📱 Mobile-responsive grid layout

### Key Features
- **WhatsApp Integration**: Click "WhatsApp" button to send product inquiry with pre-filled message
- **Product Filtering**: Filter products by category (All, Rings, Necklaces, Bracelets, Earrings)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions for better UX
- **Mobile Menu**: Hamburger menu for mobile navigation

## 🚀 How to Use

### 1. Open the Website
- Open `index.html` in your web browser
- Or right-click and select "Open with" > Your preferred browser

### 2. Navigate
- Click "Products" in the navigation to view all jewelry items
- Use category filters on the products page to filter items
- Click product cards to view detailed information

### 3. Order Products
Two ways to place orders:

**Option A: Order Now Button**
- Click "Order Now" on any product
- Confirm the dialog to proceed to WhatsApp

**Option B: WhatsApp Button**
- Click the WhatsApp button directly
- This opens WhatsApp with pre-filled product information

## 🔧 Customization Guide

### Update WhatsApp Number
Edit the WhatsApp number in `script.js`:

```javascript
// Line ~19 and ~75
const whatsappNumber = '919876543210'; // Replace with your number
```

**Format**: `91` + your 10-digit phone number (for India). Adjust country code as needed.

### Add New Products
In `products.html`, duplicate this product card section and modify:

```html
<!-- Product Template -->
<div class="product-card-large" data-category="rings" id="product-001">
    <div class="product-image-large">
        <i class="fas fa-ring"></i>
    </div>
    <div class="product-details">
        <h3>Product Name</h3>
        <div class="rating">
            <i class="fas fa-star"></i>
            <!-- Add more stars as needed -->
            <span>(XX reviews)</span>
        </div>
        <p class="price-large">₹XX,XXX</p>
        <p class="description-large">Product description here</p>
        <div class="product-specs">
            <p><strong>Material:</strong> [Material]</p>
            <p><strong>Stone:</strong> [Stone Type]</p>
            <p><strong>Size:</strong> [Size]</p>
        </div>
        <div class="product-buttons">
            <button class="btn btn-primary" onclick="orderNow('Product Name', XXXXX)">Order Now</button>
            <button class="btn btn-whatsapp" onclick="whatsappOrder('Product Name', XXXXX, 'product-001')">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    </div>
</div>
```

### Update Company Information
Edit these sections in `index.html`:

```html
<!-- Navigation Brand -->
<div class="nav-brand">
    <i class="fas fa-gem"></i>
    <span>Your Shop Name</span>
</div>

<!-- Contact Section -->
<p><i class="fas fa-phone"></i> Your Phone Number</p>
<p><i class="fas fa-envelope"></i> your@email.com</p>
<p><i class="fas fa-map-marker-alt"></i> Your Address</p>

<!-- WhatsApp Social Link -->
<a href="https://wa.me/YOUR_WHATSAPP_NUMBER"><i class="fab fa-whatsapp"></i></a>
```

### Customize Colors
Edit the color scheme in `styles.css`:

```css
:root {
    --primary-color: #d4af37;        /* Gold */
    --secondary-color: #1a1a1a;      /* Black */
    --text-color: #333;
    --light-bg: #f9f9f9;
    --white: #ffffff;
}
```

### Change Product Icons
The website uses Font Awesome icons. Replace them:

```html
<!-- Available jewelry icons -->
<i class="fas fa-ring"></i>          <!-- Ring -->
<i class="fas fa-necklace"></i>      <!-- Necklace -->
<i class="fas fa-bracelet"></i>      <!-- Bracelet -->
<i class="fas fa-earrings"></i>      <!-- Earrings -->
```

Visit [Font Awesome Icons](https://fontawesome.com/icons) for more options.

## 📱 WhatsApp Message Format

When a customer clicks WhatsApp, they receive a message like:

```
*Product Inquiry - Product Name*
Price: ₹XX,XXX
Product ID: product-001

Please provide more details about this product and availability.
```

You can customize this in `script.js` (search for `const productInfo = `).

## 🎨 Product Categories

Available categories for filtering:
- `rings` - Diamond and gold rings
- `necklaces` - Necklaces and pendants
- `bracelets` - Bracelets and bangles
- `earrings` - All types of earrings

Add `data-category="category-name"` to product cards to include them in filters.

## 🔗 Product Image Icons

Replace the Font Awesome icons with actual product images:

```html
<!-- Instead of -->
<div class="product-image-large">
    <i class="fas fa-ring"></i>
</div>

<!-- Use -->
<div class="product-image-large">
    <img src="path/to/image.jpg" alt="Product Name">
</div>
```

Then update CSS:
```css
.product-image-large img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 📊 Analytics Integration (Optional)

Add Google Analytics or other tracking:

```html
<!-- Add before </head> in index.html and products.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🚀 Deployment

### Host on GitHub Pages
1. Create a GitHub repository
2. Push these files to the repository
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repository-name`

### Host on Netlify
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop the folder or connect your GitHub repo
3. Automatic deployment after each update

### Host on Regular Web Server
Upload all files to your FTP server maintaining the folder structure.

## 🐛 Troubleshooting

### WhatsApp Link Not Working
- Ensure WhatsApp number is in correct format (country code + number)
- Test with a test device to confirm WhatsApp is installed
- Check browser console for errors (F12)

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Delete)

## 🔐 Firebase Setup (Admin)

This project supports optional Firebase integration for admin auth and Firestore storage (rates, products).

- Copy `firebase-config.example.js` to `firebase-config.js` and fill in your project's credentials.
- Do NOT commit `firebase-config.js` to source control. It's already excluded via `.gitignore`.
- Include the SDK and your config script before `script.js` or `admin-script.js` in your HTML files. Example in `index.html`:

```html
<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js"></script>
<script src="firebase-config.js"></script>
<script src="script.js" defer></script>
```

For admin pages (login/dashboard) include `firebase-auth-compat.js` as well and load `../firebase-config.js` relative to the admin folder.

Security best practices:
- Keep `firebase-config.js` local and never push it to git.
- Use Firebase Authentication and Firestore security rules to restrict access to authenticated admin users.
- For production, prefer uploading product images to Firebase Storage and store download URLs in Firestore rather than saving data-URLs inside documents.

- Ensure all CSS file is in the same folder as HTML
- Check file paths in HTML

### Mobile Menu Not Working
- Clear browser cache
- Check if JavaScript file is loaded (F12 > Console)
- Ensure `script.js` is in the same folder

## 📝 Notes

- All prices are in Indian Rupees (₹) - modify as needed
- Icons are from Font Awesome 6.0 (via CDN)
- Website uses no backend - purely frontend (HTML, CSS, JS)
- Product data is hardcoded (integrate with database for dynamic content)

## 📞 Support

For issues or customization help, you can:
1. Check the code comments
2. Review Font Awesome documentation
3. Test WhatsApp links directly

## 📄 License

Free to use and modify for your jewelry shop business.

---

**Happy Selling! 💎**
