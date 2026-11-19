import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND, SERVICES } from '../data/agencyData';

const BUDGET_TIERS = [
  "$15k - $30k (MVP Sprint)",
  "$30k - $60k (Full Platform)",
  "$60k - $100k+ (Enterprise/Scale)",
  "Advisory / Retainer"
];

const TIMELINES = [
  "Immediate (< 4 Weeks)",
  "1 - 3 Months",
  "Q2 2026 Target",
  "Exploratory"
];

export default function Contact({ initialSelectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedServices: initialSelectedService ? [initialSelectedService] : ['Custom Software Engineering'],
    budget: BUDGET_TIERS[1],
    timeline: TIMELINES[1],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (title) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      if (exists) {
        if (prev.selectedServices.length === 1) return prev;
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== title) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, title] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#2F2F2F] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
            <span>[ 09 // INITIATE COLLABORATION ]</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-anton tracking-wide text-white uppercase leading-[0.95]">
            Let's Build <br />
            <span className="text-[#c5ff00]">What's Next.</span>
          </h2>
          <p className="text-neutral-300 text-base font-sans">
            Tell us about your product goals, technical hurdles, or timeline. You will hear back directly from a senior engineering partner within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-8 bg-[#242424] border border-neutral-700/80 rounded-3xl p-6 sm:p-10 relative hover:border-[#c5ff00]/40 transition-all duration-300">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#c5ff00]/10 border border-[#c5ff00] text-[#c5ff00] flex items-center justify-center mx-auto hover:shadow-[0_0_30px_rgba(197,255,0,0.4)] transition-all">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Inquiry Received by Devontiq Engineering
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <span className="text-[#c5ff00] font-medium">{formData.name}</span>. A senior technical partner is reviewing your submission and will reach out to <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://calendar.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3a00ff] text-white hover:bg-[#5D2EFA] hover:shadow-[0_0_25px_rgba(58,0,255,0.4)] active:shadow-[0_0_35px_rgba(58,0,255,0.7)] text-xs font-mono font-bold uppercase transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Instant Calendar Booking</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-[#1C1C1C] border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#c5ff00] hover:shadow-[0_0_15px_rgba(197,255,0,0.2)] transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Services selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block font-semibold">
                    1. Select Capabilities Needed (Multiple Allowed)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const isSelected = formData.selectedServices.includes(s.title);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#3a00ff] text-white border-[#c5ff00] hover:shadow-[0_0_20px_rgba(58,0,255,0.4)] font-semibold'
                              : 'bg-[#1C1C1C] text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200 hover:shadow-[0_0_12px_rgba(197,255,0,0.1)]'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Tier */}
                <div className="space-y-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block font-semibold">
                    2. Estimated Project Investment Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {BUDGET_TIERS.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`p-3 rounded-xl text-left text-xs font-mono border transition-all duration-200 ${
                          formData.budget === tier
                            ? 'bg-[#2F2F2F] text-[#c5ff00] border-[#c5ff00] font-semibold hover:shadow-[0_0_15px_rgba(197,255,0,0.2)]'
                            : 'bg-[#1C1C1C] text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:shadow-[0_0_12px_rgba(197,255,0,0.1)]'
                        }`}
                      >
                        {formData.budget === tier ? '● ' : '○ '}
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-neutral-700/80 text-white placeholder-neutral-600 text-sm font-mono focus:outline-none focus:border-[#c5ff00] focus:shadow-[0_0_15px_rgba(197,255,0,0.25)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-neutral-700/80 text-white placeholder-neutral-600 text-sm font-mono focus:outline-none focus:border-[#c5ff00] focus:shadow-[0_0_15px_rgba(197,255,0,0.25)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Ventures"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-neutral-700/80 text-white placeholder-neutral-600 text-sm font-mono focus:outline-none focus:border-[#c5ff00] focus:shadow-[0_0_15px_rgba(197,255,0,0.25)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block">
                      Target Launch Window
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-neutral-700/80 text-white text-sm font-mono focus:outline-none focus:border-[#c5ff00] focus:shadow-[0_0_15px_rgba(197,255,0,0.25)] transition-all"
                    >
                      {TIMELINES.map((t) => (
                        <option key={t} value={t} className="bg-[#1C1C1C]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Message textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-neutral-400 block">
                    Project Overview & Key Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you are looking to build, any existing codebase/tech preferences, and the primary business problem to solve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-neutral-700/80 text-white placeholder-neutral-600 text-sm font-mono focus:outline-none focus:border-[#c5ff00] focus:shadow-[0_0_15px_rgba(197,255,0,0.25)] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                  <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c5ff00]" />
                    <span>Strict NDA & IP Protection Applied</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c5ff00] text-[#2F2F2F] font-mono font-semibold text-xs uppercase tracking-wider hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(197,255,0,0.45)] active:shadow-[0_0_35px_rgba(197,255,0,0.7)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Proposal...</span>
                    ) : (
                      <>
                        <span>Submit Project Scope</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Studio Channels (NO blue gradients, clean solid dark) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#222222] border border-neutral-700/80 space-y-6 hover:border-[#c5ff00]/40 transition-colors">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Direct Engineering Channels
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800 hover:border-[#c5ff00] hover:shadow-[0_0_15px_rgba(197,255,0,0.2)] transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#c5ff00]" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">NEW BUSINESS</span>
                    <span className="text-white group-hover:text-[#c5ff00]">{BRAND.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800">
                  <Phone className="w-4 h-4 text-[#3a00ff]" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">DIRECT DESK</span>
                    <span className="text-white">{BRAND.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800">
                  <MapPin className="w-4 h-4 text-[#c5ff00]" />
                  <div>
                    <span className="text-neutral-500 block text-[10px]">LOCATIONS</span>
                    <span className="text-white">{BRAND.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 space-y-2">
                <div className="text-white font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5ff00]" />
                  Sprint Availability Notice
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  To protect our 99.4% on-time sprint record, we limit active concurrent builds to four engineering client partnerships per quarter.
                </p>
              </div>
            </div>

            {/* Quick Consultation Call Card (Solid clean dark surface, NO blue gradient) */}
            <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-neutral-700 hover:border-[#c5ff00]/60 hover:shadow-[0_0_20px_rgba(197,255,0,0.15)] transition-all space-y-3">
              <span className="text-[10px] font-mono text-[#c5ff00] uppercase font-bold tracking-wider">
                Prefer a 20-min intro chat?
              </span>
              <p className="text-xs text-neutral-300">
                Book a high-level technical feasibility discussion directly with our principal architect.
              </p>
              <a
                href={`mailto:${BRAND.email}?subject=Intro%20Call%20Request`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#c5ff00] font-bold hover:underline"
              >
                <span>Schedule Feasibility Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
