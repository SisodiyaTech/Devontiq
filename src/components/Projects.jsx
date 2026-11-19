import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import RollLink from './RollLink';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "FinTech & Web App", "HealthTech & Mobility", "AI & Automation", "Modern E-Commerce", "Cloud SaaS"];

export default function Projects({ onContactClick }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));

  useEffect(() => {
    // GSAP ScrollTrigger card reveals
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('[data-project-card]');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section ref={containerRef} id="projects" className="py-24 md:py-32 bg-[#2F2F2F] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-neutral-700 text-xs font-mono text-[#c5ff00]">
              <span>[ 05 // SELECTED WORK (06) ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-wide text-white uppercase leading-[0.98]">
              Engineered for Scale.{' '}
              <span className="text-[#c5ff00]">Proven in Production.</span>
            </h2>
          </div>
          <div className="md:max-w-md text-neutral-400 text-sm leading-relaxed font-sans">
            Every project we ship is a testament to rigorous architecture, sub-second performance, and intuitive user experience.
          </div>
        </div>

        {/* Filter Pills (Glow only on hover/active) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#c5ff00] text-[#2F2F2F] font-semibold hover:shadow-[0_0_20px_rgba(197,255,0,0.4)] active:shadow-[0_0_25px_rgba(197,255,0,0.6)]'
                  : 'bg-[#222222] text-neutral-400 border border-neutral-700/60 hover:text-white hover:border-[#c5ff00]/60 hover:shadow-[0_0_15px_rgba(197,255,0,0.2)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (Clean, elegant, non-bulky headings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-project-card
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#242424] border border-neutral-700/70 hover:border-[#c5ff00]/60 hover:shadow-[0_0_30px_rgba(197,255,0,0.2)] active:shadow-[0_0_40px_rgba(197,255,0,0.35)] p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Thumbnail / Architectural Visual */}
              <div
                className="h-48 rounded-2xl bg-[#1A1A1A] border border-neutral-700/60 p-5 flex flex-col justify-between relative overflow-hidden mb-6 group-hover:border-[#c5ff00]/40 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#242424] text-[#c5ff00] border border-neutral-700 font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {project.client}
                  </div>
                  <div className="text-xs font-mono text-neutral-300">
                    {project.metrics[0].label}: <span className="text-[#c5ff00] font-medium">{project.metrics[0].value}</span>
                  </div>
                </div>

                {/* Corner Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#2F2F2F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#c5ff00]/60 group-hover:bg-[#c5ff00] group-hover:text-[#2F2F2F] group-hover:shadow-[0_0_15px_rgba(197,255,0,0.4)]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Clean Refined Description */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#c5ff00] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[11px] font-mono text-neutral-400 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[11px] font-mono text-neutral-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#c5ff00] font-medium">
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Banner below Projects */}
        <div className="mt-16 p-8 rounded-3xl bg-[#222222] border border-neutral-700/80 hover:border-[#c5ff00]/40 hover:shadow-[0_0_30px_rgba(197,255,0,0.1)] transition-all flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white">
              Have an ambitious digital product in mind?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono">
              We review specifications and respond with detailed architectural proposals within 48 hours.
            </p>
          </div>
          <RollLink
            href="#contact"
            onClick={onContactClick}
            variant="lime"
          >
            Start a project
          </RollLink>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContactClick={onContactClick}
        />
      )}
    </section>
  );
}
