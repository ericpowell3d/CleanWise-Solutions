import React from 'react';
import moment from 'moment';

/** Global Context Object */
export const Global = React.createContext();

/** Global Context Provider */
export function GlobalProvider({ children }) {
  const [page, setPage] = React.useState(`home`);
  const [anchor, setAnchor] = React.useState(null);

  /** Light Theme for App */
  const lightTheme = {
    primary: {
      light: `#00dfc8`,
      main: `#00b4a0`,
      dark: `#007268`,
    },
    secondary: {
      light: `#0080c8`,
      main: `#005096`,
      dark: `#003068`,
    },
    info: {
      main: `#005096`,
    },
    success: {
      main: `#00b4a0`,
    },
    warning: {
      main: `#ffb400`,
    },
    error: {
      main: `#ff4064`,
    },
    background: {
      white: `#f0faff`,
      default: `#f0faff`,
      light: `#f0faff`,
      main: `#f0faff`,
      dark: `#f0faff`,
    },
    action: {
      light: `#55555512`,
      main: `#55555524`,
      dark: `#55555536`,
      disabled: `#55555564`,
      disabledBG: `#55555532`,
    },
    divider: `#55555532`,
    txt: {
      primary: `#555555`,
      secondary: `#555555a0`,
      tertiary: `#55555580`,
    },
    txtContrast: {
      primary: `#ffffff`,
      secondary: `#ffffffa0`,
      tertiary: `#ffffff80`,
    },
  }

  /** Dark Theme for App */
  // const darkTheme = { }

  /** Function to console log only on localhost
   * @param {String} message - Message to display in the console log
   * @param {Object} data - (Optional) Data to display in the console log after the message
   * @return {Console} Returns a console.log() with the params passed in
  */
  const log = (message = null, data = null) => {
    if (window.location.hostname === `localhost`) {
      if (message && data) return console.log(message, data);
      else if (message) return console.log(message);
      else return console.log();
    }
  }

  /** Function to check which page is active to render the page properly */
  const checkPage = () => {
    if (window.location.pathname === `/`) setPage(`home`);
    else if (window.location.pathname === `/home`) setPage(`home`);
    else setPage(`404`);

    const element = document.getElementById(anchor);
    const anchorTime = localStorage.getItem(`last-anchor-time`) ? moment().diff(moment(localStorage.getItem(`last-anchor-time`)), `seconds`) : 0;
    if (anchor && element && anchorTime < 3) {
      element.scrollIntoView({ block: `center` });
      log(`PAGE: '${page}', PATHNAME: '${window.location.pathname}', ANCHOR: '${anchor}'`);
    }
    else {
      window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
      log(`PAGE: '${page}', PATHNAME: '${window.location.pathname}'`);
    }
  }

  /** Global context for the app */
  const ctx = {
    theme: lightTheme,
    log: log,
    page: page,
    checkPage: checkPage,
    setAnchor: setAnchor,
  }

  // Return the Global.Provider and wrap it around the contents of App.js
  return (
    <Global.Provider value={ctx}>{children}</Global.Provider>
  )
}