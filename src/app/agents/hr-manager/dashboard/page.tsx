import HROverview from '@/components/agents/hr-manager/HROverview'
import HRUserCustomization from '@/components/agents/hr-manager/HRUserCustomization'
import RoleSpecific from '@/components/agents/hr-manager/RoleSpecific'
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
      <HROverview />
      <HRUserCustomization />
      <RoleSpecific />
    </Stack>
  )
}

export default page