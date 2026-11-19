import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { getLenis } from '../lib/lenis';

export default function CaseStudyModal({ project, onClose, onContactClick }) {
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.stop();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#242424] border border-neutral-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-neutral-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1A1A1A] text-neutral-400 hover:text-white border border-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-3 pb-6 border-b border-neutral-800">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#3a00ff]/30 text-[#c5ff00] border border-[#3a00ff]/60 uppercase font-medium">
              {project.category}
            </span>
            <span className="text-neutral-400">{project.year}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300 font-medium">{project.client}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Quantified Outcomes / Metrics Banner */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#1A1A1A] border border-neutral-800 text-center">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                {m.label}
              </span>
              <span className="text-2xl font-semibold font-mono text-[#c5ff00]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Architectural Challenge & Solution */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-neutral-800/80 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-medium flex items-center gap-2">
              <span>●</span> The Architectural Challenge
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-neutral-800/80 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#c5ff00] font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5ff00]" /> Devontiq Engineering Solution
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-neutral-400 block">
              Production Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#2F2F2F] border border-neutral-700 text-xs font-mono text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => {
              onClose();
              if (onContactClick) onContactClick();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#c5ff00] text-[#2F2F2F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(197,255,0,0.45)] active:shadow-[0_0_35px_rgba(197,255,0,0.7)] transition-all w-full sm:w-auto"
          >
            <span>Request Similar Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
