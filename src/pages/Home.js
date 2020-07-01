import React from 'react';
import { Global } from '../utils/Global';
import { Notify } from '../utils/Notify';

export default function Home() {
  const { checkPage } = React.useContext(Global);
  const notify = React.useContext(Notify);
  React.useEffect(() => { checkPage(); });
  React.useEffect(() => { notify(`COVID-19 info alert placeholder`, `info`, 60000); }, []);

  return (<>
    <main id="home">
      <section id="home-hero">
        <div id="homeHero" />
      </section>
      <section id="home-services">
        <div id="homeServices">
          <h2 className="title">SERVICES WE PROVIDE</h2>
        </div>
      </section>
      <section id="home-how">
        <div id="homeHow">
          <h2 className="title" style={{ color: `#a0a0a0` }}>HOW IT WORKS</h2>
        </div>
      </section>
      <section id="home-clients">
        <div id="homeClients">
          <h2 className="title">OUR CLIENTS</h2>
        </div>
      </section>
    </main>
  </>)
}