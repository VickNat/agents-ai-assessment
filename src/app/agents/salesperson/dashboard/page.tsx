'use client';

import CustomerInteraction from '@/components/agents/salesperson/CustomerInteraction';
import LeadGeneration from '@/components/agents/salesperson/LeadGeneration'
import PipelineAnalysis from '@/components/agents/salesperson/PipelineAnalysis'
import SalesCustomizations from '@/components/agents/salesperson/SalesCustomizations';
import SalesForecasts from '@/components/agents/salesperson/SalesForecasts';
import SalesOverviewSection from '@/components/agents/salesperson/SalesOverviewSection'
import { Stack } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Stack
    // direction={{
    //   xs: "column",
    //   md: "row"
    // }}
    spacing={2}
    justifyContent={"center"}
    alignItems={"center"}
    height={"100%"}
    width={"100%"}
    mx={"auto"}
    maxWidth={{
      lg: "lg"
    }}
    gap={4}
    py={{
      xs: 4,
      md: 10
    }}>
      <SalesOverviewSection />
      <SalesCustomizations />
      <LeadGeneration />
      <PipelineAnalysis />
      <SalesForecasts />
      <CustomerInteraction />
    </Stack>
  )
}

export default page