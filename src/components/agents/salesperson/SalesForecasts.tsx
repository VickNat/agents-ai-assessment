'use client';

import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for charts
const salesTrendData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4000 },
  { month: 'May', sales: 6000 },
];

const revenueForecastData = [
  { month: 'Q1', forecast: 12000 },
  { month: 'Q2', forecast: 15000 },
  { month: 'Q3', forecast: 13000 },
  { month: 'Q4', forecast: 18000 },
];

// Sample data for the table
const forecastTableData = [
  { period: 'Q1', forecast: '$12,000', actual: '$11,500' },
  { period: 'Q2', forecast: '$15,000', actual: '$14,700' },
  { period: 'Q3', forecast: '$13,000', actual: '$13,200' },
  { period: 'Q4', forecast: '$18,000', actual: 'TBD' },
];

const SalesForecasts = () => {
  return (
    <Grid container spacing={3}>
      {/* Sales Trends (LineChart) */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sales Trends
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Revenue Forecasts (AreaChart) */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Revenue Forecasts
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={revenueForecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="forecast" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Forecast Table */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Detailed Forecasts
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Period</TableCell>
                  <TableCell>Forecasted Revenue</TableCell>
                  <TableCell>Actual Revenue</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {forecastTableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.period}</TableCell>
                    <TableCell>{row.forecast}</TableCell>
                    <TableCell>{row.actual}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SalesForecasts;
