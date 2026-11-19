# melon.studio — Website Analysis & Recreation Guide

An analysis of [melon.studio](https://melon.studio/), the portfolio site of **Piotr Brzeziński** (Product Designer / Design Engineer, Poznań, Poland), plus a guide to recreating its feel with **Lenis** (smooth scroll) and **GSAP** (animation).

> **Transparency note.** This analysis comes from the page's rendered text/markup and metadata, not from its source JS or CSS. Things I could *verify* are marked ✅. Things I *inferred* from content signals (duplicated link text, loader text, live clock, etc.) are marked 🔍. I could not confirm whether the original site uses Lenis or GSAP; the code in this README is a recommended way to build the same effects, not a copy of their code. Open DevTools → Sources/Network on the live site to confirm exact libraries and easing values.

---

## 1. Overview

| | |
|---|---|
| **Type** | Personal portfolio / design studio site |
| **Positioning** | "I design and build websites and digital products." UX/UI, web, app and SaaS design, design systems |
| **Audience** | Companies and agencies looking for a product designer |
| **Tone** | Confident, minimal, personal, a little playful (the name "melon", emoji/head image in text) |
| **Languages** | English + Polish (`/pl`) ✅ |
| **Status signal** | "Open to new projects." shown in hero and footer ✅ |

### Site map ✅
- `/` Home
- `/work` (7 case studies), `/work/[slug]`
- `/insights` (7 articles), `/insights/[slug]`
- `/about`, `/contact`
- `/services/saas-product-design`, `/services/web-design`, `/services/design-for-agencies`
- `/privacy`, `/cookies`, `/terms`, `/pl`

---

## 2. Tech stack signals

| Signal | Conclusion |
|---|---|
| `meta-next-size-adjust` tag | ✅ Built with **Next.js** |
| `?dpl=dpl_...` query on every asset | ✅ Next.js **Deployment ID** (skew protection), typical on **Vercel** |
| `opengraph-image-12o0cb` route | ✅ Next.js dynamic OG image generation |
| `.webp` thumbnails, `.svg` logos | ✅ Optimized, lightweight assets |
| "Skip to content" link | ✅ Accessibility-minded markup |
| Cookie settings + Privacy/Terms pages | ✅ Consent management |

---

## 3. Design analysis

### 3.1 Layout & structure (single long home page)
1. **Hero**: studio name/H1, one-line pitch, live local time + location, availability status
2. **Latest Work**: 7 project cards with thumbnail, title, "type, year"
3. **About me**: short bio with an inline image of the designer's head sitting inside the sentence
4. **Experience**: numbered list of roles with logo tiles, role title, date range, plus a freelance client list
5. **Insights**: 5 article previews with date, title, summary, category, read-time and cover image
6. **Clients**: dense logo wall (~30 brands), some linking to case studies, ending with a "This spot's open. Let's talk" slot
7. **Testimonial**: quote slider with `01/03` counter and ← → controls
8. **Contact/footer**: email, CTA, services, socials, "Listening & Reading" widget, large footer logo

### 3.2 Typography 🔍
- Very likely a modern grotesque/sans for UI with a large display size for the H1 and section titles.
- Insight cover images show type-led thumbnails (large type on flat color, blackletter "GPU"), which suggests the brand is comfortable with expressive typography.
- Metadata-style text (dates, "3 min read", "Product design, 2025") is set small and quiet, creating a clear hierarchy: **big title → small meta**.

### 3.3 Color 🔍
- Chrome of the site is minimal/neutral so the **work thumbnails carry the color**.
- Insight covers use saturated flat colors (pink, violet, Spotify green), so color is injected by content, not by the UI shell.
- Client logos are served as `colour.svg` (full-colour versions), so the wall is likely shown grayscale/dim and **revealed in colour on hover** 🔍.

### 3.4 Content & copywriting ✅
- First person, human voice: "I'm Piotr", "slick SaaS products… details that make them click".
- Micro-copy with personality: *"This spot's open. Let's talk"*, *"Open to new projects."*
- Social proof is layered: client logos → case-study links on logos → named testimonial.
- Personal touches: **Now playing** (Spotify track) and **Reading** (a book) in the footer. This humanizes the studio and shows taste.

### 3.5 Design principles you can take from it
1. **Work first**: projects come before the bio.
2. **Quiet UI, loud content**: neutral shell, colorful thumbnails.
3. **Small personal details** (live clock, now playing) create memorability.
4. **Consistent card anatomy**: image, title, "type, year".
5. **Clear CTAs repeated**: "Show all", "More about me", "All notes", "Start a project".

---

## 4. UI components

| Component | Notes |
|---|---|
| **Header nav** | Logo (anchors to `#hero`) + `work(7)`, `articles(7)`, `about`, `contact`. Counts in parentheses are a neat editorial detail ✅ |
| **Preloader** | Text "Loading / Ready" with a `000%` counter ✅ |
| **Live clock** | `--:--` placeholder replaced client-side with Poznań time ✅ (placeholder shows it's JS-driven) |
| **Project card** | Thumbnail + h3 + "Category, Year" ✅ |
| **Link with arrow/label** | Link text appears **twice** in the DOM (`Show allShow all`, `Start a projectStart a project`, `More about meMore about me`) ✅ → classic **text-roll hover** (two copies stacked, one slides out as the other slides in) 🔍 |
| **Experience row** | Logo tile + company + role + dates ✅ |
| **Insight row** | Date, title, excerpt, tag, read time; cover image shown beside/behind the list (5 covers are rendered together, which suggests **image swaps on hover**) 🔍 |
| **Logo wall** | Mixed linked/unlinked logos; linked ones carry "Case study" label ✅ |
| **Testimonial slider** | Quote, author, company, link to case study, `01/03` with arrows ✅ |
| **Footer widgets** | Spotify "Now playing", "Reading" book ✅ |
| **Language switch** | English / Polski ✅ |
| **Cookie settings** | Reopen consent preferences ✅ |

---

## 5. Animations & motion (observed + inferred)

| Effect | Evidence | Where |
|---|---|---|
| Page preloader with % counter | ✅ `Loading`, `Ready`, `000%` in DOM | On first load |
| Hero entrance (text/line reveal) | 🔍 typical for H1 + subline | Hero |
| Live clock update | ✅ `--:--` placeholder | Hero + footer |
| Text-roll hover on links/buttons | 🔍 duplicated link labels | CTAs, "Show all" |
| Scroll-triggered reveals for cards | 🔍 | Work, Insights |
| Image hover/parallax on thumbnails | 🔍 | Work cards |
| Insight image swap on hover | 🔍 5 stacked images | Insights |
| Testimonial slider transition | ✅ slider with counter/arrows | Testimonials |
| Smooth/inertial scrolling | 🔍 common for this style of site | Global |
| Page transitions between routes | 🔍 | Next.js routes |

> Respect `prefers-reduced-motion` for all of the above (see §8).

---

## 6. Recreating the motion with Lenis + GSAP

### 6.1 Install
```bash
npm i gsap lenis
```

### 6.2 Lenis + GSAP ScrollTrigger (single source of truth for scroll)
```js
// smooth-scroll.js
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const lenis = new Lenis({
  lerp: 0.1,            // smoothness (lower = smoother/slower)
  smoothWheel: true,
});

// keep ScrollTrigger in sync with Lenis
lenis.on("scroll", ScrollTrigger.update);

// drive Lenis from GSAP's ticker
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

In Next.js, initialise this inside a client component (`"use client"`) in a `useEffect`, and call `lenis.destroy()` on cleanup.

### 6.3 Preloader with percentage counter
```js
const counter = { value: 0 };
const el = document.querySelector("[data-loader-percent]");

lenis.stop(); // lock scroll while loading

gsap.timeline({
  onComplete: () => lenis.start(),
})
  .to(counter, {
    value: 100,
    duration: 1.6,
    ease: "power2.inOut",
    onUpdate: () => {
      el.textContent = String(Math.round(counter.value)).padStart(3, "0") + "%";
    },
  })
  .to("[data-loader]", { yPercent: -100, duration: 0.9, ease: "expo.inOut" })
  .from("[data-hero-line]", {
    yPercent: 110,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out",
  }, "-=0.4");
```

### 6.4 Live local clock (Poznań)
```js
function updateClock() {
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(new Date());
  document.querySelectorAll("[data-clock]").forEach(
    (n) => (n.textContent = `${time} Poznań, Poland`)
  );
}
updateClock();
setInterval(updateClock, 1000 * 30);
```

### 6.5 Text-roll hover (the duplicated-label pattern)
```html
<a class="roll" href="/work">
  <span class="roll__inner">
    <span>Show all</span>
    <span aria-hidden="true">Show all</span>
  </span>
</a>
```
```css
.roll { display: inline-block; overflow: hidden; height: 1.2em; line-height: 1.2em; }
.roll__inner { display: flex; flex-direction: column; }
```
```js
document.querySelectorAll(".roll").forEach((link) => {
  const inner = link.querySelector(".roll__inner");
  link.addEventListener("mouseenter", () =>
    gsap.to(inner, { yPercent: -50, duration: 0.5, ease: "power3.out" }));
  link.addEventListener("mouseleave", () =>
    gsap.to(inner, { yPercent: 0, duration: 0.5, ease: "power3.out" }));
});
```

### 6.6 Scroll-triggered card reveals
```js
gsap.utils.toArray("[data-project-card]").forEach((card) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: card, start: "top 85%" },
  });
});
```

### 6.7 Thumbnail parallax
```js
gsap.utils.toArray("[data-parallax]").forEach((img) => {
  gsap.fromTo(img, { yPercent: -8 }, {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
      trigger: img.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
```

### 6.8 Insights: swap cover image on hover
```js
const rows = document.querySelectorAll("[data-insight-row]");
const covers = document.querySelectorAll("[data-insight-cover]");

rows.forEach((row, i) => {
  row.addEventListener("mouseenter", () => {
    gsap.to(covers, { autoAlpha: 0, duration: 0.3 });
    gsap.to(covers[i], { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power2.out" });
  });
});
```

### 6.9 Testimonial slider (`01/03`)
```js
let index = 0;
const slides = gsap.utils.toArray("[data-quote]");
const counterEl = document.querySelector("[data-quote-counter]");

function goTo(next) {
  const dir = next > index ? 1 : -1;
  const wrapped = gsap.utils.wrap(0, slides.length, next);
  gsap.timeline()
    .to(slides[index], { xPercent: -20 * dir, autoAlpha: 0, duration: 0.5, ease: "power2.in" })
    .fromTo(slides[wrapped], { xPercent: 20 * dir, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
  index = wrapped;
  counterEl.textContent = `${String(index + 1).padStart(2, "0")}/${String(slides.length).padStart(2, "0")}`;
}
```

### 6.10 Client logo wall: grayscale → colour
```css
.logo-wall img { filter: grayscale(1); opacity: .6; transition: filter .3s, opacity .3s; }
.logo-wall a:hover img { filter: none; opacity: 1; }
```

---

## 7. Suggested project structure (Next.js)

```
app/
  layout.tsx            # fonts, metadata, <SmoothScroll/>, <Preloader/>
  page.tsx              # Home sections
  work/[slug]/page.tsx
  insights/[slug]/page.tsx
  about/ contact/ services/[slug]/
  opengraph-image.tsx   # dynamic OG
components/
  SmoothScroll.tsx      # Lenis + ScrollTrigger sync
  Preloader.tsx
  Header.tsx
  RollLink.tsx          # text-roll hover
  ProjectCard.tsx
  InsightRow.tsx
  LogoWall.tsx
  TestimonialSlider.tsx
  LiveClock.tsx
  NowPlaying.tsx
public/media/...        # webp thumbnails, svg logos
```

---

## 8. Performance, SEO & accessibility

**Good practices visible on the site ✅**
- Optimized WebP images and SVG logos
- Skip-to-content link
- Complete OG/Twitter meta (1200×630 image, alt text)
- Descriptive, keyword-rich title and meta description
- Canonical URL set
- Localised version (`/pl`)

**Recommended when you rebuild**
- Wrap motion in `gsap.matchMedia()` and disable heavy effects for `(prefers-reduced-motion: reduce)`.
- Use `lenis.stop()/start()` for modals and menus so scroll locking works.
- Use `next/image` with explicit sizes; lazy-load below-the-fold thumbnails.
- Keep `aria-hidden="true"` on duplicated text in roll links.
- Provide visible focus styles and keyboard controls for the slider.
- Call `ScrollTrigger.refresh()` after images/fonts load.

---

## 9. Quick takeaways

1. **Calm, editorial, work-led layout** with a neutral shell.
2. **Personality in the details**: live clock, availability status, now playing, reading.
3. **Motion is purposeful**: loader, text-roll links, reveals, slider; nothing is decorative for its own sake.
4. **Built as a modern Next.js app**, deployed with versioned assets.
5. **Recreate it** with Lenis for inertial scrolling + GSAP/ScrollTrigger for choreography.

---

*Analysis based on the publicly visible content of https://melon.studio/. All trademarks, brand names and content belong to their respective owners. This README is for learning purposes; don't copy the original site's assets or copywriting.*
