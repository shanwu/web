# VL Lab Official Website

Official website for VL Lab development team showcasing products, team information, and establishing a professional online presence.

## About

VL Lab is a development team focused on creating innovative mobile applications and digital products. This website serves as the primary digital presence for the team, featuring product showcases (including PersonaX), team information, and contact details.

## Features

- **Material Design 3** - Modern, accessible UI using Material Design 3 principles
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Product Showcase** - Detailed product pages with features, screenshots, and technical specifications
- **Team Information** - About page with mission, vision, values, and technology stack
- **Contact & Support** - Contact information and FAQ section
- **Performance Optimized** - Code splitting, lazy loading, and optimized assets

## Tech Stack

- **React** 18.3.1 - UI library with functional components and hooks
- **Material-UI (MUI)** v7.3.6 - Material Design 3 component library
- **React Router DOM** v6.30.2 - Client-side routing with HashRouter (GitHub Pages compatible)
- **Emotion** - CSS-in-JS styling library (used by MUI)
- **Create React App** 3.2.0 - Build tooling and development environment
- **gh-pages** - GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

The page will reload automatically when you make edits. You'll also see any lint errors in the console.

### Building for Production

Build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder. The build is minified and ready for deployment.

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch, making it available at the configured GitHub Pages URL.

## Project Structure

```
src/
├── component/          # Reusable UI components
│   ├── Header.js      # Navigation header with logo
│   ├── Footer.js      # Footer with links
│   └── VLLabLogo.js   # VL Lab logo component
├── page/              # Page components
│   ├── HomePage.js    # Homepage with hero and featured products
│   ├── AboutPage.js   # About/Team page
│   ├── ProductsPage.js # Products overview
│   ├── PersonaXPage.js # PersonaX product detail page
│   └── ContactPage.js  # Contact and support page
├── theme.js           # Material Design 3 theme configuration
├── App.js             # Main app component with routing
└── index.js           # Entry point
```

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. The build is optimized and minified.

### `npm run deploy`

Builds the app and deploys it to GitHub Pages.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

Ejects from Create React App to get full control over build configuration.

## Features in Detail

### Homepage
- Hero section with VL Lab branding
- Quick stats/highlights
- Featured products section

### Products
- Products overview page with product cards
- Detailed product pages (PersonaX) with:
  - Feature descriptions
  - Technical specifications
  - Download links to Google Play Store

### About
- Team mission and vision
- Core values
- Technology stack information

### Contact
- Contact information
- FAQ section
- Support resources

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

This is the official website for VL Lab. For questions or contributions, please contact the development team.

## License

© 2024 VL Lab. All rights reserved.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Material-UI Documentation](https://mui.com/)
- [Material Design 3 Guidelines](https://m3.material.io/)
- [React Router Documentation](https://reactrouter.com/)
