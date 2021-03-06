import "./App.css";
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screns/HomeScreen";
import { CreateScreen } from "./Screns/CreateScreen";

//import { Container } from "react-bootstrap";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { UpdateScreen } from "./Screns/UpdateScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/update/:id" element={<UpdateScreen />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
