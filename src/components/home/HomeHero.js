////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../../utils/Global';

////////// COMPONENT //////////
export default function HomeHero(props) {
  const { theme } = React.useContext(Global);
  const cls = {
    hero: {
      position: `relative`,
      width: `100%`,
      height: `640px`,
      paddingTop: `140px`,
      background: theme.background.dark,
      backgroundImage: `url(../images/clean4.jpg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
    },
    drop: {
      padding: `48px`,
      marginLeft: `auto`,
      marginRight: `auto`,
      background: `linear-gradient(90deg, #ffffff00, #ffffffcc, #ffffffef, #ffffffcc, #ffffff00)`,
    },
    logoFix: {
      width: `fit-content`,
      marginLeft: `auto`,
      marginRight: `auto`,
    },
    logo: {
      maxHeight: `260px`,
    },
  }

  return (<>
    <div id="homeHero" style={cls.hero}>
      <div id="homeHeroDrop" style={cls.drop}>
        <div id="homeHeroLogoFix" style={cls.logoFix}>
          <img id="homeHeroLogo" style={cls.logo} src="/images/branding/main_color.png" alt="CleanWise Solutions Logo" />
        </div>
      </div>
    </div>
  </>)
}