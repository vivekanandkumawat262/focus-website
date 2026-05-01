import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-amber-accent flex items-center justify-center font-display font-black text-navy-900 text-lg">HF</div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-none">Hi Tech Focus</div>
              <div className="text-amber-accent text-[10px] tracking-widest uppercase font-body">English Academy</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering students and professionals with world-class English communication skills since 2015.
          </p>
          <div className="flex gap-3 mt-5">
            {["📘 Facebook", "📸 Instagram", "▶️ YouTube"].map(s => (
              <a key={s} href="#" className="text-xs bg-navy-700 hover:bg-amber-accent hover:text-navy-900 px-3 py-1.5 rounded-full transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/courses", label: "Our Courses" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-amber-accent transition-colors">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span>📍</span>
              <span>123 Education Street, Knowledge Hub, City – 400001</span>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href="tel:+919999999999" className="hover:text-amber-accent transition-colors">+91 99999 99999</a>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href="mailto:info@hitechfocus.com" className="hover:text-amber-accent transition-colors">info@hitechfocus.com</a>
            </li>
            <li className="flex gap-2">
              <span>🕐</span>
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Hi Tech Focus English Academy. All rights reserved.
      </div>
    </footer>
  );
}
