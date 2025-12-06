import React from 'react';
import { Container, Box, Typography, Paper, Divider } from '@mui/material';

const PrivacyPolicyPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Privacy Policy for PersonaX
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mt: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to PersonaX! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            2. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            When you use PersonaX, we may collect information such as:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body1" component="span" sx={{ fontWeight: 600 }}>
                Personal Information:
              </Typography>
              <Typography variant="body1" component="span">
                {' '}We do not collect any personally identifiable information directly through the app.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" sx={{ fontWeight: 600 }}>
                Usage Data:
              </Typography>
              <Typography variant="body1" component="span">
                {' '}We collect information on how the app is accessed and used, such as time spent on the app and features used. This helps us improve the user experience.
              </Typography>
            </li>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            3. Use of Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information collected is used to improve the performance of the app and provide a better experience for users.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            4. Data Sharing and Security
          </Typography>
          <Typography variant="body1" paragraph>
            PersonaX does not share personal data with third parties. We take appropriate measures to protect your information, including using encryption.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            As a user, you can stop using the app at any time. If you have any concerns about how your data is handled, please contact us.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            6. Changes to this Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. When we do, we will post the updated policy in the app, and the changes will be effective immediately.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            7. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:shanwustore@gmail.com"
              style={{ color: '#ab47bc', textDecoration: 'none' }}
            >
              shanwustore@gmail.com
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicyPage;

