import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import HomeCards from './components/home-cards.jsx';
import JobListings from './components/JobListings.jsx';
import ViewAllJobs from './components/ViewAllJobs.jsx';
const App = () => {
 
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App;