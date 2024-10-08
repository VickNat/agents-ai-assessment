'use client';

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';

const LeadGeneration = () => {
  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 4 }}>
      {/* Section Title */}
      <Typography variant="h5" gutterBottom fontWeight="bold" align="center">
        Lead Generation Dashboard
      </Typography>

      {/* Cards Layout */}
      <Grid container spacing={3}>
        {/* Total Leads Generated */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Total Leads
              </Typography>
              {/* Placeholder for metric or chart */}
              <Typography variant="h4" color="primary">
                1,245
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Lead Conversion Rate */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Conversion Rate
              </Typography>
              {/* Placeholder for metric or chart */}
              <Typography variant="h4" color="secondary">
                18.5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Lead Sources */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Top Lead Sources
              </Typography>
              {/* Placeholder for metric or chart */}
              <Typography variant="body1">
                Social Media, Google Ads, Email Campaigns
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Lead Scores */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Lead Scores
              </Typography>
              {/* Placeholder for chart */}
              <Typography variant="body1">
                High: 35% <br /> Medium: 45% <br /> Low: 20%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeadGeneration;
