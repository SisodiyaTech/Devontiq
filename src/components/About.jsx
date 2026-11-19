import React, { useState } from 'react';
import { Target, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/agencyData';

export default function About({ onContactClick }) {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#2F2F2F] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 01 // ABOUT DEVONTIQ ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              We Don't Build Commodity Websites.{' '}
              <span className="text-[#c5ff00]">We Engineer Digital Moats.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            Devontiq was founded on a simple conviction: modern businesses don't need more bloated agencies or sluggish offshore teams. They need a high-velocity technology partner capable of turning complex architectural ideas into sleek, scalable digital reality.
          </div>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#242424] border border-neutral-700/70 space-y-4 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-neutral-700 flex items-center justify-center text-[#c5ff00]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              To empower visionary founders and modern enterprises with world-class digital software, eliminating technical debt and engineering products built to scale from day one.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#242424] border border-neutral-700/70 space-y-4 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-neutral-700 flex items-center justify-center text-[#c5ff00]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              To be the globally recognized digital partner for modern technology ventures — setting the gold standard for software speed, aesthetic elegance, and enterprise reliability.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#242424] border border-neutral-700/70 space-y-4 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-neutral-700 flex items-center justify-center text-[#c5ff00]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">The Devontiq Standard</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Radical transparency, senior-level engineers on every sprint, zero vendor lock-in, and obsessive attention to detail from the first database migration to the final production deploy.
            </p>
          </div>
        </div>

        {/* Tailored Audience Solutions Interactive Explorer */}
        <div className="rounded-3xl bg-[#222222] border border-neutral-700 p-6 sm:p-8 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Audience Alignment
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Who We Engineer For
            </h3>
          </div>

          {/* Interactive Audience Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {TARGET_AUDIENCES.map((audience, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAudience(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                  activeAudience === idx
                    ? 'bg-[#2F2F2F] border-[#c5ff00] text-white hover:shadow-[0_0_20px_rgba(197,255,0,0.2)]'
                    : 'bg-[#1A1A1A] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:shadow-[0_0_15px_rgba(197,255,0,0.1)]'
                }`}
              >
                <div className="text-xs font-mono mb-1 text-[#c5ff00]">
                  0{idx + 1} // SEGMENT
                </div>
                <div className="font-semibold text-base text-white">
                  {audience.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Audience Details Box */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#1C1C1C] border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xl font-semibold text-white tracking-tight">
                {TARGET_AUDIENCES[activeAudience].title}
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {TARGET_AUDIENCES[activeAudience].description}
              </p>
              
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block">
                  Core Solution Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TARGET_AUDIENCES[activeAudience].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#c5ff00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
              <a
                href="#contact"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#3a00ff] text-white hover:bg-[#5D2EFA] hover:shadow-[0_0_25px_rgba(58,0,255,0.45)] active:shadow-[0_0_35px_rgba(58,0,255,0.7)] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
