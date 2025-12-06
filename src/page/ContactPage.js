import React from 'react';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ContactPage = () => {
  const faqs = [
    {
      question: 'What is PersonaX?',
      answer:
        'PersonaX is a comprehensive Android application that helps users discover their MBTI personality type through a 40-question test. It provides AI-powered analysis, scenario training, and personalized insights.',
    },
    {
      question: 'How do I download PersonaX?',
      answer:
        'PersonaX is available on Google Play Store. You can download it directly from the Play Store app or visit our product page for a direct link.',
    },
    {
      question: 'What languages does PersonaX support?',
      answer:
        'PersonaX supports 15+ languages including English, Chinese (Simplified/Traditional), Japanese, Korean, Spanish, French, German, Italian, Russian, Hindi, Arabic, Turkish, Ukrainian, Vietnamese, and Portuguese (Brazilian).',
    },
    {
      question: 'How can I contact VL Lab?',
      answer:
        'You can reach out to us through our contact information. We welcome feedback, questions, and collaboration opportunities.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact & Support
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
          <Typography variant="body1" paragraph>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:shanwustore@gmail.com"
              style={{ color: '#ab47bc', textDecoration: 'none' }}
            >
              shanwustore@gmail.com
            </a>
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ mt: 2 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Support Resources
        </Typography>
        <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
          <Typography variant="body1" paragraph>
            For technical support, feature requests, or bug reports, please contact us through
            the email address above. We aim to respond to all inquiries within 48 hours.
          </Typography>
          <Typography variant="body1">
            For more information about our products, visit the{' '}
            <a href="/products" style={{ color: '#ab47bc' }}>
              Products
            </a>{' '}
            page.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactPage;

