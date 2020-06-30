import React from 'react';
import { Global } from '../utils/Global';

export default function Home() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="home">
      <section id="home-hero">
        
      </section>
    </main>
  </>)
}