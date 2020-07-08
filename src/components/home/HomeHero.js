////////// DEPENDENCIES //////////
import React from 'react';
import { Notify } from '../../utils/Notify';
import img_logo from '../../images/branding/main_color.png';

////////// COMPONENT //////////
export default function HomeHero(props) {
  const notify = React.useContext(Notify);
  // eslint-disable-next-line
  // React.useEffect(() => { notify(`COVID-19 info alert placeholder`, `info`, 60000); }, []);

  return (<>
    <div id="home-hero">
      <div id="home-hero-drop">
        <div id="home-hero-hold">
          <img id="home-hero-logo" src={img_logo} alt="CleanWise Solutions Logo" />
        </div>
      </div>
    </div>
  </>)
}