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
        <Link to="/"><div className={page === `home` ? "navBtnActive" : "navBtn"}><h3>Home</h3></div></Link>
      </div>
    </nav>
  </>)
}