'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sample data for charts
const financialData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
];

const pieData = [
  { name: 'Marketing', value: 400 },
  { name: 'Operations', value: 300 },
  { name: 'R&D', value: 300 },
  { name: 'Sales', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MetricsSection = () => {
  return (
    <Box component="section" p={3} mb={4}>
      {/* Business Metrics Section */}
      <Card elevation={3} style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Business Metrics
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" color="primary">
                $1.2M
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Revenue Growth
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" color="primary">
                +15%
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Customer Acquisition
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" color="primary">
                87%
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Profit Margin
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Strategy Recommendations Section */}
      <Card elevation={3} style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Strategy Recommendations
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Based on current market trends, it&apos;s recommended to allocate 30% more budget to sales and marketing for Q4 to accelerate growth in customer acquisition.
          </Typography>
        </CardContent>
      </Card>

      {/* Financial Data Section */}
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Financial Data
          </Typography>
          <Grid container spacing={3}>
            {/* Line Chart for Revenue vs Expenses */}
            <Grid item xs={12} md={8}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            
            {/* Pie Chart for Budget Distribution */}
            <Grid item xs={12} md={4}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MetricsSection;
