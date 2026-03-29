# Pankaj Banshraj Pal — Cybersecurity Portfolio

A premium, dark-themed personal cybersecurity portfolio website built for Pankaj Banshraj Pal's CV. Inspired by the layout rhythm and design language of [kaushalrajgupta.is-a.dev](https://kaushalrajgupta.is-a.dev/) with original cybersecurity-focused branding.

## 🔐 Project Overview

**Owner:** Pankaj Banshraj Pal  
**Role:** Cybersecurity Engineer  
**Location:** Navi Mumbai, India  
**Contact:** prithvikpal@gmail.com | +91-7977774046

---

## ✅ Implemented Features

### Design & UX
- Premium dark cybersecurity theme (deep blacks, green/cyan accents)
- Floating pill-shaped navigation bar (inspired by reference site)
- Animated background grid with subtle glow effects
- Particle/constellation canvas animation in hero section
- Smooth scroll with active section highlighting
- Fade-in animations for all major content sections
- Status text rotation in navbar ("Threat Hunter Online", "SOC Analyst Ready", etc.)
- Scroll-to-top button
- Fully responsive: desktop, tablet, mobile

### Sections
1. **Hero** — Name, title, tags, CTA buttons, animated terminal card with typing effect
2. **Status Cards** — Availability, LinkedIn, LetsDefend, Portfolio, metrics (190K+ findings, 500+ trained), location
3. **Work Experience** — Timeline layout with 4 roles (Menlo Security, ProTechmanize, Neuroglia Health, Freelance)
4. **Security Projects** — 6 cards: Contra tool, SRini tool, Cloud Migration, CCleaner threat, MDM bypass, DRM bypass
5. **Bug Bounty** — 15+ platforms across 3 sectors with category breakdown and stats
6. **Skills & Tools** — Skill bars (Blue Team, Red Team, Cloud), tools grid, language chips
7. **Certifications** — 4 cert cards (CTIA, CCSE, CrowdStrike ×2) with status badges
8. **About** — Bio paragraphs, metrics grid, education timeline, compliance familiarity
9. **Contact** — Contact links + mailto-powered contact form
10. **Footer** — Social links, tagline, copyright

### Interactivity
- Copy email button with clipboard API
- Contact form that opens mailto client
- Terminal typing animation on page load
- Skill bar animation triggered by scroll intersection
- Mobile hamburger menu with smooth open/close

---

## 📁 File Structure

```
index.html          Main HTML file (all sections)
css/
  style.css         Complete CSS stylesheet (~1000 lines)
js/
  main.js           JavaScript interactions and animations
README.md           This file
```

---

## 🌐 Entry Points

| Path | Description |
|------|-------------|
| `index.html` | Main portfolio homepage |
| `index.html#home` | Hero section |
| `index.html#experience` | Work history |
| `index.html#projects` | Security projects |
| `index.html#skills` | Skills and tools |
| `index.html#about` | About & education |
| `index.html#contact` | Contact form |

---

## 🚀 Deployment

To make the site live, go to the **Publish tab** and publish with one click.

---

## 🔧 Recommended Next Steps

1. **Add PDF resume download** — Link a downloadable CV PDF
2. **Blog/Writeups section** — Add security research articles or CTF writeups
3. **Dark/Light mode toggle** — Currently dark-only; could add light theme
4. **LetsDefend badge integration** — Embed actual platform badge/stats
5. **Animated threat counter** — Live stats widget with security metrics
6. **Add GitHub profile** — Link to personal GitHub repos
7. **SEO optimization** — Add Open Graph meta tags and structured data
8. **Google Analytics** — Add tracking for portfolio visitors

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG | `#080c10` |
| Surface | `rgba(255,255,255,0.03)` |
| Accent Green | `#00ff88` |
| Accent Cyan | `#00d4ff` |
| Text Primary | `#e8edf3` |
| Font Sans | Inter |
| Font Mono | JetBrains Mono |
