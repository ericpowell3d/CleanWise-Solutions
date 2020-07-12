////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Title } from './_ui';
import img_yelp from '../images/vectors/yelp.svg';
import img_facebook from '../images/vectors/facebook.svg';
import img_instagram from '../images/vectors/instagram.svg';
import img_twitter from '../images/vectors/twitter.svg';
import img_linked_in from '../images/vectors/linked_in.svg';

////////// COMPONENT //////////
export default function Footer(props) {
  const links = [
    "https://www.yelp.com/biz/cleanwise-solutions-alexandria",
    "https://www.facebook.com/CleanWiseSolutions/",
    "https://www.instagram.com/cleanwisesolutions/",
    "https://twitter.com/CleanWiseSol",
    "https://www.linkedin.com/company/cleanwisesolutions/",
    "https://ericpowell3d.com/",
  ];

  return (<>
    <footer>
      <div id="footer-top">
        <div className="footer-3">
          <div className="footer-break" />
          <Title size="sm">OUR PROMISE</Title>
          <h6>We promise to serve you as a partner, helping to further the mission of your organization by providing the highest quality cleaning services. Our commitment to quality and customer service is what sets us apart from other companies. Whatever your business, we have a solution&nbsp;for&nbsp;you.</h6>
          <div className="footer-break" />
        </div>
        <div className="footer-line"><div className="footer-line-shape" /></div>
        <div className="footer-3">
          <div className="footer-break" />
          <Title size="sm">LINKS</Title>
          <h5><Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/why-us">Why Us?</Link></h5>
          <div id="footer-icons">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_yelp} alt="Yelp" />
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_facebook} alt="Facebook" />
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_instagram} alt="Instagram" />
            </a>
            <div id="footer-icon-break" />
            <a href={links[3]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_twitter} alt="Twitter" />
            </a>
            <a href={links[4]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_linked_in} alt="LinkedIn" />
            </a>
          </div>
          <div className="footer-break" />
        </div>
        <div className="footer-line"><div className="footer-line-shape" /></div>
        <div className="footer-3">
          <div className="footer-break" />
          <Title size="sm">CONTACT US</Title>
          <h5><a href="tel:15025149473">(502) 514-9473</a></h5>
          <div style={{ width: `100%`, height: `8px` }} />
          <h5><a href="mailto:info@cleanwisesolutions.com">info@cleanwisesolutions.com</a></h5>
          <div className="footer-break" />
        </div>
      </div>
      <div id="footer-bottom">
        <div className="footer-fix">
          <p id="footer-bottom-main">&copy;{moment().format(`YYYY`)}&nbsp;CleanWise&nbsp;Solutions. All&nbsp;Rights&nbsp;Reserved. &nbsp;|&nbsp; <a href={links[5]} target="_blank" rel="noopener noreferrer">Site&nbsp;Designer</a></p>
          <p id="footer-bottom-alt">&copy;{moment().format(`YYYY`)}&nbsp;CleanWise&nbsp;Solutions. All&nbsp;Rights&nbsp;Reserved.<br /><a href={links[5]} target="_blank" rel="noopener noreferrer">Site&nbsp;Designer</a></p>
        </div>
      </div>
    </footer>
  </>)
}