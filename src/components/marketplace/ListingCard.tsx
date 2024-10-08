'use client'

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

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
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={agent.logo}
          alt={agent.name}
          style={{
            height: '100px',
            width: 'auto'
          }}
        />
      </Box>

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
        <Button
          href={agent.link || '/marketplace'}
          variant="text" color="primary">
          View Details
        </Button>
      </Box>
    </StyledCard>
  );
};

export default ListingCard;
