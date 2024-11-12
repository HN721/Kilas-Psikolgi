import React, { createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";

import Detail from "./Component/Detail";
import tokohPsikologi from "./api/tokoh";
import Pendahuluan from "./Page/Pendahuluan";
import Tokoh from "./Page/Tokoh";
export const tokohContext = createContext();

export default function App() {
  useEffect(() => {
    document.title = "Kilas Psikologi";
  }, []);
  return (
    <Router>
      <div className="bg-primary  w-full">
        <Navbar />
        <tokohContext.Provider value={tokohPsikologi}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pendahuluan" element={<Pendahuluan />} />
            <Route path="/tokoh" element={<Tokoh />} />
            <Route
              path="/detail/:id"
              element={<Detail Tokoh={tokohPsikologi} />}
            />
          </Routes>
        </tokohContext.Provider>
      </div>
    </Router>
  );
}
