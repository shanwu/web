import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Header from './component/Header';
import Footer from './component/Footer';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./page/HomePage'));
const AboutPage = lazy(() => import('./page/AboutPage'));
const ProductsPage = lazy(() => import('./page/ProductsPage'));
const PersonaXPage = lazy(() => import('./page/PersonaXPage'));
const ContactPage = lazy(() => import('./page/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./page/PrivacyPolicyPage'));

// Loading component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
    }}
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <HashRouter>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/personax" element={<PersonaXPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </HashRouter>
  );
}

export default App;
