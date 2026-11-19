import React from 'react';
import { INDUSTRIES } from '../data/agencyData';
import { Landmark, HeartPulse, Layers, ShoppingBag, Bot, Truck, ArrowUpRight } from 'lucide-react';

const iconsMap = {
  Landmark,
  HeartPulse,
  Layers,
  ShoppingBag,
  Bot,
  Truck
};

export default function Industries({ onContactClick }) {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#282828] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 06 // VERTICALS WE SERVE (06) ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Domain Expertise.{' '}
              <span className="text-[#c5ff00]">Specialized Architectures.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            We adapt our engineering frameworks to regulatory mandates, security standards, and user ergonomics across critical global industries.
          </div>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconsMap[ind.icon] || Layers;

            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#222222] border border-neutral-700/70 hover:border-[#c5ff00]/60 hover:shadow-[0_0_25px_rgba(197,255,0,0.18)] active:shadow-[0_0_35px_rgba(197,255,0,0.3)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#2F2F2F] border border-neutral-700 flex items-center justify-center text-[#c5ff00] group-hover:bg-[#3a00ff] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{idx + 1} // INDUSTRY
                    </span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#c5ff00] transition-colors mt-0.5 tracking-tight">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-[#c5ff00] transition-colors">
                  <span>Explore Industry Solutions</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
