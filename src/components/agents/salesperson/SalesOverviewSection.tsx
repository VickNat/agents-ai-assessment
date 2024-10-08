'use client';
import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';

const SalesOverviewSection = () => {
  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 4 }}>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        AI Salesperson Dashboard
      </Typography>

      {/* Description */}
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        The AI Salesperson helps generate leads, analyze sales pipelines, forecast sales trends,
        and track customer interactions to improve conversion rates.
      </Typography>

      {/* Key Features Section */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {/* Lead Generation */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Lead Generation & Scoring
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Identify and prioritize potential clients based on behavior and demographics.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pipeline Analysis */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Pipeline Analysis
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Analyze the sales funnel stages to optimize deal closure and monitor progress.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Forecasting */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Sales Forecasting
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Predict future sales performance to help make informed business decisions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Interaction Tracking */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Customer Interaction Tracking
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Monitor communication channels with potential and existing customers to boost engagement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesOverviewSection;
