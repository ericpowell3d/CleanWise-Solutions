////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Title } from './_ui';
import img_linked_in from '../images/vectors/linked_in.svg';
import img_instagram from '../images/vectors/instagram.svg';
import img_facebook from '../images/vectors/facebook.svg';

////////// COMPONENT //////////
export default function Footer(props) {
  const links = [
    "https://www.linkedin.com/in/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://ericpowell3d.com/",
  ];

  return (<>
    <footer>
      <div id="footer-top">
        <div className="footer-3">
          <Title size="sm">OUR PROMISE</Title>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi, fugiat quidem animi similique dolor pariatur reprehenderit aliquam saepe soluta autem vitae. At molestias minima magni incidunt non mollitia earum?</h6>
          <div className="footer-break" />
        </div>
        <div className="footer-line" />
        <div className="footer-3">
          <Title size="sm">LINKS</Title>
          <h5><Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/why-us">Why Us?</Link></h5>
          <div id="footer-icons">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_linked_in} alt="LinkedIn" />
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_instagram} alt="Instagram" />
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img className="footer-icon" src={img_facebook} alt="Facebook" />
            </a>
          </div>
          <div className="footer-break" />
        </div>
        <div className="footer-line" />
        <div className="footer-3">
          <Title size="sm">CONTACT US</Title>
          <h5><a href="tel:15408418766">(540) 841-8766</a></h5>
          <div style={{ width: `100%`, height: `8px` }} />
          <h5><a href="mailto:info@cleanwisesolutions.com">info@cleanwisesolutions.com</a></h5>
          <div className="footer-break" />
        </div>
      </div>
      <div id="footer-bottom">
        <p>&copy;{moment().format(`YYYY`)}&nbsp;CleanWise&nbsp;Solutions.&nbsp;All&nbsp;Rights&nbsp;Reserved.&nbsp;&nbsp;|&nbsp;&nbsp;<a href={links[3]} target="_blank" rel="noopener noreferrer">Site&nbsp;Designer</a></p>
      </div>
    </footer>
  </>)
}