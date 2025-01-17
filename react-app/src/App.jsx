import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'


 
function App(){

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );

 }

 export default App;

//The Navbar is not included within the Routes because it is a common component that should be 
// displayed on every page, regardless of the current route. Placing the Navbar outside of the 
// Routes ensures that it remains visible and doesn't get unmounted when navigating between 
// different pages.
// Why Not Include Navbar in Routes?
// Consistency Across Pages: The Navbar typically serves as a global navigation tool that is 
// visible on all pages of the app. Including it inside Routes would mean you'd have to add it to 
// every route, which is redundant and less maintainable.
// Performance: Keeping the Navbar outside Routes prevents React from re-rendering it unnecessarily 
// when the route changes.