import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { NotifyProvider } from './utils/Notify';
import { ModalProvider } from './utils/Modal';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Lost from './components/Lost';
import Home from './components/Home';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <NotifyProvider>
          <ModalProvider>
            <NavBar />
            <div id="nav-pad" />
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/home" component={() => <Home />} />
              <Route component={() => <Lost />} />
            </Switch>
            <div id="foot-pad" />
            <Footer />
          </ModalProvider>
        </NotifyProvider>
      </GlobalProvider>
    </Router>
  </>)
}