import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CardsSections from "./CardsSections";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";
import '../../style/style.css'

function LandingPage() {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroSection />
      <CardsSections />
      <BottomBanner />
      <Footer/>
    </div>
  );
}

export default LandingPage;
