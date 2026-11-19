import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function Process({ onContactClick }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#282828] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 04 // HOW WE WORK (05 PHASES) ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Predictable Cadence.{' '}
              <span className="text-[#c5ff00]">Flawless Execution.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            We operate through disciplined two-week agile sprints. You receive weekly video updates, continuous access to private staging URLs, and complete visibility into git commits.
          </div>
        </div>

        {/* Horizontal Step Navigation Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isLastOdd = idx === PROCESS_STEPS.length - 1;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                  isLastOdd ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  isActive
                    ? 'bg-[#2F2F2F] border-[#c5ff00] hover:shadow-[0_0_20px_rgba(197,255,0,0.2)]'
                    : 'bg-[#1E1E1E] border-neutral-800 hover:border-neutral-700 hover:shadow-[0_0_15px_rgba(197,255,0,0.1)] text-neutral-400'
                }`}
              >
                <div className={`text-xs font-mono font-medium mb-1 ${isActive ? 'text-[#c5ff00]' : 'text-neutral-500'}`}>
                  PHASE {step.step}
                </div>
                <div className={`text-xs sm:text-sm font-medium truncate tracking-tight ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {step.title.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Card */}
        <div className="rounded-3xl bg-[#202020] border border-neutral-700/80 p-8 md:p-12 relative overflow-hidden hover:border-[#c5ff00]/40 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#3a00ff] text-[#c5ff00] font-mono font-semibold text-lg flex items-center justify-center border border-[#c5ff00]/40">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c5ff00]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Duration: {PROCESS_STEPS[activeStep].duration}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-0.5 tracking-tight">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Tangible Outcomes */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Verified Phase Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].outcomes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#2A2A2A] border border-neutral-700/60 text-xs font-mono text-neutral-200 hover:border-[#c5ff00]/40 hover:shadow-[0_0_12px_rgba(197,255,0,0.15)] transition-all">
                      <CheckCircle2 className="w-4 h-4 text-[#c5ff00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action & Interactive Preview */}
            <div className="lg:col-span-5 bg-[#171717] rounded-2xl border border-neutral-800 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-[#c5ff00]">
                  <ShieldCheck className="w-4 h-4" />
                  Sprint Quality Gate
                </span>
                <span>Active Sprint</span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Staging Environment:</span>
                  <span className="text-white">Continuous Deployment</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Code Reviews:</span>
                  <span className="text-[#c5ff00]">Senior Pair-Review Mandatory</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Client Check-in:</span>
                  <span className="text-white">Every 14 Days Live Demo</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={onContactClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#c5ff00] text-[#2F2F2F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(197,255,0,0.45)] active:shadow-[0_0_35px_rgba(197,255,0,0.7)] transition-all"
                >
                  <span>Kickoff Phase 01</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
