'use client';
import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { AccountBalance, Assessment, Business, TrendingUp } from '@mui/icons-material';

const OverviewSection = () => {
  return (
    <Box component="section" p={3} mb={4}>
      {/* Overview Section */}
      <Card elevation={3} style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AI Co-founder Overview
          </Typography>
          <Typography variant="body1" color="textSecondary">
            The AI Co-founder helps with strategic decision-making, budget allocation, and team management. It analyzes data, provides insights, and assists with key business operations to streamline company growth.
          </Typography>
        </CardContent>
      </Card>

      {/* Key Features Section */}
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Key Features
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <TrendingUp color="primary" />
              </ListItemIcon>
              <ListItemText primary="Business Forecasting" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Assessment color="primary" />
              </ListItemIcon>
              <ListItemText primary="Decision Recommendations" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Business color="primary" />
              </ListItemIcon>
              <ListItemText primary="Risk Analysis" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <AccountBalance color="primary" />
              </ListItemIcon>
              <ListItemText primary="Financial Data Insights" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OverviewSection;
