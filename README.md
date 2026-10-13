# Cybersecurity Student Portfolio — Akok Mayol Akok

A modern, responsive, and professional personal portfolio website for **Akok Mayol Akok**, a cybersecurity student at the **University of Juba**, South Sudan, and an aspiring security analyst.

---

## 🌟 Highlights & Key Features

- **Domain-Specific Theme:** Professional deep navy blue (`#0A192F`), cobalt blue (`#2563EB`), and cyan accent (`#38BDF8`) design system with dark and light mode switching.
- **Top Bar Contract Compliance:** Minimal, clean 3-zone header with single-line controls, wordmark, and no clutter.
- **Subtle Cyber Canvas:** Lightweight HTML5 canvas rendering interconnected network nodes and packet hops that react gently to interaction.
- **6 Complete Pages:**
  1. **Home:** High-impact hero headline, academic credentials strip, core cybersecurity interests, and selected project previews.
  2. **About Me:** Personal journey, education history (University of Juba & Juba Diplomatic Secondary School), mission, vision, personal qualities, and educational timeline.
  3. **Technical Skills:** Categorized matrix (Programming, Cybersecurity, Tools) with honest foundational indicators, key topics mastered, and essential Linux CLI reference.
  4. **Portfolio Projects:** Project cards with real code lessons, GitHub links, and live interactive simulators (Password Strength Inspector, Python Calculator, and Knowledge Notes Reader).
  5. **Learning Journey:** 3-stage roadmap (Beginner, Developing Skills, Future Goals), academic topic coverage, and an interactive personal study tracker stored in `localStorage`.
  6. **Contact:** Professional inquiry form with client-side validation, bot-trap honeypot, mailto client dispatch, direct email copy button, and connection guidance.
- **Zero-Pill & Anti-Slop Discipline:** Clean unboxed metadata with typographic separators (`·`), no fake certifications, no telemetry gimmicks.

---

## 🛠️ Project Structure

```text
├── index.html                   # Entry point with SEO, Schema.org JSON-LD, and Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies and build scripts
├── src/
│   ├── assets/
│   │   └── images/              # High-fidelity photos & portrait assets
│   ├── components/
│   │   ├── CyberCanvas.tsx      # Interactive network background
│   │   ├── Navbar.tsx           # Responsive header with theme toggle
│   │   ├── Footer.tsx           # Footer with university badge & links
│   │   ├── ProjectModal.tsx     # Project detail & demo modal
│   │   ├── CustomizationGuideModal.tsx # In-app handbook
│   │   └── demos/
│   │       ├── PasswordCheckerDemo.tsx  # NIST SP 800-63B password inspector
│   │       ├── PythonCalculatorDemo.tsx # Interactive Python calculator
│   │       └── NotesViewerDemo.tsx      # Study notes reader
│   ├── data/
│   │   └── portfolioData.ts     # Centralized configuration & content
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SkillsPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── LearningJourneyPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx                  # Main app container & routing logic
│   ├── index.css                # Tailwind CSS v4 styling & variables
│   └── main.tsx                 # React DOM mount point
```

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Create Production Build
```bash
npm run build
```

---

## ✏️ How to Customize Your Information

All your personal details, education, skills, projects, and links live in **one centralized configuration file**:

👉 `src/data/portfolioData.ts`

### 1. Replacing Your Profile Photo
1. Copy your photograph into `src/assets/images/` (e.g., `akok_photo.jpg`).
2. Open `src/data/portfolioData.ts` and update `avatarImage`:
   ```typescript
   avatarImage: "/src/assets/images/akok_photo.jpg",
   ```
3. Save the file. The new portrait will display across the Home and About pages.

### 2. Adding a New Project
In `src/data/portfolioData.ts`, add an item to `projects`:
```typescript
{
  id: "my-new-project",
  title: "Network Packet Sniffer",
  shortDescription: "A Python script using sockets to inspect local TCP packets.",
  fullDescription: "Detailed project description...",
  technologies: ["Python", "Sockets", "Wireshark"],
  status: "Completed",
  iconName: "Terminal",
  githubUrl: "https://github.com/cosmiqakok/packet-sniffer",
  keyFeatures: ["Captures raw IP headers", "Decodes source and destination ports"],
  securityLesson: "Reinforced understanding of unencrypted traffic exposure."
}
```

---

## 🌐 Free Deployment Options

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**. Your portfolio will be live in ~30 seconds with a free `.vercel.app` domain.

### Option B: GitHub Pages
1. Install `gh-pages` if desired or configure GitHub Actions with the standard Vite Pages workflow.
2. Set `base: './'` in `vite.config.ts`.
3. Enable GitHub Pages in your repository settings under **Settings > Pages**.

---

## 🔒 Security & Privacy Notice
- **Client-Side Only:** No personal passwords or user keystrokes in the Password Strength Inspector leave the user's browser.
- **Spam Protection:** The contact form incorporates a hidden honeypot field and input length guards to prevent automated bot submissions.
- **Zero Third-Party Trackers:** No commercial tracking or ad cookies.
