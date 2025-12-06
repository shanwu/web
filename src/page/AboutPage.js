import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';

const AboutPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities in digital experiences.',
    },
    {
      title: 'Quality',
      description: 'We are committed to building high-quality, reliable, and user-focused products.',
    },
    {
      title: 'Excellence',
      description: 'We strive for technical excellence and best practices in everything we build.',
    },
  ];

  const techStack = [
    'React',
    'Material Design 3',
    'Kotlin',
    'Jetpack Compose',
    'Firebase',
    'Modern Web Technologies',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About VL Lab
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          VL Lab is a development team focused on creating innovative mobile applications
          and digital products. We are dedicated to building user-centric solutions that
          leverage modern technology to deliver exceptional experiences.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          To be a leading development team known for innovation, quality, and technical
          excellence. We aim to create products that make a meaningful impact on users'
          lives while maintaining the highest standards of development practices.
        </Typography>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Our Values
        </Typography>
        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid item xs={12} md={4} key={value.title}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h5" gutterBottom>
          Technology Stack
        </Typography>
        <Typography variant="body1" paragraph>
          We use modern technologies and best practices to build our products:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
          {techStack.map((tech) => (
            <Paper
              key={tech}
              elevation={1}
              sx={{
                px: 2,
                py: 1,
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Typography variant="body2">{tech}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;

