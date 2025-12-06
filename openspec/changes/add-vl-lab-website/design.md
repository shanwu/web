# Design: VL Lab Website Architecture

## Context
The VL Lab website is a complete transformation of the existing website into a professional team website. The website needs to showcase products (PersonaX), provide team information, and establish a modern brand presence using Material Design 3.

**Constraints:**
- Must work with GitHub Pages (static hosting, HashRouter required)
- Current codebase uses React 16.10.2 with class components
- Need to maintain backward compatibility or plan migration
- Performance targets: Lighthouse > 90, LCP < 2.5s

## Goals / Non-Goals

### Goals
- Modern, professional website using Material Design 3
- Responsive design (mobile, tablet, desktop)
- Fast performance (< 3s load time)
- SEO optimized
- Accessible (WCAG 2.1 AA)
- Scalable architecture for future products

### Non-Goals
- Backend API integration (static content initially)
- User authentication/login
- E-commerce functionality
- Real-time chat
- Multilingual support (Phase 1 - English only)

## Decisions

### Decision 1: React Version and Component Pattern
**Decision**: Upgrade to React 18+ and migrate to functional components with hooks
**Rationale**: 
- React 18 provides better performance and concurrent features
- Functional components are the modern standard
- Hooks simplify state management
- Better compatibility with Material-UI v5+
**Alternatives considered**:
- Keep React 16 with class components (rejected - outdated)
- Upgrade React but keep class components (rejected - inconsistent with ecosystem)

### Decision 2: UI Framework
**Decision**: Use Material-UI (MUI) v5+ for Material Design 3
**Rationale**:
- Official Material Design 3 implementation
- Comprehensive component library
- Built-in accessibility features
- Active maintenance and community
**Alternatives considered**:
- Material Design for React (rejected - less comprehensive)
- Custom Material Design implementation (rejected - too much work)

### Decision 3: Build Tool
**Decision**: Keep Create React App initially, consider Vite migration later
**Rationale**:
- Current setup already uses CRA
- Migration can be done incrementally
- CRA is sufficient for MVP
**Alternatives considered**:
- Migrate to Vite immediately (deferred - can optimize later)
- Use Next.js (rejected - overkill for static site)

### Decision 4: Routing
**Decision**: Use React Router DOM v6 with HashRouter (GitHub Pages compatible)
**Rationale**:
- GitHub Pages requires HashRouter for client-side routing
- React Router v6 has better API and performance
- Maintains compatibility with static hosting
**Alternatives considered**:
- BrowserRouter (rejected - doesn't work with GitHub Pages)
- Keep React Router v5 (rejected - outdated)

### Decision 5: State Management
**Decision**: Use React Context API for global state, local state with hooks
**Rationale**:
- Simple requirements don't need Redux/Zustand
- Context API sufficient for theme, language (future)
- Local state for component-specific data
**Alternatives considered**:
- Redux (rejected - unnecessary complexity)
- Zustand (rejected - not needed for MVP)

### Decision 6: Styling Approach
**Decision**: Use Material-UI's styled system with CSS-in-JS (Emotion)
**Rationale**:
- Integrated with MUI
- Type-safe styling
- Theme integration
- Component-scoped styles
**Alternatives considered**:
- CSS Modules (rejected - less integrated with MUI)
- styled-components (rejected - MUI uses Emotion)

### Decision 7: Image Optimization
**Decision**: Use WebP format with fallbacks, lazy loading, responsive images
**Rationale**:
- WebP provides better compression
- Lazy loading improves initial load time
- Responsive images reduce bandwidth
**Alternatives considered**:
- PNG/JPEG only (rejected - larger file sizes)
- SVG for all images (rejected - not suitable for photos)

### Decision 8: Code Splitting Strategy
**Decision**: Route-based code splitting with React.lazy()
**Rationale**:
- Each page loads independently
- Reduces initial bundle size
- Simple to implement
**Alternatives considered**:
- Component-based splitting (deferred - can add later if needed)
- No splitting (rejected - larger initial bundle)

## Risks / Trade-offs

### Risk 1: React Upgrade Complexity
**Risk**: Upgrading from React 16 to 18 may introduce breaking changes
**Mitigation**: 
- Test thoroughly during upgrade
- Use React 18 migration guide
- Update all dependencies together
- Test in staging before production

### Risk 2: Material-UI Bundle Size
**Risk**: MUI adds significant bundle size
**Mitigation**:
- Use tree shaking
- Import only needed components
- Consider MUI Core vs MUI System
- Monitor bundle size with webpack-bundle-analyzer

### Risk 3: Performance on Low-End Devices
**Risk**: Material Design animations may be slow on older devices
**Mitigation**:
- Use CSS transforms (GPU accelerated)
- Reduce animation complexity on mobile
- Test on real devices
- Provide reduced motion option

### Risk 4: SEO with HashRouter
**Risk**: HashRouter may impact SEO
**Mitigation**:
- Use proper meta tags
- Implement structured data
- Submit sitemap to search engines
- Consider pre-rendering if needed

## Migration Plan

### Phase 1: Foundation (Weeks 1-2)
1. Upgrade React to 18+
2. Install Material-UI v5+
3. Set up theme configuration
4. Create base layout components
5. Migrate routing to React Router v6

### Phase 2: Content Migration (Weeks 3-4)
1. Replace homepage with new design
2. Create About/Team page
3. Create Products section
4. Create Contact page
5. Migrate existing content where applicable

### Phase 3: Enhancement (Weeks 5-6)
1. Add PersonaX product page
2. Implement animations
3. Optimize performance
4. Add SEO metadata
5. Set up analytics

### Phase 4: Polish and Launch (Weeks 7-8)
1. Final testing
2. Performance optimization
3. Accessibility audit
4. Deploy to production
5. Monitor and iterate

### Rollback Plan
- Keep old code in separate branch
- Can revert to previous version if critical issues
- Gradual rollout if possible

### Decision 9: Logo Implementation
**Decision**: Use Resource/vl_lab_logo.svg with size and color props for different contexts
**Rationale**:
- SVG format provides scalability without quality loss
- Current logo color (#1A237E) works on light backgrounds
- Can create color variants for dark backgrounds or different contexts
- Size can be adjusted via CSS or props for header, hero, footer
**Implementation**:
- Header: 32-48px height, default color
- Homepage hero: 64-96px or larger, color adapted to background
- Footer: 24-32px height, color adapted to footer background
- Mobile: 24-32px in header, maintains clarity
**Alternatives considered**:
- Separate logo files for each size (rejected - SVG is scalable)
- Fixed logo size everywhere (rejected - not optimal for different contexts)

## Open Questions
- Should we migrate to Vite immediately or after MVP?
- Do we need a CMS for content management (future consideration)?
- Should we implement dark mode in Phase 1 or Phase 2?
- What analytics events should we track initially?

