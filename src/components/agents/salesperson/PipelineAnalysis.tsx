import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the charts
const dataPipeline = [
  { name: 'New', value: 300 },
  { name: 'Negotiation', value: 200 },
  { name: 'Closed', value: 150 },
];

const dataWinRate = [
  { name: 'Win Rate', value: 75 },
  { name: 'Loss Rate', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PipelineAnalysis = () => {
  return (
    <Grid container spacing={3}>
      {/* Average Deal Size */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Average Deal Size
            </Typography>
            <Typography variant="h4" color="primary">
              $12,500
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Pipeline Velocity */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Pipeline Velocity
            </Typography>
            <Typography variant="h4" color="secondary">
              30 days
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Deals in Pipeline Stages (Pie Chart) */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Deals in Pipeline Stages
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataPipeline}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {dataPipeline.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Win Rate (Bar Chart) */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Win Rate
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataWinRate}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default PipelineAnalysis;
