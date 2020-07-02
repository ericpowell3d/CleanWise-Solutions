import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';

export default function Nav() {
  const { page } = React.useContext(Global);

  const [nav, setNav] = React.useState(`navShow`);

  let prev = window.pageYOffset;
  window.onscroll = () => {
    if (window.screen.width <= 1600 && window.screen.height <= 1024) {
      let cur = window.pageYOffset;
      if (prev > cur) setNav(`navShow`);
      else setNav(`navHide`);
      prev = cur;
    }
    else setNav(`navShow`);
  }

  return (<>
    <nav>
      <div id={nav}>
        <div id="navL">
          <Link to="/"><img src="/images/branding/align_color.png" alt="CleanWise Solutions" /></Link>
        </div>
        <div id="navC">
          <a href="tel:15408418766">
            <div className="navCBlock">
              <img style={{ marginRight: `8px` }} src="/images/vectors/phone.svg" alt="Phone" />
              <h6>(540) 841-8766</h6>
            </div>
          </a>
          <div className="navCBreak" />
          <a href="mailto:info@cleanwisesolutions.com">
            <div className="navCBlock">
              <img style={{ marginRight: `10px` }} src="/images/vectors/mail.svg" alt="Email" />
              <h6>info@cleanwisesolutions.com</h6>
            </div>
          </a>
        </div>
        <div id="navR">
          <Link to="/">
            <div className={page === `home` ? "navBtnActive" : "navBtn"}>
              <p>Home</p>
              <div className="navBtnLine" />
            </div>
          </Link>
          <div className="navBtnBreak" />
          <Link to="/why-us">
            <div className={page === `about` ? "navBtnActive" : "navBtn"}>
              <p>Why Us?</p>
              <div className="navBtnLine" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  </>)
}