////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';
import WhyUsBlurb from './whyUs/WhyUsBlurb';

////////// COMPONENT //////////
export default function WhyUs() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="why-us">
      <section id="section-why-us-blurb">
        <WhyUsBlurb />
      </section>
    </main>
  </>)
}

// WHY US?
// 
// Why CleanWise Solutions?
//
// CleanWise Solutions is a locally owned and operated full service commercial cleaning company. We are committed to your satisfaction of our cleaning services and guarantee a hassle-free, no-nonsense experience from start to finish. We pride ourselves in serving as your partner, helping progress the needs of your organization, one expert cleaning at a time. Our team is prepared to help you prepare, plan, and execute your COVID-19 mitigation protocol aligned with local, state, and CDC guidelines.
//
// * First-Class Customer Service
// * Commitment to Quality
// * Reliable and Dependable Communication
// * Timely Services
// * Affordable
// * Guaranteed Satisfaction
//
// Your satisfaction is our top priority. We offer peace of mind through professional and affordable cleaning solutions that keep your business running and money in your pocket. Our commitment to quality and customer service is what sets us apart from other companies. We understand that communication is the key to satisfaction and with CleanWise Solutions you’ll never worry that the job won’t meet your expectations. Whatever your business, we have a solution.