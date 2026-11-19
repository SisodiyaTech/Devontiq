import React, { useState, useRef } from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { ArrowLeft, ArrowRight, Quote, Star, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const isAnimating = useRef(false);

  const goTo = (nextIndex, dir = 1) => {
    if (isAnimating.current || !slideRef.current) return;
    isAnimating.current = true;

    gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          slideRef.current,
          { x: 30 * dir, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => {
              isAnimating.current = false;
            }
          }
        );
      }
    }).to(slideRef.current, {
      x: -30 * dir,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in'
    });
  };

  const prevSlide = () => {
    const next = currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    goTo(next, -1);
  };

  const nextSlide = () => {
    const next = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;
    goTo(next, 1);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#2F2F2F] relative border-b border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 08 // CLIENT PERSPECTIVES ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Trusted by Builders.{' '}
              <span className="text-[#c5ff00]">Verified by Results.</span>
            </h2>
          </div>
          
          {/* Slider Controls with 01/03 Counter (README.md §6.9) */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-neutral-400">
              <span className="text-[#c5ff00] font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              /{String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#242424] text-neutral-300 hover:text-white hover:bg-[#3a00ff] hover:shadow-[0_0_15px_rgba(58,0,255,0.4)] border border-neutral-700 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#242424] text-neutral-300 hover:text-white hover:bg-[#3a00ff] hover:shadow-[0_0_15px_rgba(58,0,255,0.4)] border border-neutral-700 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Next quote"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Big Editorial Quote Card with GSAP Transition */}
        <div
          ref={slideRef}
          className="rounded-3xl bg-[#242424] border border-neutral-700/80 p-8 sm:p-14 relative min-h-[380px] flex flex-col justify-between will-change-transform hover:border-[#c5ff00]/40 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)] transition-all duration-300"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between text-neutral-500">
              <div className="w-12 h-12 rounded-xl bg-[#3a00ff]/20 text-[#c5ff00] flex items-center justify-center border border-[#3a00ff]/40">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-[#c5ff00]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5ff00]" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white leading-relaxed">
              "{current.quote}"
            </blockquote>
          </div>

          <div className="pt-8 mt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {current.author}
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-400">
                {current.role} • <span className="text-[#c5ff00]">{current.company}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-neutral-700 text-xs font-mono text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5ff00]" />
              <span>Project: {current.project}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
