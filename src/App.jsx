// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './composant/Header.jsx';
import Footer from './composant/Footer.jsx';
import Index from './page/index';
import AboutPage from "./page/about";
import Ressources from "./page/ressource.jsx";
import Event from "./page/evenement.jsx";
import Shop from "./page/boutique.jsx";
import Blog from "./page/blog.jsx";
import Contact from "./page/contact.jsx";
import Fracture from "./page/fracture.jsx";
import Apex from "./page/Apex.jsx";
import Sun from "./page/Sun.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/Nos-ressources" element={<Ressources />} />
          <Route path="/evenements" element={<Event />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fracture" element={<Fracture />} />
          <Route path="/apex" element={<Apex />} />
          <Route path="/the-sun" element={<Sun />} />
          {/* Ajoute d'autres routes ici si besoin */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;