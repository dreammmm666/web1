import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Performance from './pages/Performance';
import Navbar from './compo/Navbar';

function App() {
  

  return (
    <>
       <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/Performance' element={<Performance />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
