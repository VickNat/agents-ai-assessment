'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, FormControl, FormGroup, FormControlLabel, Switch, MenuItem, Select, InputLabel, Radio, RadioGroup, FormLabel, Grid, Divider } from '@mui/material';

const UserCustomizationSection = () => {
  // State for customization settings
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [visualization, setVisualization] = useState('graph');
  const [widgets, setWidgets] = useState({
    revenue: true,
    expenses: true,
    profitMargin: true,
  });

  // Handle switch toggles
  const handleToggle = (event: any) => {
    setWidgets({ ...widgets, [event.target.name]: event.target.checked });
  };

  // Handle metric selection
  const handleMetricChange = (event: any) => {
    setSelectedMetric(event.target.value);
  };

  // Handle visualization style selection
  const handleVisualizationChange = (event: any) => {
    setVisualization(event.target.value);
  };

  return (
    <Box component="section" p={3} mb={4}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            User Customization
          </Typography>

          {/* Widget Selection Section */}
          <Typography variant="subtitle1" gutterBottom>
            Add/Remove Widgets
          </Typography>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={widgets.revenue} onChange={handleToggle} name="revenue" />}
                label="Revenue"
              />
              <FormControlLabel
                control={<Switch checked={widgets.expenses} onChange={handleToggle} name="expenses" />}
                label="Expenses"
              />
              <FormControlLabel
                control={<Switch checked={widgets.profitMargin} onChange={handleToggle} name="profitMargin" />}
                label="Profit Margin"
              />
            </FormGroup>
          </FormControl>

          <Divider style={{ margin: '20px 0' }} />

          {/* Metric Selection Section */}
          <Typography variant="subtitle1" gutterBottom>
            Select Metric to Display
          </Typography>
          <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel id="metric-select-label">Metric</InputLabel>
            <Select
              labelId="metric-select-label"
              value={selectedMetric}
              onChange={handleMetricChange}
              label="Metric"
            >
              <MenuItem value="revenue">Revenue</MenuItem>
              <MenuItem value="expenses">Expenses</MenuItem>
              <MenuItem value="profitMargin">Profit Margin</MenuItem>
            </Select>
          </FormControl>

          <Divider style={{ margin: '20px 0' }} />

          {/* Visualization Style Section */}
          <Typography variant="subtitle1" gutterBottom>
            Data Visualization Style
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose Style</FormLabel>
            <RadioGroup row value={visualization} onChange={handleVisualizationChange}>
              <FormControlLabel value="graph" control={<Radio />} label="Graph" />
              <FormControlLabel value="table" control={<Radio />} label="Table" />
              <FormControlLabel value="chart" control={<Radio />} label="Chart" />
            </RadioGroup>
          </FormControl>

          {/* Show selected settings */}
          <Box mt={3}>
            <Typography variant="body2" color="textSecondary">
              Selected Metric: <strong>{selectedMetric}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Selected Visualization Style: <strong>{visualization}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Active Widgets: {Object.keys(widgets).filter(widget => widgets[widget as keyof typeof widgets]).join(', ')}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserCustomizationSection;
