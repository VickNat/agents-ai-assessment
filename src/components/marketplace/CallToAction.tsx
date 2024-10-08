'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CallToAction = () => {
  return (
    <Box
      py={8}
      sx={{
        // backgroundColor: 'primary.main',
        color: 'secondary.main',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ready to Transform Your Business?
      </Typography>
      <Typography variant="body1" mb={4}>
        Explore our AI Agents today and unlock new possibilities.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          px: 6,
          py: 1.5,
          fontSize: '1rem',
          borderRadius: '30px',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'secondary.dark',
          },
        }}
      >
        Get Started Now
      </Button>
    </Box>
  );
};

export default CallToAction;

