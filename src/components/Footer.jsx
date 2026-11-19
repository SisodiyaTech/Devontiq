import React, { useState, useEffect } from "react";
import { Clock, Disc3 } from "lucide-react";
import { BRAND, SERVICES } from "../data/agencyData";
import RollLink from "./RollLink";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.059-2.73-.559-5.293-.232.063-.146.12-.294.18-.442 1.6-4.004 3.12-4.62 3.183-.64zm-5.14-2.274c.058.12.115.242.17.366-1.57 3.92-3.07 4.54-3.13.62a8.53 8.53 0 012.96-1.986zm-4.708 1.54c.04.07.08.14.12.21-1.39 3.51-2.73 4.09-2.79.55a8.57 8.57 0 012.67-1.76zm-6.22 5.09c.28.06 2.58.55 5.06.26-.06.14-.11.28-.17.42-1.6 4-3.12 4.62-3.18.64a8.49 8.49 0 01-1.71-5.32zm3.56 7.424c.06-.14.12-.28.18-.42 1.58-3.95 3.09-4.57 3.15-.62a8.55 8.55 0 01-3.33 2.04zm4.99-1.47c-.06.14-.12.28-.18.42-1.58 3.95-3.09 4.57-3.15.62a8.56 8.56 0 013.33-2.04z"
      />
    </svg>
  );
}

const socialIcons = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Dribbble: DribbbleIcon,
};

export default function Footer() {
  const [clockString, setClockString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setClockString(`${time} Global Remote`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#1C1C1C] text-neutral-300 font-mono text-xs border-t border-neutral-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Footer Brand Section featuring official text logo from files directory */}
        <div className="pb-16 mb-16 border-b border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#c5ff00] tracking-widest block">
                [ LET'S BUILD WHAT'S NEXT ]
              </span>
              <img
                src="/brand/devontiq-text-clean.svg"
                alt="Devontiq Flagship Wordmark"
                className="h-10 sm:h-16 lg:h-24 w-auto max-w-full object-contain hover:drop-shadow-[0_0_25px_rgba(197,255,0,0.45)] transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <RollLink
                href="#contact"
                variant="lime"
                className="py-4 px-8 text-sm"
              >
                Start a project
              </RollLink>
              <span className="text-neutral-500 text-xs font-mono">
                Open to select product builds
              </span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Col using official lockup logo from files directory */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 group select-none">
              <img
                src="/brand/devontiq-icon-clean.svg"
                alt="Devontiq Official Icon"
                className="w-10 h-10 object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(197,255,0,0.45)] transition-all"
              />
              <img
                src="/brand/devontiq-text-clean.svg"
                alt="Devontiq Official Text Logo"
                className="h-6 w-auto object-contain group-hover:drop-shadow-[0_0_10px_rgba(197,255,0,0.35)] transition-all"
              />
            </a>

            <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-sm leading-relaxed">
              A modern digital engineering studio. We partner with visionaries
              to craft scalable software, high-velocity web apps, and
              intelligent platforms with Lenis smooth scrolling and GSAP motion.
            </p>
          </div>

          {/* Capabilities Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-medium text-white uppercase tracking-wider block">
              Capabilities (06)
            </span>
            <ul className="space-y-2.5 text-neutral-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-[#c5ff00] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <span className="text-neutral-600 group-hover:text-[#c5ff00] text-[10px] font-mono">
                      {s.num}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-medium text-white uppercase tracking-wider block">
              Index
            </span>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  work(6)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  services(6)
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  process(5)
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  insights(4)
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  faq
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#c5ff00] transition-colors"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Centered Social Icons (Glow only on hover) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-neutral-500 text-[11px]">{BRAND.copyright}</div>

          <div className="flex items-center gap-4">
            {BRAND.socials.map((soc) => {
              const Icon = socialIcons[soc.icon] || GithubIcon;
              return (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-full bg-[#242424] border border-neutral-700/80 text-neutral-400 hover:text-[#c5ff00] hover:border-[#c5ff00] hover:shadow-[0_0_15px_rgba(197,255,0,0.3)] transition-all duration-200 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
