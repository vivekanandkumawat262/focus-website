import InquiryForm from "../components/InquiryForm";

const contactInfo = [
  { icon: "📍", title: "Visit Us", lines: ["123 Education Street", "Knowledge Hub, City – 400001"] },
  { icon: "📞", title: "Call Us", lines: ["+91 99999 99999", "+91 88888 88888"] },
  { icon: "✉️", title: "Email Us", lines: ["info@hitechfocus.com", "admissions@hitechfocus.com"] },
  { icon: "🕐", title: "Working Hours", lines: ["Mon–Fri: 9:00 AM – 8:00 PM", "Sat: 9:00 AM – 6:00 PM"] },
];

const faqs = [
  { q: "What is the minimum age to join?", a: "We have courses for students as young as 6 years (Kids English). Adult courses are open to anyone above 16 years." },
  { q: "Do you offer online classes?", a: "Yes! We offer live online classes via Zoom/Google Meet with the same quality as our offline batches." },
  { q: "Are there any EMI options?", a: "Yes, we offer easy EMI options for select courses. Contact us for details." },
  { q: "Can I join mid-batch?", a: "We recommend joining at the start of a new batch for the best experience, but mid-batch joining may be accommodated case-by-case." },
  { q: "Do you offer a free trial class?", a: "Absolutely! We offer one free demo class for all new students. Book through the inquiry form." },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-pattern text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">Get In Touch</span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-5">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-300 text-lg font-body max-w-xl mx-auto">
            Have questions? We're here to help. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map(({ icon, title, lines }) => (
            <div key={title} className="bg-white rounded-2xl p-6 text-center border border-gray-100 card-hover">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="font-body font-bold text-navy-700 text-sm mb-2">{title}</h4>
              {lines.map(l => (
                <div key={l} className="text-gray-500 text-xs font-body">{l}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Inquiry Form */}
          <div>
            <h2 className="font-display font-bold text-navy-700 text-2xl mb-2">Send an Inquiry</h2>
            <p className="text-gray-500 font-body text-sm mb-6">Fill in the form below and we'll call you within 24 hours.</p>
            <InquiryForm />
          </div>

          {/* Map Placeholder + WhatsApp CTA */}
          <div className="space-y-6">
            <div className="bg-navy-900 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-display font-bold text-xl mb-2">Chat on WhatsApp</h3>
              <p className="text-gray-300 font-body text-sm mb-5">
                Get instant answers to your queries. Our team is available on WhatsApp from 9 AM – 8 PM.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hello!%20I%27m%20interested%20in%20enrolling%20at%20Hi%20Tech%20Focus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1da851] text-white font-body font-bold rounded-xl transition-all"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.65 4.805 1.786 6.82L2 30l7.374-1.763A13.95 13.95 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.594l-.418-.248-4.372 1.046 1.074-4.259-.273-.437A11.468 11.468 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.344-.172-2.038-1.005-2.354-1.12-.317-.115-.547-.172-.778.172-.23.344-.893 1.12-1.094 1.35-.2.23-.403.258-.747.086-.344-.172-1.452-.536-2.767-1.71-1.022-.912-1.712-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.345-.403.517-.604.172-.2.23-.344.345-.574.115-.23.057-.43-.029-.602-.086-.172-.778-1.877-1.066-2.568-.28-.674-.564-.582-.778-.593l-.662-.011c-.23 0-.603.086-.918.43-.317.344-1.207 1.179-1.207 2.876s1.236 3.337 1.409 3.567c.172.23 2.434 3.716 5.9 5.211.824.355 1.468.568 1.97.727.827.264 1.58.226 2.174.137.663-.1 2.038-.833 2.325-1.637.287-.804.287-1.493.2-1.637-.086-.143-.316-.23-.66-.401z"/>
                </svg>
                Chat Now on WhatsApp
              </a>
            </div>

            {/* Map embed placeholder */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-52 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-body text-sm text-gray-600 font-semibold">123 Education Street</div>
                <div className="font-body text-xs text-gray-400">Knowledge Hub, City – 400001</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-amber-dark text-xs font-body font-semibold hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">FAQs</span>
            <h2 className="font-display text-3xl font-bold text-navy-700 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-body font-semibold text-navy-700 text-sm list-none">
                  {q}
                  <span className="text-amber-accent group-open:rotate-180 transition-transform text-lg font-bold">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-500 font-body text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
