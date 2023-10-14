import './App.css';
import Home from './Components/Home';
import Projects from './Components/Major Projects/Projects';
import Navbar from './Components/Navbar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './Components/Contacts/contact';
import Prices from './Components/Pricing/prices';
import TopProjects from './Components/Top Rated Projects/topProjects';

function App() {
  return (
    <>
    
    <Router>   
      <Navbar />
      <Routes>
        <Route path = "/" element = {
          <>
          <Home />
          <Projects />
          <Services />
          </>
        } />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/prices" element = {<Prices />} />
        <Route path = "/topRatedProjects" element = {<TopProjects />} />
      </Routes>   
      <Footer />
    </Router>
        </>
  );
}

export default App;
