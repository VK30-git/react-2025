import React from 'react';
/* import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import HomeCards from './components/home-cards.jsx';
import JobListings from './components/JobListings.jsx';
import ViewAllJobs from './components/ViewAllJobs.jsx'; */
/* now we are using react router to route each components of the pages....instead of importing navbar.jsx homecards.jsx etc like that  */

import MainLayouts from './layouts/MainLayouts.jsx';
import HomePage  from './pages/HomePages.jsx';    
import NotFoundPage from './pages/NotFoundPage.jsx';  
import JobsPage from './pages/JobsPage.jsx';
import JobPage from './pages/JobPage.jsx';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>} >
    <Route index element={<HomePage/>} />
    <Route path="/jobs" element={<JobsPage/>} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route path="/jobs/:id" element={<JobPage/>} />
    </Route>
  )
) 
const App = () => {
 
  return <RouterProvider router={router} />;  
}

export default App;