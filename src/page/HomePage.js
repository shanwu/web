import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useNavigate } from 'react-router-dom';
import VLLabLogo from '../component/VLLabLogo';
import vlLabBg from '../image/vl_lab_bg.webp';
import personaxAppIcon from '../image/personax_app_icon.webp';

const HomePage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Global Reach', value: '15+', icon: PublicIcon, subtitle: 'Languages Supported' },
    { label: 'AI-Powered', value: 'GPT', icon: PsychologyIcon, subtitle: 'Intelligence' },
    { label: 'Modern Stack', value: 'Cutting-Edge', icon: CodeIcon, subtitle: 'Technology' },
    { label: 'User-Centric', value: 'Focused', icon: LanguageIcon, subtitle: 'Design Philosophy' },
  ];

  return (
    <Box>
      {/* Hero Section with Two-Headed Dragon Symbol */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${vlLabBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <VLLabLogo height={96} color="#ffffff" />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ mt: 4, fontWeight: 500, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            VL Lab
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ mb: 4, opacity: 0.95, maxWidth: '700px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', lineHeight: 1.6, fontWeight: 400 }}
          >
            Evolve Your Way: AI-Powered Insights to Help You Discover Your Unique Path and Grow in Your Chosen Direction
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/products')}
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Explore Products
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/about')}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Learn More About Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Grid item xs={6} md={3} key={stat.label}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '& .MuiTypography-root': {
                          color: 'white',
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: 48,
                            color: 'primary.main',
                            transition: 'color 0.3s ease-in-out',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: 'primary.main',
                          transition: 'color 0.3s ease-in-out',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                          transition: 'color 0.3s ease-in-out',
                          mb: stat.subtitle ? 0.5 : 0,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      {stat.subtitle && (
                        <Typography
                          variant="body2"
                          component="div"
                          sx={{
                            color: 'text.secondary',
                            opacity: 0.7,
                            transition: 'color 0.3s ease-in-out',
                          }}
                        >
                          {stat.subtitle}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Our Products
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card
                onClick={() => navigate('/products/personax')}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={personaxAppIcon}
                    alt="PersonaX App Icon"
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 3,
                      boxShadow: 4,
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    PersonaX - Discover Your MBTI Personality
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A comprehensive Android app for personality discovery with AI-powered insights.
                    Take a 40-question MBTI test, explore 16 personality types, and get personalized
                    analysis powered by GPT.
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/products/personax');
                    }}
                    sx={{ pointerEvents: 'auto' }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

