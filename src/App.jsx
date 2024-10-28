import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Page/Home';

import Detail from './Component/Detail';
import tokohPsikologi from './api/tokoh';

export default function App() {
  return (
    <Router>
      <div className="bg-primary w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home Figur={tokohPsikologi}/>} />
         
          <Route path="/detail/:id" element={<Detail Tokoh={tokohPsikologi} />} />
        </Routes>
      </div>
    </Router>
  );
}
