import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './page/Top.jsx';
import Contact from "./page/Contact.jsx";
import News from "./page/News.jsx";
import Services from "./page/Services.jsx";
import Works from "./page/Works.jsx";
import About from "./page/About.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  )
}

export default App
