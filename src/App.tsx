import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact/ContactMe";
import Background from "./components/background/Background";

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
