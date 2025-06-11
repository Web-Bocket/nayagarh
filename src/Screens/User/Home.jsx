import React from 'react'
import Hero from '../../Components/Home/Hero'
import FooterBanner from '../../Components/FooterBanner'
import NYDDetails from '../../Components/Home/NYDDetails'
import NYDShortcuts from '../../Components/Home/NYDShortcuts'


const Home = () => {
  return (
    <div>
      <Hero/>
      <NYDDetails/>
      <NYDShortcuts/>
      <FooterBanner/>
    </div>
  )
}

export default Home
