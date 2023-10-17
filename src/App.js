import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Logo from "./Components/Logo/Logo";
import Galery from "./Components/Portfolio/Galery";
import Skills from "./Components/Skills/Skills";
import Home from "./Components/Home/Home";
import { ToogleStorage } from "./Components/ToogleContext/ToogleContext";
import JobCallendar from "./Components/Tools/JobCallendar/JobCallendar";
import Tools from "./Components/Tools/Tools";


function App() {
  const [toogle, setToogle] = React.useState(null);

  return (
    
    <BrowserRouter>
      <ToogleStorage >

        <Home />
          <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/tools" element={<Tools />} />
          </Routes>
      </ToogleStorage>
     </BrowserRouter>
    
  );
}

export default App;
