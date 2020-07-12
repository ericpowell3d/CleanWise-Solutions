import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { NotifyProvider } from './utils/Notify';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Lost from './components/Lost';
import Home from './components/Home';
import WhyUs from './components/WhyUs';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <NotifyProvider>
          <Nav />
          <div id="nav-pad" />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/why-us" component={() => <WhyUs />} />
            <Route exact path="/about" component={() => <WhyUs />} />
            <Route component={() => <Lost />} />
          </Switch>
          <Footer />
        </NotifyProvider>
      </GlobalProvider>
    </Router>
  </>)
}