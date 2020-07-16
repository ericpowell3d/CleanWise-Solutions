////////// DEPENDENCIES //////////
import React from 'react';
import img_logo from '../../images/branding/main_color.png';

////////// COMPONENT //////////
export default function HomeHero(props) {
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