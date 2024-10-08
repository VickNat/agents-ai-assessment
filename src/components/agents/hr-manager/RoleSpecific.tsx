'use client';

import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Tabs, Tab } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, RadialBarChart, RadialBar, Legend } from 'recharts';

// Mock data for the charts
const performanceData = [
  { name: 'Team A', performance: 85 },
  { name: 'Team B', performance: 70 },
  { name: 'Team C', performance: 90 },
];

const recruitmentData = [
  { name: 'Stage 1', candidates: 100 },
  { name: 'Stage 2', candidates: 60 },
  { name: 'Stage 3', candidates: 30 },
  { name: 'Stage 4', candidates: 15 },
];

const engagementData = [
  { name: 'Jan', engagement: 78 },
  { name: 'Feb', engagement: 85 },
  { name: 'Mar', engagement: 65 },
];

const RoleSpecific = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        HR Manager Dashboard
      </Typography>
      <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Performance" />
        <Tab label="Recruitment" />
        <Tab label="Engagement" />
      </Tabs>

      {/* Performance Tab */}
      {selectedTab === 0 && (
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Team Performance</Typography>
              <BarChart width={400} height={250} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="performance" fill="#3f51b5" />
              </BarChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Top Performers</Typography>
              <RadialBarChart width={300} height={250} cx={150} cy={125} innerRadius={20} outerRadius={120} barSize={15} data={performanceData}>
                <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="performance" />
                <Legend iconSize={10} layout="horizontal" align="center" verticalAlign="bottom" />
                <Tooltip />
              </RadialBarChart>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Recruitment Tab */}
      {selectedTab === 1 && (
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Recruitment Funnel</Typography>
              <BarChart width={600} height={300} data={recruitmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="candidates" fill="#3f51b5" />
              </BarChart>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Engagement Tab */}
      {selectedTab === 2 && (
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Employee Engagement</Typography>
              <LineChart width={400} height={250} data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="engagement" stroke="#3f51b5" />
              </LineChart>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RoleSpecific;
