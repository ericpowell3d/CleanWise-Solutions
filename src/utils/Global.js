import React from 'react';

/** Global Context Object */
export const Global = React.createContext();

/** Global Context Provider */
export function GlobalProvider({ children }) {
  const [page, setPage] = React.useState(`home`);
  const [editMode, setEditMode] = React.useState(false);

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
    else if (window.location.pathname === `/why-us`) setPage(`why-us`);
    else if (window.location.pathname === `/about`) setPage(`why-us`);
    else setPage(`404`);

    // window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
    log(`PAGE: '${page}', PATHNAME: '${window.location.pathname}'`);
  }

  /** Global context for the app */
  const ctx = {
    log: log,
    page: page,
    checkPage: checkPage,
    editMode: editMode,
    setEditMode: setEditMode,
  }

  // Return the Global.Provider and wrap it around the contents of App.js
  return (
    <Global.Provider value={ctx}>{children}</Global.Provider>
  )
}