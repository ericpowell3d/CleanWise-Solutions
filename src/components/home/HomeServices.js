////////// DEPENDENCIES //////////
import React from 'react';
import { Title } from '../_ui';

import { Global } from '../../utils/Global';
import TxtEdit from '../_ui/TxtEdit';

////////// COMPONENT //////////
export default function HomeServices(props) {
  const ctx = React.useContext(Global);

  const title = `Services We Provide`;
  const services = [
    {
      head: `DISINFECTING & CLEANING SERVICES`,
      subhead: `Whether it is one-off reopening disinfection solutions, periodic facility cleaning solutions, recurring janitorial solutions, or a custom mix of solutions, CleanWise Solutions provides tailored schedules and services to meet the unique needs of your organization. All of our services utilize EPA-approved COVID-19 disinfecting solutions and our highly-qualified staff are ready to provide a clean and sanitary environment for you and\xa0your\xa0patrons.`,
      body: [
        `One-Off Solutions`,
        `Periodic Revisit Solutions`,
        `Regular & Recurring Solutions`,
      ],
    },
    {
      head: `POST-CONSTRUCTION CLEANUP`,
      subhead: `CleanWise Solutions understands the excitement construction milestones bring. The final clean milestone can inspire confidence if done well and on time and frustration if not. We pride ourselves in attention-to-detail during the final clean to help bridge your confidence to the next stage of\xa0your\xa0project.`,
      body: [
        `Hassle-free work scheduling`,
        `Commercial or residential, large or small`,
        `Robust disinfection protocol`,
        `Adept quality control processes`,
        `Experience with all floor types`,
      ],
    },
  ]

  const [txtServices, setTxtServices] = React.useState(services);

  return (<>
    <div id="home-services" className="section-box">
      <div className="media-box">
        <Title lineStyle={{ background: `#505860a0` }}>{title}</Title>
        <div id="home-services-grid">
          {txtServices.map((item, i) =>
            <div key={`home-services-${i}`} className="home-services-item" style={{ marginBottom: i < services.length - 1 ? `48px` : 0 }}>
              {ctx.editMode ? <TxtEdit value={txtServices} onChange={setTxtServices} index={i} subvalue="head" /> : <h3 className="home-services-item-head">{item.head}</h3>}
              {ctx.editMode ? <TxtEdit value={txtServices} onChange={setTxtServices} index={i} subvalue="subhead" /> : <h6 className="home-services-item-subhead">{item.subhead}</h6>}
              <div className="home-services-item-list">
                {item.body.map((bodyItem, i) => <h6 key={`home-services-body-${i}`} className="home-services-item-body">&#8226;&nbsp;&nbsp;&nbsp;{bodyItem}</h6>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}