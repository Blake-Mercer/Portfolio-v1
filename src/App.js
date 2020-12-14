import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './modules/Navigation/NavBar';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
