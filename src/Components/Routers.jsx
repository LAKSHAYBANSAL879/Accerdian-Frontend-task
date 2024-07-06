import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../Components/Home/Home';

import Benefits from './Home/Benefits';
import FAQ from './Home/FAQ';
import Contact from './Home/Contact';

const Routers = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/faq" component={FAQ} />
      <Route path="/support" component={Contact} />


      
    </Router>
  );
};

export default Routers;
