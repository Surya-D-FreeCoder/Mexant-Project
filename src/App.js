import './App.css';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Homepage/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Service from './Components/Service/Service';
import Testi from './Components/Testimonial/Testi';


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/about' element = { <About/> } />
        <Route path='/contact' element = { <Contacts/> } />
        <Route path='/service' element = { <Service/> } />
        <Route path='/test' element = { <Testi /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
