import React from 'react';
import { Global } from '../utils/Global';
import { Notify } from '../utils/Notify';
import Title from '../components/_loose/Title';
import HomeHero from '../components/home/HomeHero';

export default function Home() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });
  // const notify = React.useContext(Notify);
  // React.useEffect(() => { notify(`COVID-19 info alert placeholder`, `info`, 60000); }, []);

  return (<>
    <main id="home">
      <section id="home-hero">
        <HomeHero />
        
      </section>
      <section id="home-services">
        <div id="homeServices">
          <Title>Services We Provide</Title>
        </div>
      </section>
      <section id="home-how">
        <div id="homeHow">
          <Title txtStyle={{ color: `#a0a0a0` }} lineStyle={{ background: `#a0a0a0` }}>How It Works</Title>
        </div>
      </section>
      <section id="home-clients">
        <div id="homeClients">
          <Title>Our Clients</Title>
        </div>
      </section>
    </main>
  </>)
}