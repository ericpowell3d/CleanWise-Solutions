import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { NotifyProvider } from './utils/Notify';
import { ModalProvider } from './utils/Modal';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <NotifyProvider>
          <ModalProvider>
            <Nav />
            <div id="navPad" />
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/home" component={() => <Home />} />
              <Route component={() => <NotFound />} />
            </Switch>
            <div id="footPad" />
            <Footer />
          </ModalProvider>
        </NotifyProvider>
      </GlobalProvider>
    </Router>
  </>)
}