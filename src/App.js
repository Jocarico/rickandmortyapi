import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import detailCharacter from './components/pages/detail/detailCharacter';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='character' element={<detailCharacter/>}/>
      </Routes>
    </Router>
      
    
  );
}

export default App;
