# React TypeScript Portfolio

A modern, futuristic neon cyberpunk portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20.19+ or 22.12+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Custom CSS** - Neon effects & glassmorphism

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useActiveSection.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── assets/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## ✨ Features

- ⚡ Fast development with Vite & HMR
- 🎨 Neon cyberpunk design system
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (ARIA labels, semantic HTML)
- 🎭 Smooth scroll reveal animations
- 💎 Glassmorphism effects
- 🌈 Gradient text & neon glows
- 🎯 TypeScript for type safety
- 🔥 Custom React hooks

## 🎯 Custom Hooks

### `useScrollReveal`
Intersection Observer-based scroll reveal animation:
```tsx
const { ref, isVisible } = useScrollReveal();
```

### `useActiveSection`
Tracks active section for navigation highlighting:
```tsx
const activeSection = useActiveSection();
```

## 🎨 Design System

All neon utilities and effects are defined in `src/index.css`:
- Neon text glow (cyan, purple, magenta)
- Glassmorphism cards
- Hover glow effects
- Neon buttons
- Skill badges
- Gradient backgrounds
- And more!

## 📦 Assets Required

Copy these from the HTML version to `public/assets/`:
- profile.png
- about-pic.png
- project-1.jpg, project-2.jpg, project-3.jpg
- experience.png, education.png, checkmark.png
- email.png, linkedin.png, github.png
- cv.pdf, portfolio.pdf

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### GitHub Pages
```bash
# Update vite.config.ts with base: '/repo-name/'
npm run build
# Push dist/ folder to gh-pages branch
```

## 🔧 Configuration

### Tailwind Config
Custom colors, animations, and utilities in `tailwind.config.js`

### TypeScript Config  
Strict mode enabled in `tsconfig.json`

### Vite Config
React plugin and build settings in `vite.config.ts`

## 📝 Scripts

- `npm run dev` - Start dev server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎓 TypeScript Types

All types defined in `src/types/index.ts`:
- `Project` - Project data structure
- `Skill` - Individual skill
- `SkillCategory` - Skill category with color
- `ContactInfo` - Contact information
- `SocialLink` - Social media links

## 🌟 Key Differences from HTML Version

✅ Component-based architecture  
✅ Type safety with TypeScript  
✅ React hooks for state & effects  
✅ Better code organization  
✅ Easier to maintain & scale  
✅ Hot module replacement  
✅ Modern build optimizations  

## 📞 Support

For questions or issues:
- Check the original HTML version documentation
- Review component comments
- Check TypeScript types for data structures

## 📄 License

© 2023-2025 Berryl Radian Hamesha. All Rights Reserved.

---

**Built with ❤ and TypeScript**
