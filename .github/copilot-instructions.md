# GitHub Copilot Instructions

## Project Overview

Welcome to **The Oasis**—a secure, privacy-first gaming platform crafted exclusively with **vanilla HTML, CSS, and JavaScript**. This project avoids frameworks, external dependencies, and unnecessary complexity to deliver a fast, elegant, and secure user experience. All games and features are designed with simplicity, security, and a cohesive oasis-inspired aesthetic.

## Security Principles

- No external scripts, fonts, styles, or CDN links—everything is locally hosted
- No tracking, analytics, or user data collection of any kind
- JavaScript must follow secure practices (no `eval`, `innerHTML`, or dynamic script injection)
- CSP headers will be enforced: avoid inline scripts/styles unless using nonces
- Deployed on Vercel with strict security headers

## Tech Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Grid/Flexbox for layout, fluid responsive design
- **JavaScript (ES6+)**: Modular, composable code
- Canvas API for game rendering
- No build step unless explicitly required for linting/optimization

## CSS Styling Guidelines

- Modular, purposeful CSS—avoid bloat and over-specificity
- Use **BEM**, utility classes, or scoped file structures to prevent conflicts
- Prefer native features (`:has`, `:is`, `:where`) over abstractions
- Use **CSS variables** for theming and consistency
- Responsive design: fluid units (`%`, `vw`, `vh`), media queries
- Subtle, modern animations and transitions—used sparingly for polish
- Avoid `!important` unless absolutely necessary
- Visuals prioritize warm tones, fluid shapes, and minimalist layout choices to evoke calmness and clarity.

## JavaScript Code Practices

- Use `const`/`let`, arrow functions, destructuring, and native modules
- Keep functions **small, pure, and reusable**
- Organize code by feature/domain (e.g., `gameEngine.js`, `uiControls.js`)
- Prioritize clarity and readability over cleverness
- Comments only for essential explanations or non-obvious logic—**don't explain what the code already says**

## HTML Markup Guidelines

- Use semantic elements: `<header>`, `<main>`, `<article>`, `<section>`, etc.
- Accessibility is a priority: keyboard navigation, ARIA only when needed
- Lean, structured markup—avoid unnecessary wrappers and deep nesting

---
**Remember:** Every line of code should reflect the project's core values—security, privacy, simplicity, and a cohesive oasis-inspired style.