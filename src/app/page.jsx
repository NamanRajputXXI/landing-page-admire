import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar";
import PopularDestination from "@/components/PopularDestination/PopularDestination";
import Explore from "@/components/Explore";
import WhatsComing from "@/components/WhatsComing";
import WhyUs from "@/components/WhyUs";
import AirplanePartner from "@/components/AirplanePartner";
import CustomerSays from "@/components/CustomerSays";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <HeroSection />
      <PopularDestination />
      <WhatsComing />
      <Explore />
      <WhyUs />
      <AirplanePartner />
      <CustomerSays />
      <Faq />
      <Footer />
    </div>
  );
}
