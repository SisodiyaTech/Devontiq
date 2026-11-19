import React, { useState, useEffect } from "react";
import { Menu, X, Clock } from "lucide-react";
import RollLink from "./RollLink";

export default function Navbar({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clockString, setClockString] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Live clock formatted like melon.studio (README.md §6.4)
    const updateClock = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setClockString(`${time} Global Remote`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "work", count: "6", href: "#projects" },
    { label: "services", count: "6", href: "#services" },
    { label: "process", count: "5", href: "#process" },
    { label: "insights", count: "4", href: "#insights" },
    { label: "about", href: "#about" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2F2F2F]/95 backdrop-blur-md border-b border-neutral-700/60 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup using official provided logo files (icon + text logo) */}
        <a href="#" className="flex items-center gap-3 group select-none">
          <img
            src="/brand/devontiq-lockup.svg"
            alt="Devontiq Icon"
            className="w-[500px] h-[500px] sm:w-10 sm:h-10 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(197,255,0,0.45)] group-active:scale-95 shrink-0"
          />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1F1F1F]/80 px-4 py-1.5 rounded-full border border-neutral-700/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-mono lowercase text-neutral-300 hover:text-[#c5ff00] transition-colors rounded-full hover:bg-neutral-800/80 hover:shadow-[0_0_12px_rgba(197,255,0,0.15)] flex items-center gap-1 group"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action & Live Studio Clock */}
        <div className="hidden md:flex items-center gap-4">
          {/* Live Studio Clock */}

          {/* RollLink CTA */}
          <RollLink href="#contact" onClick={onContactClick} variant="lime">
            Start a project
          </RollLink>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <RollLink
            href="#contact"
            onClick={onContactClick}
            variant="lime"
            arrow={false}
          >
            Talk
          </RollLink>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 hover:shadow-[0_0_15px_rgba(197,255,0,0.2)] transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#242424] border-b border-neutral-700 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#c5ff00]" />
              <span>Studio Clock</span>
            </span>
            <span className="text-neutral-300">{clockString}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#2F2F2F] border border-neutral-700/60 text-xs font-mono lowercase text-neutral-200 hover:text-[#c5ff00] hover:border-[#c5ff00]/40 hover:shadow-[0_0_15px_rgba(197,255,0,0.15)] flex items-center justify-between transition-all"
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-xs text-neutral-500">
                    ({link.count})
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <RollLink
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onContactClick) onContactClick();
              }}
              variant="lime"
              className="w-full justify-center py-3.5"
            >
              Start a project
            </RollLink>
          </div>
        </div>
      )}
    </header>
  );
}
