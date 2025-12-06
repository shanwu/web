import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VLLabLogo from './VLLabLogo';

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    navigation: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Products', path: '/products' },
      { label: 'Contact', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        borderTop: 1,
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <VLLabLogo height={32} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Building innovative digital experiences
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  component="button"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: 'left',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  component="button"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: 'left',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: 1,
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} VL Lab. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

