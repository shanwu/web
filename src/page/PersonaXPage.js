import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import personaxQRCode from '../image/personax_qr_code.png';
import personaxAppIcon from '../image/personax_app_icon.webp';

const PersonaXPage = () => {
  const features = [
    '40-question MBTI test for accurate personality assessment',
    '16 personality types catalog with detailed descriptions',
    'GPT-powered personality analysis and insights',
    'Scenario training for romance, job interviews, and family conflicts',
    'Multilingual support (15+ languages)',
    'Weekly personalized insights based on your MBTI type',
  ];

  const techSpecs = [
    { label: 'Platform', value: 'Android' },
    { label: 'Min SDK', value: '24 (Android 7.0)' },
    { label: 'Target SDK', value: '35 (Android 15)' },
    { label: 'Language', value: 'Kotlin' },
    { label: 'UI Framework', value: 'Jetpack Compose' },
    { label: 'Design System', value: 'Material Design 3' },
    { label: 'Architecture', value: 'MVVM, Clean Architecture' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ab47bc 0%, #ba68c8 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 3,
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={personaxAppIcon}
              alt="PersonaX App Icon"
              sx={{
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                borderRadius: 4,
                boxShadow: 6,
                flexShrink: 0,
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h2" component="h1" gutterBottom>
                PersonaX
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9 }}>
                Discover Your True Personality with AI-Powered MBTI Analysis
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="https://play.google.com/store/apps/details?id=com.shanwu.ease.mbti"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Download on Google Play
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Features Section */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <CheckCircleIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                      <Typography variant="body1">{feature}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technical Details */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Technical Specifications
          </Typography>
          <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
            <Grid container spacing={2}>
              {techSpecs.map((spec) => (
                <Grid item xs={12} sm={6} key={spec.label}>
                  <Typography variant="body2" color="text.secondary">
                    {spec.label}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {spec.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* Download Section */}
        <Box sx={{ my: 6, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Get PersonaX
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Download PersonaX from Google Play Store and start your personality discovery journey.
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={personaxQRCode}
                  alt="PersonaX QR Code - Scan to download from Google Play Store"
                  sx={{
                    width: 200,
                    height: 200,
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    p: 2,
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Scan with your phone to download
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  height: '100%',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="https://play.google.com/store/apps/details?id=com.shanwu.ease.mbti"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 200,
                  }}
                >
                  Download on Google Play
                </Button>
                <Typography variant="body2" color="text.secondary">
                  Or click to open in browser
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Privacy Policy Link */}
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            <Link
              to="/privacy"
              style={{
                color: '#ab47bc',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PersonaXPage;

