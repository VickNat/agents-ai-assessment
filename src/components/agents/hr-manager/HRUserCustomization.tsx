'use client';

import React, { useState } from 'react';
import { Box, Button, Drawer, FormControl, FormGroup, FormControlLabel, Switch, Select, MenuItem, Typography } from '@mui/material';

const HRUserCustomization = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedMetrics, setSelectedMetrics] = useState({
    performance: true,
    recruitment: true,
    engagement: true,
  });
  const [chartTypes, setChartTypes] = useState({
    performance: 'Bar Chart',
    recruitment: 'Bar Chart',
    engagement: 'Line Chart',
  });

  const toggleDrawer = (open: any) => () => {
    setDrawerOpen(open);
  };

  const handleMetricToggle = (metric: any) => (event: any) => {
    setSelectedMetrics({ ...selectedMetrics, [metric]: event.target.checked });
  };

  const handleChartTypeChange = (metric: any) => (event: any) => {
    setChartTypes({ ...chartTypes, [metric]: event.target.value });
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={toggleDrawer(true)}>
        Customize Dashboard
      </Button>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Customize Dashboard
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              {/* Performance Metric Toggle */}
              <FormControlLabel
                control={<Switch checked={selectedMetrics.performance} onChange={handleMetricToggle('performance')} />}
                label="Display Performance Metrics"
              />
              {/* Performance Chart Type Selector */}
              {selectedMetrics.performance && (
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Chart Type for Performance</Typography>
                  <Select
                    value={chartTypes.performance}
                    onChange={handleChartTypeChange('performance')}
                  >
                    <MenuItem value="Bar Chart">Bar Chart</MenuItem>
                    <MenuItem value="Line Chart">Line Chart</MenuItem>
                    <MenuItem value="Pie Chart">Pie Chart</MenuItem>
                  </Select>
                </FormControl>
              )}

              {/* Recruitment Metric Toggle */}
              <FormControlLabel
                control={<Switch checked={selectedMetrics.recruitment} onChange={handleMetricToggle('recruitment')} />}
                label="Display Recruitment Metrics"
              />
              {/* Recruitment Chart Type Selector */}
              {selectedMetrics.recruitment && (
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Chart Type for Recruitment</Typography>
                  <Select
                    value={chartTypes.recruitment}
                    onChange={handleChartTypeChange('recruitment')}
                  >
                    <MenuItem value="Bar Chart">Bar Chart</MenuItem>
                    <MenuItem value="Line Chart">Line Chart</MenuItem>
                    <MenuItem value="Pie Chart">Pie Chart</MenuItem>
                  </Select>
                </FormControl>
              )}

              {/* Engagement Metric Toggle */}
              <FormControlLabel
                control={<Switch checked={selectedMetrics.engagement} onChange={handleMetricToggle('engagement')} />}
                label="Display Engagement Metrics"
              />
              {/* Engagement Chart Type Selector */}
              {selectedMetrics.engagement && (
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Chart Type for Engagement</Typography>
                  <Select
                    value={chartTypes.engagement}
                    onChange={handleChartTypeChange('engagement')}
                  >
                    <MenuItem value="Bar Chart">Bar Chart</MenuItem>
                    <MenuItem value="Line Chart">Line Chart</MenuItem>
                    <MenuItem value="Pie Chart">Pie Chart</MenuItem>
                  </Select>
                </FormControl>
              )}
            </FormGroup>
          </FormControl>
        </Box>
      </Drawer>
    </>
  );
};

export default HRUserCustomization;
