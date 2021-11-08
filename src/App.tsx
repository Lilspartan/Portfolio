import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;