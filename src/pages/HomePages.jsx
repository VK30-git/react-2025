import React from 'react'
/* here we want the hero componenet */
import Hero from '../components/hero.jsx';
import HomeCards from '../components/home-cards.jsx';
import JobListings from '../components/JobListings.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';
const HomePage = () => {
  return (
    <>   
    <Hero/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>

  )
}

export default HomePage