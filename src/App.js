import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/home/home.component';
import Builder from './pages/builder/builder.component';
import Preview from './pages/preview/preview.component';


function App() {
  return (
    <Router>
        <div id='App' className="">
          <div className='relative flex flex-col h-full'>
            <header id='header' className="pa-4 flex justify-between align-center">
              <div>
                <Link to='/' >Home</Link>
              </div>
              <div>
                <div class='f3 b'>GUI Builder</div>
              </div>
              <div></div>
            </header>
            <section id='main' className='flex-1'>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/builder" component={Builder} />
                <Route exact path="/preview" component={Preview} />
              </Switch>
            </section>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
