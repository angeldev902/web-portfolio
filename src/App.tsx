import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
//Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
//Pages
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div>
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path='/' element={<Portfolio/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/skills' element={<Skills/>}/>
            </Routes>
        </Suspense>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App
