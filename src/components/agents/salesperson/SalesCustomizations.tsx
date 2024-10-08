'use client';

import React, { useState } from 'react';
import { Drawer, FormControl, FormGroup, FormControlLabel, Checkbox, Button, Box, Typography } from '@mui/material';

const SalesCustomizations = () => {
  const [open, setOpen] = useState(false);
  const [customizationSettings, setCustomizationSettings] = useState({
    showTotalLeads: true,
    showConversionRate: true,
    showLeadSources: true,
    showLeadScores: true,
    showSalesForecast: true,
    showPipelineAnalysis: true,
  });

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleCustomizationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomizationSettings({
      ...customizationSettings,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      {/* Button to Open Customization Drawer */}
      <Button variant="contained" color="primary" onClick={toggleDrawer}>
        Customize Dashboard
      </Button>

      {/* Customization Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box width={300} p={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Dashboard Customizations
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              {/* Checkbox for each dashboard widget */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showTotalLeads}
                    onChange={handleCustomizationChange}
                    name="showTotalLeads"
                  />
                }
                label="Total Leads"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showConversionRate}
                    onChange={handleCustomizationChange}
                    name="showConversionRate"
                  />
                }
                label="Conversion Rate"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showLeadSources}
                    onChange={handleCustomizationChange}
                    name="showLeadSources"
                  />
                }
                label="Lead Sources"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showLeadScores}
                    onChange={handleCustomizationChange}
                    name="showLeadScores"
                  />
                }
                label="Lead Scores"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showSalesForecast}
                    onChange={handleCustomizationChange}
                    name="showSalesForecast"
                  />
                }
                label="Sales Forecast"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customizationSettings.showPipelineAnalysis}
                    onChange={handleCustomizationChange}
                    name="showPipelineAnalysis"
                  />
                }
                label="Pipeline Analysis"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Drawer>
    </>
  );
};

export default SalesCustomizations;
