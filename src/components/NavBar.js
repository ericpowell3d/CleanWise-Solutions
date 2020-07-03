////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';
import img_logo from '../images/branding/align_color.png';
import img_phone from '../images/vectors/phone.svg';
import img_mail from '../images/vectors/mail.svg';

////////// COMPONENT //////////
export default function NavBar(props) {
  const { page } = React.useContext(Global);

  const [nav, setNav] = React.useState(`nav-show`);

  let prev = window.pageYOffset;
  window.onscroll = () => {
    if (window.screen.width <= 1600 && window.screen.height <= 1024) {
      let cur = window.pageYOffset;
      if (prev > cur) setNav(`nav-show`);
      else setNav(`nav-hide`);
      prev = cur;
    }
    else setNav(`nav-show`);
  }

  return (<>
    <nav>
      <div id={nav}>
        <div id="nav-left">
          <Link to="/"><img src={img_logo} alt="CleanWise Solutions" /></Link>
        </div>
        <div id="nav-center">
          <a href="tel:15408418766">
            <div className="nav-center-block">
              <img style={{ marginRight: `8px` }} src={img_phone} alt="Phone" />
              <h6>(540) 841-8766</h6>
            </div>
          </a>
          <div className="nav-center-break" />
          <a href="mailto:info@cleanwisesolutions.com">
            <div className="nav-center-block">
              <img style={{ marginRight: `10px` }} src={img_mail} alt="Email" />
              <h6>info@cleanwisesolutions.com</h6>
            </div>
          </a>
        </div>
        <div id="nav-right">
          <Link to="/">
            <div className={page === `home` ? "nav-btn-active" : "nav-btn"}>
              <p>Home</p>
              <div className="nav-btn-line" />
            </div>
          </Link>
          <div className="nav-btn-break" />
          <Link to="/why-us">
            <div className={page === `about` ? "nav-btn-active" : "nav-btn"}>
              <p>Why Us?</p>
              <div className="nav-btn-line" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  </>)
}