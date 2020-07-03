////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';

////////// COMPONENT //////////
export default function Lost() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="lost">
      <section id="section-lost">
        <div id="lost-fix">
          <div id="lost-drop">
            <h1 id="lost-status">404</h1>
            <h5 id="lost-body">The page you are looking for does not exist! <Link to="/" id="lost-link">Click&nbsp;here</Link> to return home.</h5>
          </div>
        </div>
      </section>
    </main>
  </>)
}