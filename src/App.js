import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/home.page';
import Builder from './pages/builder.page';
import Preview from './pages/preview.page';
import { addDummyData } from './utility/utility';

function App() {
  addDummyData()
  return (
    <Router basename='/'>
        <div id='App' className="">
          <div className='relative flex flex-col h-full'>
            <header id='header' className="p-3 flex justify-between items-center shadow">
              <div className='flex content-center justify-center flex-1'>
                <Link to='/' className='text-lg'><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
              </div>
              <div className='flex-1 text-center'>
                <div className='f-3 text-teal-500 text-lg font-bold text-xl'>GUI Builder</div>
              </div>
              <div className='flex-1 text-right text-xs'>- An <b> Harish Ravi's</b> Work -</div>
            </header>
            <section id='main' className='flex-1 '>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/builder/:docId" component={Builder} />
                <Route exact path="/preview/:docId" component={Preview} />
              </Switch>
            </section>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
