# Project Context

## Purpose
Official website for VL Lab development team that showcases the team's products, expertise, and values. The website features product showcases (including PersonaX), team information, and serves as the primary digital presence for the team. The application is deployed to GitHub Pages and uses Material Design 3 for a modern, professional user experience.

## Tech Stack
- **React** 16.10.2 (upgrading to 18+) - UI library, migrating to functional components with hooks
- **React Router DOM** 5.1.2 (upgrading to v6) - Client-side routing with HashRouter (GitHub Pages compatible)
- **Material-UI (MUI)** v5+ - Material Design 3 component library
- **styled-components** 4.4.1 - CSS-in-JS styling library (may be replaced by MUI's Emotion)
- **Create React App** 3.2.0 - Build tooling and development environment
- **gh-pages** 2.1.1 - GitHub Pages deployment
- **Google Analytics 4** - User behavior tracking and analytics

## Project Conventions

### Code Style
- **Component Pattern**: Migrating from React class components to functional components with hooks
- **Styling Approach**: Material-UI's styled system with Emotion (CSS-in-JS)
  - MUI components for consistent Material Design 3 implementation
  - Theme-based styling for colors, typography, and spacing
- **File Naming**: PascalCase for component files (e.g., `HomePage.js`, `ProductCard.js`)
- **Directory Structure**:
  - `component/` - Reusable UI components
  - `page/` - Page-level components/routes
  - `image/` - Static image assets (SVG, WebP, optimized images)
  - `app_products/` - Product documentation and assets
- **Language**: JavaScript (TypeScript optional for future)
- **ESLint**: Uses Create React App's default ESLint config (react-app)

### Architecture Patterns
- **Component-Based Architecture**: Modular React components organized by feature/type
- **Material Design 3**: Following Material Design 3 principles with MUI components
- **Routing**: HashRouter from react-router-dom (required for GitHub Pages static hosting)
  - Routes defined in `src/routes.js`
  - Pages are separate components in `page/` directory
  - Route-based code splitting with React.lazy()
- **State Management**: React Context API for global state (theme, language), local state with hooks
- **Asset Organization**: Static assets organized by type (images, product screenshots, logos)
- **Performance**: Code splitting, lazy loading, image optimization (WebP format)

### Testing Strategy
- Uses Create React App's default Jest testing setup
- Test files follow `.test.js` naming convention (e.g., `App.test.js`)
- Testing approach not extensively implemented in current codebase

### Git Workflow
- Deployed to GitHub Pages via `gh-pages` package
- Deployment process: `npm run build` → `npm run deploy`
- Uses `master` branch as primary branch
- Homepage configured for GitHub Pages: `https://shanwu.github.io/web`

## Domain Context
- **Team Website**: The site serves as the official platform for VL Lab to introduce the team, showcase products, and establish a professional online presence
- **Content Types**:
  - Product showcases (PersonaX and future products)
  - Team information and mission
  - Product detail pages with features, screenshots, and technical specifications
  - Contact and support information
- **Primary Product**: PersonaX - A comprehensive MBTI personality testing Android application
- **Language**: English (with potential for multilingual support in future phases)
- **Design System**: Material Design 3 (Material You) for modern, accessible UI

## Important Constraints
- **GitHub Pages Deployment**: Must use HashRouter instead of BrowserRouter for client-side routing
- **Static Hosting**: No backend server - all content must be static or client-side rendered
- **Browser Compatibility**: Targets modern browsers (>0.2% usage, not dead, not op_mini)
- **Create React App**: Uses CRA without ejecting, so build configuration is limited to CRA defaults

## External Dependencies
- **GitHub Pages**: Hosting platform for static site deployment
- **Material-UI (MUI)**: Material Design 3 component library and design system
- **Google Analytics 4**: User behavior tracking and analytics
- **Google Play Store**: Integration for app download links and badges
- **Google Search Console**: SEO monitoring and optimization
