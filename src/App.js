import React from 'react';
import Header from '../src/components/Header.js';
import Feed from './components/Feed.js';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path='/' component={Feed} exact/>
      <Route path='/profile' component={Profile} exact/>
    </div>
    </Router>
  );
}

export default App;
