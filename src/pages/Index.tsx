
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Sketchbook from '../components/Sketchbook';
import DigitalArt from '../components/DigitalArt';
import AnimationVideos from '../components/AnimationVideos';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Intro />
      <Portfolio />
      <DigitalArt />
      <Sketchbook />
      <AnimationVideos />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
