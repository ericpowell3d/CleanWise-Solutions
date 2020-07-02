import React from 'react';
import { Global } from '../utils/Global';

export default function Txt(props) {
  const { theme } = React.useContext(Global);
  const cls = {
    h1: `48px`,
    h2: `32px`,
    h3: `24px`,
    h4: `20px`,
    h5: `18px`,
    h6: `16px`,
    p: `16px`,
  }

  const { size, weight, color, align, letting, kerning, decoration, cursor, transition, shadow, style } = props;

  return (<>
    <p style={{
      verticalAlign: `top`,
      fontSize: size && cls[size] ? cls[size] : `inherit`,
      fontWeight: weight || `inherit`,
      color: color || `inherit`,
      textAlign: align || `inherit`,
      lineHeight: letting || `inherit`,
      letterSpacing: kerning ? `${kerning}px` : `inherit`,
      textDecoration: decoration || `inherit`,
      cursor: cursor || `inherit`,
      transition: transition ? `0.2s` : `inherit`,
      textShadow: shadow ? `2px 2px 2px #00000040` : `inherit`,
      ...style
    }}>
      {props.children}
    </p>
  </>)
}