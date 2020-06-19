import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/products' component={Products}></Route>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}></Route>
      </Switch>


      </Router>
     
    </div>
  );
}

export default App;
