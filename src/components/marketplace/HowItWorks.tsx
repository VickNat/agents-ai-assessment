'use client';

import React from 'react';
import { Box, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchIcon fontSize="large" color='secondary' />,
      title: "Explore AI Agents",
      description: "Browse through our AI agents and find the one tailored to your business needs.",
    },
    {
      icon: <BuildIcon fontSize="large"  color='secondary' />,
      title: "Customize & Interact",
      description: "Customize agent features and interact with them for tailored insights and actions.",
    },
    {
      icon: <SendIcon fontSize="large"  color='secondary' />,
      title: "Get Results",
      description: "Receive real-time data, recommendations, and execute tasks with ease.",
    },
  ];

  return (
    <Box py={8} m={0} bgcolor="#f5f5f5" width={"98.9vw"}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        How It Works
      </Typography>
      <Typography variant="body1" align="center" mb={4}>
        Get started with our easy 3-step process.
      </Typography>
      <Grid container spacing={4} justifyContent="center" mx={"auto"} maxWidth={"1200px"}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ textAlign: 'center', padding: 4 }}>
              <IconButton
                color="primary"
                size="large"
                sx={{
                  bgcolor: 'primary.light',
                  mb: 2,
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                {step.icon}
              </IconButton>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
