import React from 'react';
import { ShieldCheck, Zap, Cpu, Code2 } from 'lucide-react';
import { BRAND } from '../data/agencyData';
import RollLink from './RollLink';

export default function Hero({ onContactClick }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Copy with GSAP Reveal Hooks */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Live Availability Status Pill */}
            <div data-hero-line className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#242424] border border-neutral-700/80 hover:border-[#c5ff00]/60 hover:shadow-[0_0_15px_rgba(197,255,0,0.2)] transition-all">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c5ff00]"></span>
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-neutral-300">
                {BRAND.status}
              </span>
            </div>

            {/* Main Headline with Anton Large Typography */}
            <div className="space-y-3">
              <h1 data-hero-line className="text-5xl sm:text-7xl xl:text-8xl font-anton tracking-wide text-white leading-[0.98] uppercase">
                Building <br className="hidden sm:inline" />
                <span className="text-[#c5ff00]">
                  What's Next
                </span>{' '}
                in Digital Products.
              </h1>
              <p data-hero-line className="text-base sm:text-lg text-neutral-300 font-normal max-w-2xl leading-relaxed pt-2">
                Devontiq is an elite digital engineering agency. We partner with ambitious founders and forward-thinking enterprises to design, engineer, and scale custom software, modern web apps, and intelligent cloud systems.
              </p>
            </div>

            {/* CTAs with melon.studio Text-Roll Animation (Glow only on hover/click) */}
            <div data-hero-line className="flex flex-wrap items-center gap-4 pt-2">
              <RollLink
                href="#contact"
                onClick={onContactClick}
                variant="lime"
                className="py-3.5 px-7"
              >
                Start a project
              </RollLink>

              <RollLink
                href="#projects"
                variant="outline"
                className="py-3.5 px-6"
              >
                Selected work (06)
              </RollLink>
            </div>

            {/* Key Differentiator Badges */}
            <div data-hero-line className="pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2 group hover:text-[#c5ff00] transition-colors cursor-default">
                <ShieldCheck className="w-4 h-4 text-[#c5ff00]" />
                <span>100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#c5ff00] transition-colors cursor-default">
                <Zap className="w-4 h-4 text-[#3a00ff]" />
                <span>Sub-100ms Speed</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#c5ff00] transition-colors cursor-default">
                <Cpu className="w-4 h-4 text-[#c5ff00]" />
                <span>Zero Tech Debt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Console */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl bg-[#1E1E1E] border border-neutral-700/80 p-6 font-mono text-xs overflow-hidden group hover:border-[#c5ff00]/60 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)] transition-all duration-300">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#c5ff00] inline-block" />
                  <span className="ml-2 text-neutral-500 text-[11px]">devontiq.runtime.sh</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-[#242424] text-[#c5ff00] text-[10px] border border-neutral-700 group-hover:border-[#c5ff00]/40 transition-colors">
                  CLUSTER: READY
                </div>
              </div>

              {/* Terminal Code & Diagnostic Metrics */}
              <div className="space-y-3.5 text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">// Stack Target:</span>
                  <span className="text-[#c5ff00]">Full-Stack Cloud Edge</span>
                </div>

                <div className="bg-[#141414] rounded-lg p-3 border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Engineering Standard</span>
                    <span className="text-white font-semibold">Strict Clean Architecture</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Typography Suite</span>
                    <span className="text-[#c5ff00]">Anton Display + General Sans</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Cloud Infrastructure</span>
                    <span className="text-white font-semibold">AWS + Cloudflare Edge CDN</span>
                  </div>
                </div>

                {/* Live Diagnostic Telemetry */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-3 rounded-lg bg-[#242424] border border-neutral-800 hover:border-[#c5ff00]/40 hover:shadow-[0_0_15px_rgba(197,255,0,0.15)] transition-all">
                    <span className="text-[10px] text-neutral-500 block uppercase">P95 Response</span>
                    <span className="text-lg font-bold text-[#c5ff00]">14.2 ms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#242424] border border-neutral-800 hover:border-[#c5ff00]/40 hover:shadow-[0_0_15px_rgba(197,255,0,0.15)] transition-all">
                    <span className="text-[10px] text-neutral-500 block uppercase">Code Coverage</span>
                    <span className="text-lg font-bold text-white">98.6%</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-[#c5ff00]">✓</span>
                    <span>Continuous automated CI/CD pipeline: PASS</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#3a00ff]">●</span>
                    <span>100% Client ownership guarantee attached</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="absolute -bottom-4 left-2 sm:-left-4 bg-[#242424] border border-neutral-700 px-4 py-2 rounded-xl flex items-center gap-3 hover:border-[#c5ff00]/60 hover:shadow-[0_0_20px_rgba(197,255,0,0.2)] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#c5ff00] text-[#2F2F2F] flex items-center justify-center font-medium">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-medium text-white">Anton Large Typography</div>
                <div className="text-[10px] text-[#c5ff00]">GSAP + Lenis Engine</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
