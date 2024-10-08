import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image from '@/../public/assets/Logo.svg'

const HeroSection = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row"
      }}
      spacing={2}
      justifyContent={"center"}
      alignItems={"start"}
      height={"100%"}
      width={"100%"}
      mx={"auto"}
      maxWidth={{
        lg: "lg"
      }}
      gap={4}
      py={{
        xs: 4,
        md: 20
      }}
    >
      {/* Text and button side */}
      <Stack
        spacing={4}
        justifyContent={"center"}
        alignItems={"start"}
        width={{
          xs: "100%",
          md: "50%"
        }}
      >
        <Typography variant={"h1"}
          sx={{
            fontWeight: 700,
            fontSize: "3.5rem"
          }}
        >Welcome to
          <span
            style={{
              color: "#4CAF50",
              margin: "0 0.5rem"
            }}
          >
            AGENTS2
          </span>
          Marketplace
        </Typography>
        <Typography variant={"body1"}>Buy and sell items on the marketplace</Typography>
        <Button size='large'
        href='/marketplace'
        variant={"contained"}>Explore more</Button>
      </Stack>

      {/* Image side */}
      <Stack
        width={{
          xs: "100%",
          md: "50%"
        }}
        justifyContent={"center"}
        padding={4}
      >
        <Image
          src={image}
          alt={"Logo"}
          style={{
            margin: "0 auto",
            width: "100%",
            height: "auto"
          }}
        />
      </Stack>

    </Stack>
  )
}

export default HeroSection