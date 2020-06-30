import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Footer() {

  const links = [
    
  ];

  return (<>
    <footer>
      <div id="footerTop">
        
      </div>
      <div id="footerBottom">
        <p>&copy;{moment().format(`YYYY`)}&nbsp;CleanWise&nbsp;Solutions.&nbsp;All&nbsp;Rights&nbsp;Reserved.</p>
      </div>
    </footer>
  </>)
}