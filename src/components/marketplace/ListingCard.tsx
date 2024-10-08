'use client'

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const ListingCard = ({ agent }: any) => {
  return (
    <StyledCard>
      {/* Left: Agent Logo */}
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80, borderRadius: '50%' }}
        image={agent.logo}
        alt={`${agent.name} logo`}
      />

      {/* Middle: Agent Details */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {agent.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {agent.description}
        </Typography>
      </CardContent>

      {/* Right: Button to Agent Details */}
      <Box sx={{ alignSelf: 'flex-end', mt: { xs: 2, sm: 0 } }}>
        <Button variant="text" color="primary">
          View Details
        </Button>
      </Box>
    </StyledCard>
  );
};

export default ListingCard;
