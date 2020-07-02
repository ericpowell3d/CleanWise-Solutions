import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Footer() {

  const links = [
    "https://www.linkedin.com/in/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://ericpowell3d.com/",
  ];

  return (<>
    <footer>
      <div id="footerTop">
        <div className="footer3rd">
          <h4>OUR PROMISE</h4>
          <div className="footer3rdBreak" />
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi, fugiat quidem animi similique dolor pariatur reprehenderit aliquam saepe soluta autem vitae. At molestias minima magni incidunt non mollitia earum?</h6>
          <div className="footer3rdBreak" />
        </div>
        <div className="footerLine" />
        <div className="footer3rd">
          <h4>LINKS</h4>
          <div className="footer3rdBreak" />
          <h5><Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/why-us">Why Us?</Link></h5>
          <div id="footerIcons">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img className="footerIcon" src="/images/vectors/linked_in.svg" alt="LinkedIn" />
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img className="footerIcon" src="/images/vectors/instagram.svg" alt="Instagram" />
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img className="footerIcon" src="/images/vectors/facebook.svg" alt="Facebook" />
            </a>
          </div>
          <div className="footer3rdBreak" />
        </div>
        <div className="footerLine" />
        <div className="footer3rd">
          <h4>CONTACT US</h4>
          <div className="footer3rdBreak" />
          <h5><a href="tel:15408418766">(540) 841-8766</a></h5>
          <div style={{ width: `100%`, height: `8px` }} />
          <h5><a href="mailto:info@cleanwisesolutions.com">info@cleanwisesolutions.com</a></h5>
          <div className="footer3rdBreak" />
        </div>
      </div>
      <div id="footerBottom">
        <p>&copy;{moment().format(`YYYY`)}&nbsp;CleanWise&nbsp;Solutions.&nbsp;All&nbsp;Rights&nbsp;Reserved.&nbsp;&nbsp;|&nbsp;&nbsp;<a href={links[3]} target="_blank" rel="noopener noreferrer">Site&nbsp;Designer</a></p>
      </div>
    </footer>
  </>)
}