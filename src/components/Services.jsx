import React, { useState } from "react";
import { SERVICES } from "../data/agencyData";
import {
  CheckCircle,
  Clock,
  ArrowUpRight,
  Code,
  Layers,
  Smartphone,
  Sparkles,
  Monitor,
  Cpu,
} from "lucide-react";

const serviceIcons = {
  "custom-software": Cpu,
  "web-apps-saas": Layers,
  "digital-product-design": Code,
  "modern-websites": Monitor,
  "mobile-apps": Smartphone,
  "ai-solutions": Sparkles,
};

export default function Services({ onContactClick, onSelectService }) {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);

  const activeService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const IconComponent = serviceIcons[activeService.id] || Cpu;

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#282828] relative border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 02 // CAPABILITIES & SERVICES (06) ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Full-Spectrum{" "}
              <span className="text-[#c5ff00]">Digital Engineering.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            We provide specialized technology squads covering everything from
            low-latency backend systems and enterprise web apps to modern AI
            agent pipelines.
          </div>
        </div>

        {/* 2-Column Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const ItemIcon = serviceIcons[service.id] || Cpu;
              const isSelected = service.id === selectedServiceId;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#2F2F2F] border-[#c5ff00] hover:shadow-[0_0_20px_rgba(197,255,0,0.2)] translate-x-1.5"
                      : "bg-[#222222] border-neutral-700/60 hover:border-neutral-600 hover:bg-[#252525] hover:shadow-[0_0_15px_rgba(197,255,0,0.1)]"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isSelected
                        ? "bg-[#3a00ff] text-[#c5ff00]"
                        : "bg-[#1C1C1C] text-neutral-400"
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500 font-semibold">
                        {service.num} // {service.category}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c5ff00]/10 text-[#c5ff00] border border-[#c5ff00]/30 uppercase">
                          Viewing
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-base font-semibold mt-1 ${isSelected ? "text-white" : "text-neutral-300"}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Service Specification Panel */}
          <div className="lg:col-span-7 bg-[#202020] border border-neutral-700/90 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden lg:sticky lg:top-28 hover:border-[#c5ff00]/40 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)] transition-all duration-300">
            <div className="relative z-10 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3a00ff] flex items-center justify-center text-[#c5ff00] border border-[#c5ff00]/30">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#c5ff00] uppercase tracking-wider block">
                      {activeService.num} // {activeService.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-neutral-800 text-xs font-mono text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-[#c5ff00]" />
                  <span>{activeService.deliverableTime}</span>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Highlights & Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Core Engineering Capabilities:
                </span>
                <div className="space-y-2.5">
                  {activeService.highlights.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#c5ff00] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Preferred Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#2F2F2F] border border-neutral-700 text-xs font-mono text-neutral-200 hover:border-[#c5ff00] hover:shadow-[0_0_10px_rgba(197,255,0,0.2)] transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Service Scope CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-neutral-400">
                  <span className="text-[#c5ff00]">●</span> Dedicated senior
                  engineers allocated
                </div>

                <a
                  href="#contact"
                  onClick={() => {
                    if (onSelectService) onSelectService(activeService.title);
                    if (onContactClick) onContactClick();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#c5ff00] text-[#2F2F2F] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(197,255,0,0.45)] active:shadow-[0_0_35px_rgba(197,255,0,0.7)] transition-all duration-300 active:scale-95"
                >
                  <span>Build with this Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
