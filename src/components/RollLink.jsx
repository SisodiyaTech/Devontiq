import React, { useRef } from 'react';
import gsap from 'gsap';

export default function RollLink({
  children,
  href = '#',
  onClick,
  className = '',
  arrow = true,
  variant = 'default', // 'default', 'lime', 'blue', 'outline'
  external = false,
  target,
  rel
}) {
  const innerRef = useRef(null);

  const handleMouseEnter = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      yPercent: -50,
      duration: 0.35,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      yPercent: 0,
      duration: 0.35,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  // Only glow on hover or active click! Zero glow when idle.
  let baseStyle = 'inline-flex items-center gap-2 group transition-all duration-200 select-none cursor-pointer ';
  if (variant === 'lime') {
    baseStyle += 'px-5 py-2.5 rounded-full bg-[#c5ff00] text-[#2F2F2F] font-mono font-semibold text-xs uppercase tracking-wider hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(197,255,0,0.45)] active:shadow-[0_0_35px_rgba(197,255,0,0.7)] ';
  } else if (variant === 'blue') {
    baseStyle += 'px-5 py-2.5 rounded-full bg-[#3a00ff] text-white font-mono font-semibold text-xs uppercase tracking-wider hover:bg-[#5D2EFA] hover:shadow-[0_0_25px_rgba(58,0,255,0.45)] active:shadow-[0_0_35px_rgba(58,0,255,0.7)] ';
  } else if (variant === 'outline') {
    baseStyle += 'px-5 py-2.5 rounded-full bg-[#242424] text-white border border-neutral-700 font-mono text-xs font-semibold hover:border-[#c5ff00] hover:text-[#c5ff00] hover:shadow-[0_0_20px_rgba(197,255,0,0.25)] ';
  } else {
    baseStyle += 'font-mono text-xs text-neutral-400 hover:text-[#c5ff00] ';
  }

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyle} ${className}`}
      target={external ? '_blank' : target}
      rel={external ? 'noreferrer noopener' : rel}
    >
      <span className="inline-block overflow-hidden h-[1.35em] leading-[1.35em]">
        <span ref={innerRef} className="flex flex-col will-change-transform">
          <span>{children}</span>
          <span aria-hidden="true" className={variant === 'default' ? 'text-[#c5ff00]' : ''}>
            {children}
          </span>
        </span>
      </span>

      {arrow && (
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      )}
    </a>
  );
}
