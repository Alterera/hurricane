import React from 'react'
import Home from './components/Home'
import { Routes, Route, Outlet } from "react-router-dom";
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const Layout = () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home/>} />
        <Route path="/all_projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App
