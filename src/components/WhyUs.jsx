import React from 'react';
import { COMPARISONS } from '../data/agencyData';
import { Check, X, ShieldAlert, Award } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#2F2F2F] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 03 // WHY DEVONTIQ ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Engineered Differently.{' '}
              <span className="text-[#c5ff00]">By Design.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            Most digital agencies sell high-level presentations and quietly outsource execution. Devontiq operates as a disciplined software engineering shop where senior builders are in the code every single day.
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-[#242424] border border-neutral-700/80 overflow-hidden shadow-2xl">
          {/* Header Row (Hidden on mobile cards, displayed on md+ viewports) */}
          <div className="hidden md:grid md:grid-cols-12 border-b border-neutral-700/80 bg-[#1A1A1A] text-xs font-mono uppercase tracking-wider text-neutral-400 p-5 md:p-6">
            <div className="md:col-span-4 font-semibold text-white">
              Critical Dimension
            </div>
            <div className="md:col-span-4 text-neutral-400 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-neutral-400" />
              <span>Legacy Agency / Outsourced</span>
            </div>
            <div className="md:col-span-4 text-[#c5ff00] flex items-center gap-2 font-semibold">
              <Award className="w-4 h-4 text-[#c5ff00]" />
              <span>Devontiq Engineered Standard</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-neutral-800/80">
            {COMPARISONS.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 hover:bg-[#282828] transition-colors gap-4 items-center"
              >
                {/* Aspect */}
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-[#c5ff00] block mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {item.aspect}
                  </h4>
                </div>

                {/* Traditional */}
                <div className="md:col-span-4 text-xs sm:text-sm text-neutral-400 flex items-start gap-3 bg-[#1F1F1F]/60 p-3.5 rounded-xl border border-neutral-800/80">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                {/* Devontiq Standard */}
                <div className="md:col-span-4 text-xs sm:text-sm text-neutral-200 flex items-start gap-3 bg-[#1F1F1F] p-3.5 rounded-xl border border-[#3a00ff]/60 hover:border-[#c5ff00] hover:shadow-[0_0_20px_rgba(197,255,0,0.2)] transition-all">
                  <Check className="w-4 h-4 text-[#c5ff00] shrink-0 mt-0.5 font-bold" />
                  <span className="font-medium text-white">{item.devontiq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars Below Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-[#242424] border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5ff00]/10 border border-[#c5ff00]/30 flex items-center justify-center text-[#c5ff00] font-mono font-semibold text-lg">
              01
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">Zero Scope Games</h5>
              <p className="text-xs text-neutral-400 mt-0.5">Fixed milestones and transparent hour tracking.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3a00ff]/20 border border-[#3a00ff]/40 flex items-center justify-center text-[#c5ff00] font-mono font-semibold text-lg">
              02
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">Senior Builders Only</h5>
              <p className="text-xs text-neutral-400 mt-0.5">No bait-and-switch with junior contractors.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5ff00]/10 border border-[#c5ff00]/30 flex items-center justify-center text-[#c5ff00] font-mono font-semibold text-lg">
              03
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">Immediate Momentum</h5>
              <p className="text-xs text-neutral-400 mt-0.5">First staging build deployed within Sprint 1.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
