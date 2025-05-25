# The Oasis 🏝️

A secure, privacy-first gaming platform built exclusively with vanilla HTML, CSS, and JavaScript. No frameworks, no tracking, no compromises.

## 🛡️ Security First

- **No external dependencies** - Everything is locally hosted
- **Zero tracking** - No analytics, cookies, or data collection
- **Secure by design** - CSP headers, input validation, XSS prevention
- **Privacy focused** - Your data stays on your device

## 🎮 Features

- Clean, modern oasis-inspired design
- Responsive layout that works on all devices
- Accessibility-first development
- Smooth animations and transitions
- Modular, maintainable codebase

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Python 3.x or Node.js (for local development server)

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-oasis.git
   cd the-oasis
   ```

2. Start a local development server:
   
   **Using Python:**
   ```bash
   npm run dev
   # or directly: python -m http.server 8000
   ```
   
   **Using Node.js:**
   ```bash
   npm run dev-node
   # or directly: npx http-server -p 8000 -c-1
   ```

3. Open your browser to `http://localhost:8000`

## 📁 Project Structure

```
the-oasis/
├── index.html              # Main entry point
├── src/
│   ├── css/
│   │   ├── reset.css       # CSS reset
│   │   ├── variables.css   # CSS custom properties
│   │   └── main.css        # Main styles
│   ├── js/
│   │   ├── core/
│   │   │   ├── utils.js    # Utility functions
│   │   │   └── navigation.js # Navigation system
│   │   └── main.js         # Application entry point
│   ├── games/              # Game modules (future)
│   └── assets/             # Images, fonts, etc.
├── public/                 # Static assets
└── package.json           # Project configuration
```

## 🎨 Design Philosophy

The Oasis embraces warm, natural tones inspired by desert oases:
- **Primary**: Warm sand/gold tones
- **Secondary**: Sage green accents
- **Accent**: Terracotta highlights
- **Typography**: Clean, readable system fonts

## 🔧 Development Guidelines

### CSS
- Use CSS custom properties for theming
- Prefer CSS Grid/Flexbox for layouts
- Mobile-first responsive design
- BEM methodology for class naming

### JavaScript
- ES6+ features only
- Modular architecture
- No `eval()` or `innerHTML` for security
- Comprehensive error handling

### HTML
- Semantic markup
- Accessibility-first approach
- Progressive enhancement

## 🧪 Testing

Testing framework to be added. All code should be manually tested across:
- Chrome/Chromium browsers
- Firefox
- Safari
- Edge

## 📦 Deployment

Optimized for deployment on Vercel with security headers:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding guidelines
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

Built with security and privacy as the top priorities, inspired by the need for clean, safe gaming experiences.