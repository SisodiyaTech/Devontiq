import React, { useState } from 'react';
import { FAQS } from '../data/agencyData';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ({ onContactClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#282828] relative border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
            <span>[ 08 // FREQUENTLY ASKED QUESTIONS ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
            Clarity Before <span className="text-[#c5ff00]">Commitment.</span>
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            Everything you need to know about our engineering standards, pricing structures, IP ownership, and sprint cadences.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#222222] border-[#c5ff00]/60 hover:shadow-[0_0_20px_rgba(197,255,0,0.15)]'
                    : 'bg-[#202020] border-neutral-700/60 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(197,255,0,0.1)]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#c5ff00] font-medium">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-[#c5ff00] text-[#2F2F2F]' : 'bg-[#2F2F2F] text-neutral-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/80 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-400">
          Have an architectural question not addressed here?{' '}
          <a
            href="#contact"
            onClick={onContactClick}
            className="text-[#c5ff00] underline hover:text-white transition-colors ml-1"
          >
            Ask our lead engineering partner directly →
          </a>
        </div>

      </div>
    </section>
  );
}
