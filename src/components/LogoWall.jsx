import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CLIENTS = [
  { name: 'Nova Financial', category: 'FinTech', tag: 'Case Study' },
  { name: 'Aurora Health', category: 'HealthTech', tag: 'Case Study' },
  { name: 'Kinetix AI', category: 'Applied AI', tag: 'Case Study' },
  { name: 'Veloce Luxury', category: 'E-Commerce', tag: 'Case Study' },
  { name: 'Strata Cloud', category: 'DevOps / SaaS', tag: 'Case Study' },
  { name: 'Pulse Freight', category: 'Logistics', tag: 'Case Study' },
  { name: 'HyperScale Labs', category: 'Cloud Infrastructure' },
  { name: 'Metrix Data', category: 'Analytics Engine' },
  { name: 'CipherZero', category: 'Cybersecurity' },
  { name: 'OmniChain', category: 'Supply Systems' },
  { name: 'Vanguard Retail', category: 'Omnichannel' },
];

export default function LogoWall({ onContactClick }) {
  return (
    <section className="py-20 md:py-28 bg-[#242424] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in melon.studio editorial style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-[#c5ff00] mb-2 uppercase tracking-widest">
              Partnerships & Engagements
            </div>
            <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Trusted by Ambitious Brands
            </h3>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Selected product collaborations & client squads
          </div>
        </div>

        {/* Dense Logo Wall Grid (Glow ONLY on hover, NO blue gradients) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#1C1C1C] border border-neutral-800 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.15)] active:shadow-[0_0_35px_rgba(197,255,0,0.3)] transition-all duration-300 flex flex-col justify-between min-h-[120px] relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>0{idx + 1}</span>
                {client.tag && (
                  <span className="text-[#c5ff00] bg-[#242424] px-2 py-0.5 rounded border border-neutral-700 group-hover:border-[#c5ff00]/40 transition-colors">
                    {client.tag}
                  </span>
                )}
              </div>

              <div className="my-auto pt-2">
                <span className="text-base sm:text-lg font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 block tracking-tight">
                  {client.name}
                </span>
                <span className="text-xs font-mono text-neutral-500 group-hover:text-[#c5ff00] transition-colors duration-200">
                  {client.category}
                </span>
              </div>
            </div>
          ))}

          {/* The signature melon.studio slot: "This spot's open. Let's talk" (Glow only on hover) */}
          <a
            href="#contact"
            onClick={onContactClick}
            className="group p-6 rounded-2xl bg-[#1E1E1E] border-2 border-dashed border-[#c5ff00]/60 hover:border-[#c5ff00] hover:bg-[#262626] hover:shadow-[0_0_25px_rgba(197,255,0,0.35)] active:shadow-[0_0_35px_rgba(197,255,0,0.5)] transition-all duration-300 flex flex-col justify-between min-h-[120px] text-left cursor-pointer"
          >
            <div className="text-[10px] font-mono text-[#c5ff00] font-medium uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff00]" />
              AVAILABLE SLOT
            </div>

            <div className="my-auto pt-2">
              <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#c5ff00] transition-colors block tracking-tight">
                This spot's open.
              </span>
              <span className="text-xs font-mono text-neutral-300 group-hover:text-white flex items-center gap-1 mt-0.5">
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#c5ff00]" />
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
