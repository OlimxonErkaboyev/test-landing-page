import React from "react";
import HeroSection from "../../apps/sections/hero";
import Services from "../../apps/sections/services";
import Komanda from "../../apps/sections/komanda";
import Advantages from "../../apps/sections/advantages";
import Work from "../../apps/sections/work";
import Callback from "../../apps/sections/callback";
import Blog from "../../apps/sections/blog";
import Partners from "../../apps/sections/partners";
import Contact from "../../apps/sections/contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Komanda />
      <Advantages />
      <Work />
      <Callback />
      <Blog />
      <Partners />
      <Contact />
    </>
  );
};

export default Home;
