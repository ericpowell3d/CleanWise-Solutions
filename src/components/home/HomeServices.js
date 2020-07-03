////////// DEPENDENCIES //////////
import React from 'react';
import { Title, Subtitle } from '../_ui';

////////// COMPONENT //////////
export default function HomeServices(props) {
  const services = [
    {
      head: `DISINFECTING & CLEANING SERVICES`,
      subhead: `Our solutions utilize EPA-approved COVID-19 disinfecting products and highly-qualified staff to provide a clean and sanitary environment for your patrons. We offer flexible programs to meet your\xa0disinfecting\xa0needs.`,
      body: [
        `One-Time Disinfection`,
        `Periodic Disinfection`,
        `Regular Disinfection`,
      ],
    },
    {
      head: `POST-CONSTRUCTION CLEANUP`,
      subhead: `CleanWise Solutions understands the excitement construction milestones bring. We pride ourselves in attention-to-detail during the final clean to help bridge your confidence to the next stage of\xa0your\xa0project.`,
      body: [
        `Flexible work schedule and no-hassle scheduling`,
        `Commercial or residential, large or small`,
        `Robust disinfection protocol so it is move-in ready`,
        `Adept quality control processes`,
        `Experience with all floor types and care requirements`,
      ],
    },
  ]

  return (<>
    <div id="home-services">
      <div className="media-box">
        <Title lineStyle={{ background: `#505860a0` }}>Services We Provide</Title>
        <div id="home-services-grid">
          {services.map((item) =>
            <div className="home-services-item">
              <h4 className="home-services-item-head">{item.head}</h4>
              <h6 className="home-services-item-subhead">{item.subhead}</h6>
              <div className="home-services-item-list">
                {item.body.map((bodyItem) => <h6 className="home-services-item-body">&#8226;&nbsp;&nbsp;&nbsp;{bodyItem}</h6>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}