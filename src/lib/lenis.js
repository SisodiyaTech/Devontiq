import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    lerp: 0.1, // smoothness from README.md §6.2
    smoothWheel: true,
    syncTouch: false,
  });

  // Sync ScrollTrigger with Lenis
  lenisInstance.on('scroll', ScrollTrigger.update);

  // Drive Lenis from GSAP's ticker
  const tickerCallback = (time) => {
    lenisInstance.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
