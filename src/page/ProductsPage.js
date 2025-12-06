import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import personaxAppIcon from '../image/personax_app_icon.webp';

const ProductsPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'personax',
      name: 'PersonaX',
      description:
        'A comprehensive Android app for personality discovery with AI-powered insights. Take a 40-question MBTI test, explore 16 personality types, and get personalized analysis.',
      path: '/products/personax',
      icon: personaxAppIcon,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Discover our innovative digital products designed to enhance your experience.
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              onClick={() => navigate(product.path)}
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
              <Box
                sx={{
                  height: 200,
                  background: product.icon
                    ? 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)'
                    : 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {product.icon ? (
                  <Box
                    component="img"
                    src={product.icon}
                    alt={`${product.name} App Icon`}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 3,
                      boxShadow: 4,
                    }}
                  />
                ) : (
                  <Typography variant="h4" color="white" fontWeight="bold">
                    {product.name}
                  </Typography>
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(product.path);
                  }}
                  sx={{ pointerEvents: 'auto' }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;

