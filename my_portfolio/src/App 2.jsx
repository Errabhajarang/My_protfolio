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
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contacts/>
     <Footer/>

    </>
  );
}
export default App;