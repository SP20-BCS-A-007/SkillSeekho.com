import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import TopMenu from './components/topmenu';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <TopMenu />
    <Routes>
      <Route path="/instructors" element={<Instructors/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/about" element={<AboutUs />} />
      <Route path= "*" element= {<NotFound/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
       
    
  );
}

export default App;
