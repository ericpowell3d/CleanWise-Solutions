////////// DEPENDENCIES //////////
import React from 'react';
import { Title } from '../_ui';
import img_corporate from '../../images/vectors/corporate.svg';
import img_education from '../../images/vectors/education.svg';
import img_religion from '../../images/vectors/religion.svg';
import img_auto_body from '../../images/vectors/auto_body.svg';
import img_warehouse_distribution from '../../images/vectors/warehouse_distribution.svg';
import img_other from '../../images/vectors/other.svg';

import { Global } from '../../utils/Global';
import TxtEdit from '../_ui/TxtEdit';

////////// COMPONENT //////////
export default function HomeIndustries(props) {
  const ctx = React.useContext(Global);

  const title = `Industries We Serve`;
  const industries = [
    {
      head: `CORPORATE`,
      body: `Providing a clean, orderly, and sanitary environment for your employees and guests to focus on\xa0what\xa0matters.`,
    },
    {
      head: `EDUCATION`,
      body: `Trust CleanWise Solutions to keep your learning facilities clean, tidy & ready to inspire the next generation\xa0of\xa0leaders.`,
    },
    {
      head: `RELIGION`,
      body: `Our experts are prepared to relieve the burden of cleaning your facility so you and your patrons can focus on\xa0what\xa0matters.`,
    },
    {
      head: `AUTO & BODY`,
      body: `Whether it is a showroom, stockroom, or maintenance facility, we are ready to provide top-notch cleaning\xa0services.`,
    },
    {
      head: `WAREHOUSE & DISTRIBUTION`,
      body: `Our team will provide your warehouse with expert cleaning solutions to ensure your facility stays clean, tidy, safe, and\xa0efficient.`,
    },
    {
      head: `OTHER`,
      body: `Contact us today to find out how CleanWise Solutions can support the needs of your non-residential\xa0facility.`,
    },
  ]
  const vectors = [
    img_corporate,
    img_education,
    img_religion,
    img_auto_body,
    img_warehouse_distribution,
    img_other,
  ]

  const [txtIndustries, setTxtIndustries] = React.useState(industries);

  return (<>
    <div id="home-industries" className="section-box">
      <div className="media-box">
        <Title>{title}</Title>
        <div id="home-industries-grid">
          {txtIndustries.map((item, i) =>
            <div key={`home-industries-${i}`} className="home-industries-item" style={{ marginBottom: i < industries.length - 1 ? `48px` : 0 }}>
              <img className="home-industries-item-vector" src={vectors[i]} alt="Industry" />
              {ctx.editMode ? <TxtEdit value={txtIndustries} onChange={setTxtIndustries} index={i} subvalue="head" /> : <h3 className="home-industries-item-head">{item.head}</h3>}
              {ctx.editMode ? <TxtEdit value={txtIndustries} onChange={setTxtIndustries} index={i} subvalue="body" /> : <h6 className="home-industries-item-body">{item.body}</h6>}
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}
