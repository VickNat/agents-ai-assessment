'use client';

import React from 'react';
import { Box, Grid, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import WarningIcon from '@mui/icons-material/Warning';

const HROverview = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Overview Section */}
      <Typography variant="h4" gutterBottom>
        AI HR Manager Overview
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        The AI HR Manager assists with managing employee performance, optimizing recruitment strategies, and increasing employee engagement.
      </Typography>
      
      {/* Key Features Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Key Features
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TrendingUpIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Employee Performance Tracking & Feedback" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Recruitment Analytics & Candidate Sourcing" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Employee Engagement Metrics & Sentiment Analysis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InsightsIcon color="info" />
                  </ListItemIcon>
                  <ListItemText primary="Team Health & Productivity Insights" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarningIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary="Talent Retention Forecasts & Risk Analysis" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Additional Info or Image Section */}
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Why Use AI HR Manager?
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" color="textSecondary">
                The AI HR Manager enhances decision-making with data-driven insights and automated recommendations, allowing HR teams to focus on strategic initiatives while automating repetitive tasks.
              </Typography>
              {/* You could add an image or visual representation here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HROverview;
