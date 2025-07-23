import React from 'react'
import Hero from '../components/Hero.jsx';
import FeatureDestination from '../components/FeatureDestination.jsx';
import ExclusiveOffers from '../components/ExclusiveOffers.jsx';
import Testimonial from '../components/Testimonial.jsx';
import NewsLetter from '../components/NewsLetter.jsx';

const Home = () => {
  return (
    <div>
        <Hero />
        <FeatureDestination/>
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
    </div>
  )
}

export default Home