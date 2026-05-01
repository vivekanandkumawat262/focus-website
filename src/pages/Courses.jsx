import { Link } from "react-router-dom";

const courses = [
  {
    icon: "🎙️",
    title: "Spoken English",
    tagline: "From hesitant to fluent in 90 days",
    duration: "3 Months",
    level: "All Levels",
    sessions: "5 days/week",
    highlights: ["Daily conversation practice", "Pronunciation & accent training", "Vocabulary building", "Group discussion & debates", "Doubt clearing sessions"],
    price: "₹4,999",
    popular: true,
  },
  {
    icon: "📝",
    title: "IELTS Preparation",
    tagline: "Target 7+ band with expert guidance",
    duration: "2 Months",
    level: "Intermediate+",
    sessions: "6 days/week",
    highlights: ["All 4 modules covered (L/R/W/S)", "20+ mock tests", "Exam strategy & time management", "Band score prediction", "Personal feedback sessions"],
    price: "₹7,999",
    popular: false,
  },
  {
    icon: "💼",
    title: "Business English",
    tagline: "Communicate like a global professional",
    duration: "2 Months",
    level: "Intermediate",
    sessions: "3 days/week",
    highlights: ["Email & report writing", "Presentation skills", "Meeting & negotiation language", "Cross-cultural communication", "LinkedIn profile makeover"],
    price: "₹5,999",
    popular: false,
  },
  {
    icon: "📚",
    title: "Grammar Mastery",
    tagline: "Build an unshakeable grammar foundation",
    duration: "1.5 Months",
    level: "Beginner–Advanced",
    sessions: "4 days/week",
    highlights: ["Tenses, articles & prepositions", "Sentence correction techniques", "Common error elimination", "Writing exercises", "Weekly grammar tests"],
    price: "₹3,499",
    popular: false,
  },
  {
    icon: "🎯",
    title: "Interview Skills",
    tagline: "Crack any interview with confidence",
    duration: "1 Month",
    level: "All Levels",
    sessions: "3 days/week",
    highlights: ["HR & technical interview prep", "GD (Group Discussion) practice", "Body language coaching", "CV & cover letter review", "Mock interviews with feedback"],
    price: "₹3,999",
    popular: false,
  },
  {
    icon: "👦",
    title: "Kids English",
    tagline: "Fun-first English for young learners",
    duration: "3 Months",
    level: "Ages 6–15",
    sessions: "4 days/week",
    highlights: ["Phonics & reading aloud", "Story-based learning", "Creative writing for kids", "Grammar through games", "Confidence building activities"],
    price: "₹3,999",
    popular: false,
  },
];

export default function Courses() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-pattern text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">What We Offer</span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-5">
            Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-gray-300 text-lg font-body max-w-2xl mx-auto">
            Thoughtfully designed programs for every learner — from school students to corporate professionals.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <div key={c.title} className={`relative bg-white rounded-3xl overflow-hidden border card-hover ${c.popular ? "border-amber-accent shadow-xl shadow-amber-accent/10" : "border-gray-100"}`}>
                {c.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-amber-accent text-navy-900 text-xs font-bold font-body text-center py-1.5 tracking-widest uppercase">
                    ⭐ Most Popular
                  </div>
                )}
                <div className={`p-6 ${c.popular ? "pt-10" : ""}`}>
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <h3 className="font-display font-bold text-navy-700 text-xl mb-1">{c.title}</h3>
                  <p className="text-amber-dark text-sm font-body italic mb-4">{c.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {[c.duration, c.level, c.sessions].map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-body">{tag}</span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {c.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600 font-body">
                        <span className="text-amber-accent mt-0.5 flex-shrink-0">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-display font-black text-navy-700 text-2xl">{c.price}</div>
                      <div className="text-gray-400 text-xs font-body">full course fee</div>
                    </div>
                    <Link
                      to="/contact"
                      className={`px-5 py-2.5 rounded-xl font-body font-bold text-sm transition-all ${
                        c.popular
                          ? "bg-amber-accent hover:bg-amber-dark text-navy-900"
                          : "bg-navy-700 hover:bg-navy-600 text-white"
                      }`}
                    >
                      Enroll →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-3">Not sure which course to pick?</h2>
          <p className="text-gray-500 font-body mb-6">Book a free 30-minute counselling session with our expert and we'll help you choose the perfect program.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-amber-accent hover:bg-amber-dark text-navy-900 font-body font-bold rounded-xl transition-all"
          >
            Get Free Counselling
          </Link>
        </div>
      </section>
    </>
  );
}
