import { useState } from "react";

const COURSES = [
  "Spoken English",
  "IELTS Preparation",
  "Business English",
  "Grammar Mastery",
  "Interview Skills",
  "Kids English",
];

export default function InquiryForm({ dark = false }) {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit number";
    if (!form.course) e.course = "Please select a course";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-body transition-all outline-none focus:ring-2 focus:ring-amber-accent/50 ${
      dark
        ? "bg-navy-700 border-navy-600 text-white placeholder-gray-400"
        : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
    } ${errors[field] ? "border-red-400" : ""}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">✅</div>
        <h3 className={`font-display font-bold text-xl ${dark ? "text-white" : "text-navy-700"}`}>
          Inquiry Received!
        </h3>
        <p className={`text-sm max-w-xs ${dark ? "text-gray-300" : "text-gray-500"}`}>
          Thank you, {form.name}! Our team will call you within 24 hours regarding <strong>{form.course}</strong>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", course: "", message: "" }); }}
          className="mt-2 text-sm text-amber-accent hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Full Name *"
          value={form.name}
          onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
          className={inputCls("name")}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number (10 digits) *"
          value={form.phone}
          onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
          className={inputCls("phone")}
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <select
          value={form.course}
          onChange={e => { setForm({ ...form, course: e.target.value }); setErrors({ ...errors, course: "" }); }}
          className={`${inputCls("course")} ${!form.course ? "text-gray-400" : dark ? "text-white" : "text-gray-800"}`}
        >
          <option value="" disabled>Select a Course *</option>
          {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.course && <p className="text-red-400 text-xs mt-1">{errors.course}</p>}
      </div>

      <div>
        <textarea
          rows={3}
          placeholder="Any message or questions? (Optional)"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${inputCls("message")} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-amber-accent hover:bg-amber-dark text-navy-900 font-body font-bold text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-amber-accent/30 active:scale-95"
      >
        Send Inquiry →
      </button>
    </form>
  );
}
