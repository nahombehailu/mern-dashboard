// import { Button } from "flowbite-react";
import {BrowserRouter,Route,Routes}from 'react-router-dom'

import Navbars from "./components/Header";
import Home from './pages/Home';
import News from './pages/News';
import Core from './pages/Core';
import Support from './pages/Support';
import About from './pages/About';
import Signup from './pages/Signup';
import FooterComp from './components/Footer';
import SignIn from './pages/Signin';
import Header from './components/Header';
import Dashboard from './pages/Dahboard';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/news' element={<News />} /> 
      <Route path='/core' element={<Core />} /> 
      <Route path='/support' element={<Support />} /> 
      <Route element={<PrivateRoute />}>   <Route path='/dashboard' element={<Dashboard />} /> </Route>
      <Route path='/dashboard' element={<Dashboard />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/signup' element={<Signup />} /> 
      <Route path='/signin' element={<SignIn />} /> 
    </Routes>
<FooterComp />
    </BrowserRouter>
  )
}
