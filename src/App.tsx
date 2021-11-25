import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";

import GabirMotorsInfo from './Pages/InfoPages/GabirMotors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/gabirmotors" element={<GabirMotorsInfo />} />
    </Routes>
  );
}

export default App;