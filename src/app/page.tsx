import Header from "@/components/common/Header";
import CallToAction from "@/components/marketplace/CallToAction";
import HeroSection from "@/components/marketplace/HeroSection";
import HowItWorks from "@/components/marketplace/HowItWorks";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Stack
        maxWidth={{
          lg: "xl"
        }}
        mx={"auto"}
        spacing={2}
        // p={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Hero section */}
        <HeroSection />
        <HowItWorks />
        <CallToAction />
      </Stack>
    </>
  );
}
