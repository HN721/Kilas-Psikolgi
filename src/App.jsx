import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider, UserContext } from "./UserContext";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import Detail from "./Component/Detail";
import tokohPsikologi from "./api/tokoh";
import Pendahuluan from "./Page/Pendahuluan";
import Tokoh from "./Page/Tokoh";
import Quizz from "./Page/Quizz";
import Start from "./Page/Start";
export const tokohContext = createContext();
export default function App() {
  return (
    <UserProvider>
      <Router>
        <MainContent />
      </Router>
    </UserProvider>
  );
}

function MainContent() {
  const { showIntro } = React.useContext(UserContext);

  if (showIntro) {
    return <Start />;
  }

  return (
    <div className="bg-secondary  w-full">
      <Navbar />
      <tokohContext.Provider value={tokohPsikologi}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pendahuluan" element={<Pendahuluan />} />
          <Route path="/tokoh" element={<Tokoh />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route
            path="/detail/:id"
            element={<Detail Tokoh={tokohPsikologi} />}
          />
        </Routes>
      </tokohContext.Provider>
    </div>
  );
}
