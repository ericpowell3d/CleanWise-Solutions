////////// DEPENDENCIES //////////
import React from 'react';
import { Title } from '../_ui';
import img_corporate from '../../images/vectors/corporate.svg';
import img_education from '../../images/vectors/education.svg';
import img_religion from '../../images/vectors/religion.svg';
import img_auto_body from '../../images/vectors/auto_body.svg';
import img_warehouse_distribution from '../../images/vectors/warehouse_distribution.svg';
import img_other from '../../images/vectors/other.svg';

////////// COMPONENT //////////
export default function HomeIndustries(props) {
  const title = `Industries We Serve`;
  const industries = [
    {
      head: `CORPORATE`,
      body: `Our aim is to provide a clean, orderly & sanitary environment for your employees to focus on what matters. We add an air of clean professionalism to ensure your external audiences are comfortable and impressed with your attention\xa0to\xa0detail.`,
    },
    {
      head: `EDUCATION`,
      body: `Trust CleanWise Solutions to keep your learning facilities clean, tidy & ready to inspire the next generation\xa0of\xa0leaders.`,
    },
    {
      head: `RELIGION`,
      body: `CleanWise Solutions understands the challenges of maintaining a pristine place of worship in high-traffic common use areas. Our experts are prepared to relieve the burden of cleaning your facility so you and your patrons can focus on\xa0what\xa0matters.`,
    },
    {
      head: `AUTO & BODY`,
      body: `Whether it is a showroom, stockroom, or maintenance facility, cleanliness inspires your crew and your customers. CleanWise Solutions is ready to provide top-notch cleaning services to support the goals of your auto\xa0dealership.`,
    },
    {
      head: `WAREHOUSE & DISTRIBUTION`,
      body: `Clean & organized distribution centers help maintain high-levels of efficiency & safety. Our CleanWise team will provide your warehouse with expert cleaning solutions so your employees can safely focus on their task\xa0at\xa0hand.`,
    },
    {
      head: `OTHER`,
      body: `If you’re a commercial, corporate, or otherwise non-residential entity in need of cleaning or disinfecting services, you’ve landed in the right spot. Give us a call or email us today to learn more about how CleanWise Solutions can be of service to\xa0your\xa0mission.`,
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

  return (<>
    <div id="home-industries" className="section-box">
      <div className="media-box">
        <Title>{title}</Title>
        <div id="home-industries-grid">
          {industries.map((item, i) =>
            <div key={`home-industries-${i}`} className="home-industries-item">
              <img className="home-industries-item-vector" src={vectors[i]} alt="Industry" />
              <h4 className="home-industries-item-head">{item.head}</h4>
              <h6 className="home-industries-item-body">{item.body}</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}
