import React from 'react';

export default function Subtitle(props) {
  const { style } = props;
  return <h4 className="subtitle" style={style}>{props.children}</h4>
}