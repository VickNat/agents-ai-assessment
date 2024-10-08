import MetricsSection from '@/components/agents/co-founder/MetricsSection'
import OverviewSection from '@/components/agents/co-founder/OverviewSection'
import UserCustomizationSection from '@/components/agents/co-founder/UserCustomizationSection'
import { Grid, Stack } from '@mui/material'
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
      }}
    >
      <OverviewSection />
      <Grid container>
        <Grid item xs={12} md={8}>
          <MetricsSection />
        </Grid>
        <Grid item xs={12} md={4}>
          <UserCustomizationSection />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default page