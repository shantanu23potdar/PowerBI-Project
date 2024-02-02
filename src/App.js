// src/App.js
import React from 'react';
import SideNavbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MSRReport from './pages/msrDash';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='flex'>

      <SideNavbar />
    <Routes>
      <Route element={<MSRReport/>} path='/msrreport'/>
    </Routes>
    </div>
    </BrowserRouter>
      
    </>
  );
}

export default App;
