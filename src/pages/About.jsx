import { Link } from "react-router-dom";

const team = [
  { name: "Prof. Anita Kapoor", role: "Founder & Head Trainer", exp: "20 yrs exp", specialty: "Spoken English & Phonetics", avatar: "AK" },
  { name: "Mr. Vivek Sharma", role: "IELTS Expert", exp: "12 yrs exp", specialty: "IELTS | PTE | TOEFL", avatar: "VS" },
  { name: "Ms. Reena Joshi", role: "Business English Coach", exp: "10 yrs exp", specialty: "Corporate Communication", avatar: "RJ" },
  { name: "Mr. Arun Pillai", role: "Grammar Specialist", exp: "8 yrs exp", specialty: "Advanced Grammar & Writing", avatar: "AP" },
];

const milestones = [
  { year: "2015", event: "Founded with a single classroom and a vision to transform English education." },
  { year: "2017", event: "Crossed 500 students trained. Expanded to a second batch center." },
  { year: "2019", event: "Launched IELTS Preparation program with 100% 7+ band success rate." },
  { year: "2021", event: "Introduced online live classes, reaching students across India." },
  { year: "2023", event: "Celebrated 5000+ students trained across 20+ courses." },
  { year: "2024", event: "Opened new state-of-the-art campus with digital language labs." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-pattern text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-5">
            About <span className="text-gradient">Hi Tech Focus</span>
          </h1>
          <p className="text-gray-300 text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Since 2015, we've been on a mission to unlock the power of English for every student and professional — breaking barriers, building confidence, and creating opportunities.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-display font-bold text-navy-700 text-2xl mb-3">Our Mission</h3>
            <p className="text-gray-500 font-body leading-relaxed">
              To provide world-class English language training that empowers individuals to communicate confidently in personal, academic, and professional settings. We believe every learner deserves access to quality education that opens doors to global opportunities.
            </p>
          </div>
          <div className="bg-navy-900 rounded-3xl p-8">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="font-display font-bold text-white text-2xl mb-3">Our Vision</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              To be India's most trusted English training institution — where every student leaves not just as a better English speaker, but as a more confident, articulate, and successful individual ready to conquer the world.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">Our Journey</span>
            <h2 className="font-display text-3xl font-bold text-navy-700 mt-2">9 Years of Excellence</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-accent/30 -translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                  <div className="relative flex-shrink-0 w-12 h-12 bg-amber-accent rounded-full flex items-center justify-center font-display font-black text-navy-900 text-xs z-10 shadow-lg">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1">
                    <div className="font-body font-bold text-amber-dark text-sm mb-1">{year}</div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">The Experts</span>
            <h2 className="font-display text-3xl font-bold text-navy-700 mt-2">Meet Our Faculty</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, exp, specialty, avatar }) => (
              <div key={name} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-amber-accent/30 card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center font-display font-black text-amber-accent text-lg mx-auto mb-4 shadow-lg">
                  {avatar}
                </div>
                <h4 className="font-body font-bold text-navy-700 text-sm mb-1">{name}</h4>
                <div className="text-amber-dark text-xs font-semibold mb-1 font-body">{role}</div>
                <div className="text-gray-400 text-xs mb-2 font-body">{exp}</div>
                <div className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1 font-body">{specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Ready to Join Our Family?</h2>
          <p className="text-navy-700 font-body mb-6">Start your transformation today with a free counselling session.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-navy-900 text-white font-body font-bold rounded-xl hover:bg-navy-700 transition-all"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
