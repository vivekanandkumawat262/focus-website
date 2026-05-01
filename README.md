# Hi Tech Focus – English Training Academy Website

A modern, fully responsive multi-page React website for an English training academy.

## 🚀 Tech Stack
- **React 18** with React Router v6
- **Tailwind CSS** v3 for styling
- **Vite** for fast development & build

---

## 📁 Folder Structure

```
hitechfocus/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx            # App entry point
    ├── App.jsx             # Routes + Layout wrapper
    ├── index.css           # Global styles + Tailwind
    ├── components/
    │   ├── Navbar.jsx          # Sticky responsive navbar
    │   ├── Footer.jsx          # Full footer with links
    │   ├── WhatsAppButton.jsx  # Floating WhatsApp CTA
    │   ├── InquiryForm.jsx     # Reusable form (name/phone/course)
    │   └── Testimonials.jsx    # Interactive testimonial slider
    └── pages/
        ├── Home.jsx        # Hero + Stats + Courses + Why Us + CTA
        ├── About.jsx       # Story + Team + Timeline
        ├── Courses.jsx     # Detailed course cards with pricing
        └── Contact.jsx     # Form + WhatsApp + FAQ
```

---

## ⚙️ Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✅ Features Included

| Feature                    | Status |
|---------------------------|--------|
| 4 pages (Home/About/Courses/Contact) | ✅ |
| Sticky responsive Navbar   | ✅ |
| Mobile hamburger menu      | ✅ |
| Hero section with CTA      | ✅ |
| Stats bar                  | ✅ |
| Course cards with pricing  | ✅ |
| Why Choose Us section      | ✅ |
| Interactive Testimonials   | ✅ |
| Contact CTA banner         | ✅ |
| WhatsApp floating button   | ✅ |
| Inquiry form with validation | ✅ |
| FAQ accordion              | ✅ |
| Team section               | ✅ |
| Company timeline           | ✅ |
| Footer                     | ✅ |

---

## 🎨 Design

- **Font**: Playfair Display (headings) + DM Sans (body)
- **Colors**: Deep Navy (#0f1f33) + Amber (#f59e0b) accents
- **Theme**: Bold academic-meets-modern with geometric touches

---

## 🔧 Customization

1. **WhatsApp number** — Edit `src/components/WhatsAppButton.jsx` → `const phone`
2. **Course list** — Edit course arrays in `Courses.jsx` and `Home.jsx`
3. **Contact info** — Edit `Footer.jsx` and `Contact.jsx`
4. **Google Maps** — Replace the map placeholder in `Contact.jsx` with an actual `<iframe>` embed from Google Maps
5. **Colors** — Edit `tailwind.config.js` → `theme.colors`

---

## 📦 Deployment

Build with `npm run build` and deploy the `dist/` folder to:
- **Netlify** (drag & drop)
- **Vercel** (`vercel --prod`)
- **cPanel** (upload dist/ contents)
