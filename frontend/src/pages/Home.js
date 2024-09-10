// src/pages/Home.js
import React from 'react';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import MissionVision from '../components/MissionVision';
import WhyUs from '../components/WhyUs';
import DonateNow from '../components/DonateNow';
import OurTeam from '../components/OurTeam';
import UpperFooter from '../components/upperFooter';

const Home = () => {
  return (
    <div>
      <Slider />
      <section id="about-us">
        <AboutUs />
      </section>
      <MissionVision />
      <WhyUs />
      <DonateNow />
        <OurTeam />
      <section id="contact-us">
        <UpperFooter />
      </section>
    </div>
  );
};

export default Home;
