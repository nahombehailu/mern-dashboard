// import { Button } from "flowbite-react";
import {BrowserRouter,Route,Routes}from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import News from './pages/News';
import Core from './pages/Core';
import Support from './pages/Support';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import FooterComp from './components/Footer';
export default function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/news' element={<News />} /> 
      <Route path='/core' element={<Core />} /> 
      <Route path='/support' element={<Support />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/signup' element={<Signup />} /> 
      <Route path='/signin' element={<Signin />} /> 
    </Routes>
<FooterComp />
    </BrowserRouter>
  )
}
