////////// DEPENDENCIES //////////
import React from 'react';
import { Title } from '../_ui';
import img_1 from '../../images/vectors/1.svg';
import img_2 from '../../images/vectors/2.svg';
import img_3 from '../../images/vectors/3.svg';

import { Global } from '../../utils/Global';
import TxtEdit from '../_ui/TxtEdit';

////////// COMPONENT //////////
export default function HomeHow(props) {
  const ctx = React.useContext(Global);

  const title = `How It Works`;
  const steps = [
    {
      head: `SCHEDULE`,
      body: `Fill out our contact form, give us a call, or send us an email to schedule your CleanWise\xa0Solution.`,
    },
    {
      head: `CLEANING PROGRAM`,
      body: `Throughout your tailored Cleaning Program, we do what we do best to ensure your utmost\xa0satisfaction.`,
    },
    {
      head: `PEACE OF MIND`,
      body: `We leave your facility spotless and sanitized, so you can focus on more important\xa0aspects.`,
    },
  ]
  const vectors = [
    img_1,
    img_2,
    img_3,
  ]
  
  const [txtSteps, setTxtSteps] = React.useState(steps);

  return (<>
    <div id="home-how" className="section-box">
      <div className="media-box">
        <div id="home-how-hidden">
          <Title>{title}</Title>
        </div>
        <div id="home-how-grid">
          <div id="home-how-title">
            <div className="home-how-item-fix">
              <h2 className="title-lg" style={{ padding: 0 }}>HOW&nbsp;IT<br />WORKS</h2>
            </div>
          </div>
          <div id="home-how-line" />
          {txtSteps.map((item, i) =>
            <div key={`home-how-${i}`} className="home-how-item" style={{ marginBottom: i < steps.length - 1 ? `48px` : 0 }}>
              <img className="home-how-item-vector" src={vectors[i]} alt="Step" />
              {ctx.editMode ? <TxtEdit value={txtSteps} onChange={setTxtSteps} index={i} subvalue="head" /> : <h4 className="home-how-item-head">{item.head}</h4>}
              {ctx.editMode ? <TxtEdit value={txtSteps} onChange={setTxtSteps} index={i} subvalue="body" /> : <h6 className="home-how-item-body">{item.body}</h6>}
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}