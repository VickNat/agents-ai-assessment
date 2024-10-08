'use client';

import React from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// Sample data for RadialBar chart (Customer Satisfaction)
const satisfactionData = [
  { name: 'Very Satisfied', value: 75, fill: '#82ca9d' },
  { name: 'Satisfied', value: 20, fill: '#8884d8' },
  { name: 'Neutral', value: 5, fill: '#ffc658' },
];

// Sample data for other stats
const metrics = {
  interactions: 450,
  avgResponseTime: '2h 15m',
  conversionRate: '25.3%',
  satisfactionScore: 85, // Percentage
};

const CustomerInteraction = () => {
  return (
    <Grid container spacing={3}>
      {/* Interactions Count */}
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Total Interactions
            </Typography>
            <Typography variant="h4" color="primary">
              {metrics.interactions}
            </Typography>
            <Typography variant="body2">Calls, emails, and meetings</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Customer Satisfaction Score */}
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Satisfaction Score
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                variant="determinate"
                value={metrics.satisfactionScore}
                size={80}
                thickness={5}
              />
              <Box position="absolute" display="flex" justifyContent="center">
                <Typography variant="h6" color="textSecondary">{metrics.satisfactionScore}%</Typography>
              </Box>
            </Box>
            <Typography variant="body2" align="center">
              Based on customer feedback
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Average Response Time */}
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Avg. Response Time
            </Typography>
            <Typography variant="h4" color="secondary">
              {metrics.avgResponseTime}
            </Typography>
            <Typography variant="body2">Across all interactions</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Conversion Rate */}
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Conversion Rate
            </Typography>
            <Typography variant="h4" color="secondary">
              {metrics.conversionRate}
            </Typography>
            <Typography variant="body2">From customer interactions</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Customer Satisfaction RadialBar */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Customer Satisfaction Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={20} data={satisfactionData}>
                <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="value" />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CustomerInteraction;
