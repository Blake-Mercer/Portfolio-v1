import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './modules/Navigation/NavBar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/Projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={About} />
      </Switch>
    </>
  );
}

export default App;
