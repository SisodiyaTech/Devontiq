import React from 'react';
import { STATS } from '../data/agencyData';

const TECH_STACK = [
  "React 19", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", 
  "PostgreSQL", "Supabase", "Docker", "Kubernetes", "AWS Cloud", "GraphQL", 
  "FastAPI", "Pinecone Vector DB", "LangChain", "Claude API", "Redis"
];

export default function MarqueeStats() {
  return (
    <section className="py-12 border-y border-neutral-800 bg-[#252525] relative overflow-hidden">
      {/* Continuous Marquee Ticker */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#252525] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#252525] to-transparent z-10 pointer-events-none" />
        
        <div className="inline-flex animate-marquee items-center gap-8 font-mono text-xs uppercase tracking-widest text-neutral-400">
          {[...TECH_STACK, ...TECH_STACK].map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="hover:text-[#c5ff00] transition-colors">{item}</span>
              <span className="text-[#3a00ff] font-bold">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Core Quantitative Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#2F2F2F] border border-neutral-700/60 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.18)] active:shadow-[0_0_35px_rgba(197,255,0,0.3)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-2">
                <div className="text-3xl lg:text-5xl font-anton tracking-wide text-[#c5ff00] group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  {stat.label}
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {stat.helper}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
