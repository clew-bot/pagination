import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Detail from "./components/Posts";
function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
