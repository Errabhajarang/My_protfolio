import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './sections/home'
import Navbar from './components/navbar'
import Footer from './components/footer';
import About from './sections/about'
import Contacts from './sections/contacts'
import Projects from './sections/projects';
import Skills from './sections/skills';
import './App.css'
function App(){
  return(
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>

  );
}
export default App;