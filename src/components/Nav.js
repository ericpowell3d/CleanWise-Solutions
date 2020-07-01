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
        <div id="navC" />
        <div id="navR">
          <Link to="/">
            <div className={page === `home` ? "navBtnActive" : "navBtn"}>
              <p>Home</p>
              <div className="navBtnLine" />
            </div>
          </Link>
          <div className="navBtnBreak" />
          <Link to="/about">
            <div className={page === `about` ? "navBtnActive" : "navBtn"}>
              <p>About</p>
              <div className="navBtnLine" />
            </div>
          </Link>
          <div className="navBtnBreak" />
          <Link to="/contact">
            <div className={page === `contact` ? "navBtnActive" : "navBtn"}>
              <p>Contact</p>
              <div className="navBtnLine" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  </>)
}