import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const INSIGHTS = [
  {
    id: '01',
    date: 'OCT 2026',
    readTime: '4 min read',
    category: 'Architecture',
    title: 'Eliminating Latency: Architecting Real-Time Microservices with Go and WebSockets',
    excerpt: 'How we reduced P95 message delivery times from 850ms to 14ms for high-frequency trading dashboards.',
    tag: 'GO ENGINE'
  },
  {
    id: '02',
    date: 'NOV 2026',
    readTime: '6 min read',
    category: 'AI Engineering',
    title: 'Deterministic RAG: Why Vector Search Alone Fails Enterprise Compliance Audits',
    excerpt: 'A practical framework for grounding LLM generation with chunk attribution and deterministic verification.',
    tag: 'APPLIED AI'
  },
  {
    id: '03',
    date: 'NOV 2026',
    readTime: '3 min read',
    category: 'Design Systems',
    title: 'From Figma Tokens to Production React Components Without Code Drift',
    excerpt: 'Synchronizing design decisions directly into CI/CD pipelines to guarantee 1:1 fidelity across squads.',
    tag: 'DESIGN TOKENS'
  },
  {
    id: '04',
    date: 'DEC 2026',
    readTime: '5 min read',
    category: 'Cloud & Scale',
    title: 'Zero-Downtime Database Migrations in Distributed Multi-Tenant SaaS Systems',
    excerpt: 'Applying the expand-and-contract pattern to update critical relational schemas without disconnecting active users.',
    tag: 'DATABASE OPS'
  }
];

export default function Insights() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#282828] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 07 // INSIGHTS & NOTES (04) ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Engineering Notes.{' '}
              <span className="text-[#c5ff00]">From the Trenches.</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 max-w-xs">
            Deep technical architectural breakdowns, design system strategies, and engineering insights.
          </div>
        </div>

        {/* 2-Column Layout (NO blue gradients, clean editorial dark design, glow ONLY on hover) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Insight Rows */}
          <div className="lg:col-span-7 space-y-3">
            {INSIGHTS.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setHoveredIndex(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'bg-[#2F2F2F] border-[#c5ff00] hover:shadow-[0_0_25px_rgba(197,255,0,0.2)] active:shadow-[0_0_35px_rgba(197,255,0,0.35)] sm:translate-x-2'
                      : 'bg-[#202020] border-neutral-700/60 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(197,255,0,0.1)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-500 font-medium">{item.id} //</span>
                      <span className="text-[#c5ff00] uppercase font-medium">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className={`text-base sm:text-lg font-semibold ${
                    isHovered ? 'text-white' : 'text-neutral-200'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">Read Architectural Note</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${
                      isHovered ? 'text-[#c5ff00] translate-x-0.5 -translate-y-0.5' : 'text-neutral-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Container (Clean editorial dark surface, NO blue gradient) */}
          <div className="lg:col-span-5 h-[420px] rounded-3xl border border-neutral-700/80 p-8 relative overflow-hidden flex flex-col justify-between bg-[#1C1C1C] hover:border-[#c5ff00]/60 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)] transition-all duration-300">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* Top Insight Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#242424] text-[#c5ff00] text-xs font-mono border border-neutral-700">
                {INSIGHTS[hoveredIndex].category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {INSIGHTS[hoveredIndex].readTime}
              </span>
            </div>

            {/* Middle Display Typography */}
            <div className="relative z-10 space-y-3">
              <div className="text-6xl font-anton text-neutral-700 select-none">
                {INSIGHTS[hoveredIndex].id}
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                {INSIGHTS[hoveredIndex].title}
              </h4>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#c5ff00]" />
                <span>Devontiq Tech Digest</span>
              </div>
              <span className="text-[#c5ff00] font-medium">Open Article →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
