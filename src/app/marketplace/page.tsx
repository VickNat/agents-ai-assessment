'use client'
import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListingCard from '@/components/marketplace/ListingCard';
import Header from '@/components/common/Header';
import salespersonAgent from '@/../public/assets/istockphoto-1758688771-612x612.png'
import cofounderAgent from '@/../public/assets/woman-7607337_640.png'
import hrManagerAgent from '@/../public/assets/ai-generated-8799908_640.png'

const values: any[] = [
  {
    name: "AI Salesperson",
    description: "Dashboards for lead generation, pipeline analysis, sales forecasts, and customer interaction metrics.",
    logo: salespersonAgent,
    category: ["business", "featured"],
    link: "/agents/salesperson/dashboard"
  },
  {
    name: "AI Co-founder",
    description: "Dashboards showing business metrics, strategy recommendations, financial data visualization, and a feed of key insights.",
    logo: cofounderAgent, // Replace with an actual image URL
    category: ["business", "featured"],
    link: "/agents/co-founder/dashboard"
  },
  {
    name: "AI HR Manager",
    description: "Dashboards for employee performance, recruitment analytics, and engagement metrics.",
    logo: hrManagerAgent,
    category: ["business", "productivity"],
    link: "/agents/hr-manager/dashboard"
  },
]

const tabs: any[] = [
  {
    label: "All",
    value: "all"
  },
  {
    label: "Featured",
    value: "featured"
  },
  {
    label: "Business",
    value: "business"
  },
  {
    label: "Productivity",
    value: "productivity"
  },
  {
    label: "Entertainment",
    value: "entertainment"
  }
]

const page = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [agents, setAgents] = useState<any[]>([])

  useEffect(() => {
    setAgents(values);
  }, [])

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    newValue === "all" ? setAgents(values) : setAgents(values.filter((agent) => agent.category.includes(newValue)));
  };

  return (
    <>
      <Header />
      <Stack
        maxWidth={{
          lg: "xl"
        }}
        mx={"auto"}
        mb={8}
        spacing={4}
        p={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Title and description */}
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={{
            xs: "100%",
            md: "50%"
          }}
        >
          <Typography variant={"h1"} color='textPrimary' textAlign={"center"}>AGENTS</Typography>
          <Typography variant={"body1"} textAlign={"center"} color='textSecondary'>
            Discover and install AI agents to help you with business, productivity, and entertainment tasks in your daily life.
          </Typography>
        </Stack>

        {/* Elegant search bar without a search button */}
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={{
            xs: "100%",
            md: "50%"
          }}
        >
          {/* Search bar */}
          <Stack
            direction={{
              xs: "column",
              md: "row"
            }}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <input
              type="text"
              placeholder="Search for items"
              style={{
                padding: "0.9rem 1.4rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                width: "100%"
              }}
              onChange={(e) => {
                console.log(e.target.value);
                setAgents(values.filter((agent) => agent.name.toLowerCase().includes(e.target.value.toLowerCase())));
              }}
            />
          </Stack>
        </Stack>

        {/* Agents listing tabs */}
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={{
            xs: "100%",
            md: "50%"
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Stack>

        {/* Agents listing */}
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={{
            xs: "100%",
            md: "50%"
          }}
        >
          {agents.length > 0 ? (
            agents.map((agent) => (
              <ListingCard key={agent.name} agent={agent} />
            ))
          ) : (
            <Typography variant={"body1"} color='textSecondary'>No agents found</Typography>
          )}
        </Stack>
      </Stack>
    </>
  )
}

export default page