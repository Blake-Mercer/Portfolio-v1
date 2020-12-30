import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './modules/Navigation/NavBar';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
