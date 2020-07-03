////////// DEPENDENCIES //////////
import React from 'react';
import { Title, Subtitle } from '../_ui';
import img_placeholder from '../../images/vectors/placeholder_circle.svg';

////////// COMPONENT //////////
export default function HomeIndustries(props) {
  const industries = [
    {
      head: `CORPORATE`,
      body: `Our aim is to provide a clean, orderly & sanitary environment for your employees to focus on what matters. We add an air of clean professionalism to ensure your external audiences are comfortable and impressed with your attention to detail.`,
    },
    {
      head: `EDUCATION`,
      body: `Trust CleanWise Solutions to keep your learning facilities clean, tidy & ready to inspire the next generation of leaders.`,
    },
    {
      head: `RELIGION`,
      body: `CleanWise Solutions understands the challenges of maintaining a pristine place of worship in high-traffic common use areas. Our experts are prepared to relieve the burden of cleaning your facility so you and your patrons can focus on what matters.`,
    },
    {
      head: `AUTO & BODY`,
      body: `Whether it is a showroom, stockroom, or maintenance facility, cleanliness inspires your crew and your customers. CleanWise Solutions is ready to provide top-notch cleaning services to support the goals of your auto dealership.`,
    },
    {
      head: `WAREHOUSE & DISTRIBUTION`,
      body: `Clean & organized distribution centers help maintain high-levels of efficiency & safety. Our CleanWise team will provide your warehouse with expert cleaning solutions so your employees can safely focus on their task at hand.`,
    },
    {
      head: `OTHER`,
      body: `If you’re a commercial, corporate, or otherwise non-residential entity in need of cleaning or disinfecting services, you’ve landed in the right spot. Give us a call or email us today to learn more about how CleanWise Solutions can be of service to your mission.`,
    },
  ]

  return (<>
    <div id="home-industries">
      <div className="media-box">
        <Title>Industries We Serve</Title>
        <Subtitle>CleanWise Solutions serves a variety of corporate, commercial, and non-residential communities. Our flexible cleaning and disinfecting solutions are specifically tailored to meet the needs of your organization, regardless of facility size or type. Reach out to us today to start a conversation on how we can make your life cleaner and easier.</Subtitle>
        <div id="home-industries-grid">
        {industries.map((item) =>
          <div className="home-industries-item">
            <img className="home-industries-item-vector" src={img_placeholder} alt="Placeholder" />
            <h4 className="home-industries-item-head">{item.head}</h4>
            <h6 className="home-industries-item-body">{item.body}</h6>
          </div>
        )}
        </div>
      </div>
    </div>
  </>)
}
