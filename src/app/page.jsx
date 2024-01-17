import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar";
import PopularDestination from "@/components/PopularDestination/PopularDestination";
import Explore from "@/components/explore/Explore";
import WhatsComing from "@/components/whatsComing/WhatsComing";
import WhyUs from "@/components/whyUs/WhyUs";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <PopularDestination />
      <WhatsComing />
      <Explore />
      <WhyUs />
    </div>
  );
}
