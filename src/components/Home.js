////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';
import { Notify } from '../utils/Notify';
import HomeHero from './home/HomeHero';
import HomeIndustries from './home/HomeIndustries';
import HomeServices from './home/HomeServices';
import HomeHow from './home/HomeHow';

////////// COMPONENT //////////
export default function Home() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });
  // const notify = React.useContext(Notify);
  // React.useEffect(() => { notify(`COVID-19 info alert placeholder`, `info`, 60000); }, []);

  return (<>
    <main id="home">
      <section id="section-home-hero">
        <HomeHero />
      </section>
      <section id="section-home-industries">
        <HomeIndustries />
      </section>
      <section id="section-home-services">
        <HomeServices />
      </section>
      <section id="section-home-how">
        <HomeHow />
      </section>
    </main>
  </>)
}

// CONTACT FORM
//
// Full Name
// Business/Organization
// Phone
// Email
// Facility Type - (Selection) - Corporate, Educational, Religious, Dealership, Warehouse, Medical, Other
// Facility Square-Footage
// Are you contracting cleaning or janitorial services? - Y/N
// What type of cleaning services do you require? - (Checkboxes) - General Cleaning, Carpet Care, Hard Surface Floor Care, Event Setup/Tear Down, Day Porter, Other
// Please note any additional questions or request you may have. - Open