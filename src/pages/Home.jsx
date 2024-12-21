import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Project';
import Location from '../components/Location';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <>
      <WhyChooseUs />
      <Services />
      <Process />
      <Projects />
      <Location />
      <Blog />
    </>
  );
}
