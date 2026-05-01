import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Pune",
    rating: 5,
    text: "Hi Tech Focus completely transformed my communication skills. I went from being afraid to speak in meetings to confidently presenting to global clients. The trainers are incredibly patient and skilled.",
    avatar: "PS",
    course: "Business English",
  },
  {
    name: "Rahul Mehta",
    role: "IELTS Score: 8.0 Band",
    rating: 5,
    text: "I scored 8.0 in IELTS thanks to Hi Tech Focus! Their structured approach and mock tests were exactly what I needed. Highly recommend for anyone targeting 7.5+. Worth every rupee!",
    avatar: "RM",
    course: "IELTS Preparation",
  },
  {
    name: "Sneha Patel",
    role: "MBA Student, Mumbai",
    rating: 5,
    text: "The Spoken English course here is exceptional. Within 3 months, my vocabulary and fluency improved drastically. The small batch size ensured I got personal attention from the trainer.",
    avatar: "SP",
    course: "Spoken English",
  },
  {
    name: "Arjun Nair",
    role: "HR Manager, Bangalore",
    rating: 5,
    text: "I enrolled for Interview Skills coaching and cracked my dream company interview on the first attempt! The mock sessions with feedback were priceless. Truly the best academy in the city.",
    avatar: "AN",
    course: "Interview Skills",
  },
  {
    name: "Divya Krishnan",
    role: "Class 10 Student",
    rating: 5,
    text: "The Kids English program here is fantastic. My daughter's confidence in speaking and writing has improved tremendously. The teachers make learning so fun and engaging!",
    avatar: "DK",
    course: "Kids English",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase">Student Stories</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            What Our Students Say
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 mb-8">
          <div className="text-4xl text-amber-accent mb-6 font-serif">"</div>
          <p className="text-gray-200 text-lg leading-relaxed font-body mb-8 min-h-[80px]">
            {testimonials[active].text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-accent flex items-center justify-center font-display font-bold text-navy-900 text-sm flex-shrink-0">
              {testimonials[active].avatar}
            </div>
            <div>
              <div className="font-semibold text-white font-body">{testimonials[active].name}</div>
              <div className="text-gray-400 text-sm">{testimonials[active].role}</div>
            </div>
            <div className="ml-auto">
              <span className="text-xs bg-amber-accent/20 text-amber-accent px-3 py-1 rounded-full font-body">
                {testimonials[active].course}
              </span>
            </div>
          </div>
          {/* Stars */}
          <div className="flex gap-1 mt-4">
            {Array(5).fill(0).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-accent fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Dots / Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-body transition-all ${
                i === active
                  ? "bg-amber-accent text-navy-900 scale-110 shadow-lg shadow-amber-accent/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              title={t.name}
            >
              {t.avatar}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
