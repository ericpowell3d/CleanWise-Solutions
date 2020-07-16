////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';
import { Notify } from '../utils/Notify';
import img_logo from '../images/branding/align_color.png';
import img_phone from '../images/vectors/phone.svg';
import img_mail from '../images/vectors/mail.svg';
import img_media_logo from '../images/branding/txt_color.png';
import img_media_menu from '../images/vectors/arrow.svg';

////////// COMPONENT //////////
export default function Nav(props) {
  const { page } = React.useContext(Global);
  const notify = React.useContext(Notify);
  // eslint-disable-next-line
  React.useEffect(() => { notify(`We can help mitigate the spread of COVID-19 in your facility. Find out how today: 502-514-9473 | info@cleanwisesolutions.com`, `info`, 60000); }, []);

  return (<>
    <nav>
      <div id="nav">
        <div id="nav-left">
          <Link to="/"><img src={img_logo} alt="CleanWise Solutions" /></Link>
        </div>
        <div id="nav-center">
          <a href="tel:15025149473">
            <div className="nav-center-block">
              <img style={{ marginRight: `8px` }} src={img_phone} alt="Phone" />
              <p>(502) 514-WISE</p>
            </div>
          </a>
          <div className="nav-center-break" />
          <a href="mailto:info@cleanwisesolutions.com">
            <div className="nav-center-block">
              <img style={{ marginRight: `10px` }} src={img_mail} alt="Email" />
              <p>info@cleanwisesolutions.com</p>
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
            <div className={page === `why-us` ? "nav-btn-active" : "nav-btn"}>
              <p>Why Us?</p>
              <div className="nav-btn-line" />
            </div>
          </Link>
        </div>
        <img id="nav-media-logo" src={img_media_logo} alt="CleanWise Solutions" />
        <img id="nav-media-menu" src={img_media_menu} alt="CleanWise Solutions" />
      </div>
    </nav>
  </>)
}