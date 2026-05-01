import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import InquiryForm from "../components/InquiryForm";
import WhatsAppButton from "../components/WhatsAppButton";

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "98%", label: "Success Rate" },
  { value: "15+", label: "Expert Trainers" },
  { value: "9+", label: "Years of Excellence" },
];

const courses = [
  { icon: "🎙️", title: "Spoken English", desc: "Build fluency and confidence in everyday conversations with our immersive program.", badge: "Most Popular" },
  { icon: "📝", title: "IELTS Preparation", desc: "Achieve your target band score with expert coaching, mock tests & strategy sessions.", badge: "High Demand" },
  { icon: "💼", title: "Business English", desc: "Master professional communication, email writing, and presentation skills.", badge: "" },
  { icon: "📚", title: "Grammar Mastery", desc: "Build a rock-solid foundation in English grammar from basics to advanced level.", badge: "" },
  { icon: "🎯", title: "Interview Skills", desc: "Crack dream job interviews with role-play sessions, GD practice & CV review.", badge: "New Batch" },
  { icon: "👦", title: "Kids English", desc: "Fun, interactive English learning for children ages 6–15 with certified trainers.", badge: "" },
];

const whyUs = [
  { icon: "👨‍🏫", title: "Expert Faculty", desc: "Certified trainers with 10+ years of teaching experience in English communication." },
  { icon: "📱", title: "Flexible Batches", desc: "Morning, evening & weekend batches to suit working professionals and students." },
  { icon: "🏆", title: "Proven Results", desc: "98% of our students report significant improvement within 60 days of joining." },
  { icon: "💬", title: "Live Practice Sessions", desc: "Daily group discussions, debates, and role-play to build real confidence." },
  { icon: "📊", title: "Personalized Feedback", desc: "Weekly one-on-one assessments and detailed progress reports for every student." },
  { icon: "🎓", title: "Certification", desc: "Receive a recognized certificate upon course completion to boost your resume." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />
        {/* Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-accent/10 border border-amber-accent/30 rounded-full px-4 py-1.5 mb-6 fade-up">
              <span className="w-2 h-2 bg-amber-accent rounded-full animate-pulse" />
              <span className="text-amber-accent text-xs font-semibold font-body tracking-wide">Now Enrolling – June 2024 Batch</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 fade-up delay-1">
              Speak English<br />
              <span className="text-gradient">Confidently.</span><br />
              <span className="text-3xl sm:text-4xl font-bold text-gray-300">Change Your World.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-body max-w-md fade-up delay-2">
              Join thousands of students who transformed their careers and lives through Hi Tech Focus — the city's most trusted English training academy.
            </p>

            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-amber-accent hover:bg-amber-dark text-navy-900 font-body font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-amber-accent/30"
              >
                Enroll Now →
              </Link>
              <Link
                to="/courses"
                className="px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-body font-medium rounded-xl transition-all"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* Right – Quick Inquiry Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl fade-up delay-4">
            <h2 className="font-display font-bold text-navy-700 text-xl mb-1">Free Counselling Session</h2>
            <p className="text-gray-500 text-sm mb-6 font-body">Fill the form and we'll call you back within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-amber-accent py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-black text-3xl text-navy-900">{value}</div>
              <div className="text-navy-700 text-sm font-body font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-700 mt-2">Our Courses</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto font-body">
              Carefully crafted programs for students, professionals, and job seekers at every level.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(({ icon, title, desc, badge }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover relative">
                {badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-amber-accent/15 text-amber-dark px-2.5 py-1 rounded-full font-body">
                    {badge}
                  </span>
                )}
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display font-bold text-navy-700 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body mb-4">{desc}</p>
                <Link
                  to="/courses"
                  className="text-amber-dark hover:text-amber-accent font-body font-semibold text-sm inline-flex items-center gap-1 group"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-block px-8 py-3.5 border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white font-body font-bold rounded-xl transition-all"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">Our Advantage</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-700 mt-2 mb-4">
                Why Choose Hi Tech Focus?
              </h2>
              <p className="text-gray-500 font-body leading-relaxed mb-8">
                We don't just teach English — we build communication leaders. Our holistic approach combines proven pedagogy, technology, and personal mentoring to deliver real results.
              </p>
              <Link
                to="/about"
                className="inline-block px-7 py-3.5 bg-navy-700 hover:bg-navy-600 text-white font-body font-bold rounded-xl transition-all"
              >
                Know More About Us
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="text-2xl flex-shrink-0 w-10 h-10 bg-amber-accent/10 rounded-xl flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-navy-700 text-sm mb-1">{title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />
       
      <WhatsAppButton />

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "radial-gradient(circle at 30% 70%, #f59e0b 0%, transparent 60%)"
            }} />
            <span className="font-display text-5xl">🚀</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Ready to Start Your<br /><span className="text-gradient">English Journey?</span>
            </h2>
            <p className="text-gray-300 font-body mb-8 max-w-lg mx-auto">
              Book a free demo class today — no pressure, no obligation. Just experience the Hi Tech Focus difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-amber-accent hover:bg-amber-dark text-navy-900 font-body font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-amber-accent/30"
              >
                Book Free Demo Class
              </Link>
              <a
                href="tel:+919828251124"
                className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 font-body font-medium rounded-xl transition-all"
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
