import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getLenis } from '../lib/lenis';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const percentRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.stop(); // Lock scroll while loading

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (lenis) lenis.start();
          if (onComplete) onComplete();
        }
      });

      tl.to(counter, {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent =
              String(Math.round(counter.value)).padStart(3, '0') + '%';
          }
          if (counter.value > 60 && statusRef.current) {
            statusRef.current.textContent = 'SYSTEM / READY';
          }
        }
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'expo.inOut'
      })
      .from('[data-hero-line]', {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.35');
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      data-loader
      className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#2F2F2F] text-neutral-100 will-change-transform select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c5ff00]" />
          <span ref={statusRef}>DEVONTIQ SYSTEM / LOADING</span>
        </div>
        <span className="hidden sm:inline">Building What's Next</span>
      </div>

      {/* Middle Official Logo & Text from files directory */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="flex items-center gap-4 mb-3">
          <img
            src="/brand/devontiq-icon-clean.svg"
            alt="Devontiq Official Icon"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover:drop-shadow-[0_0_20px_rgba(197,255,0,0.5)] transition-all duration-300"
          />
          <img
            src="/brand/devontiq-text-clean.svg"
            alt="Devontiq"
            className="h-8 sm:h-12 md:h-14 w-auto max-w-[65vw] object-contain hover:drop-shadow-[0_0_15px_rgba(197,255,0,0.4)] transition-all duration-300"
          />
        </div>
        <p className="text-xs md:text-sm font-mono text-neutral-400 tracking-wider">
          Digital Agency • Technology • Software Engineering
        </p>
      </div>

      {/* Bottom Counter with Anton */}
      <div className="flex items-end justify-between border-t border-neutral-700/60 pt-6 font-mono">
        <div className="text-xs text-neutral-400 flex items-center gap-2">
          <span className="text-[#c5ff00]">●</span>
          <span>INITIALIZING DIGITAL ENGINE</span>
        </div>
        <div
          ref={percentRef}
          data-loader-percent
          className="text-6xl md:text-8xl font-anton tracking-wide text-[#c5ff00]"
        >
          000%
        </div>
      </div>
    </div>
  );
}
