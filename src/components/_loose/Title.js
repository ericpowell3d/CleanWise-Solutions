import React from 'react';

export default function Title(props) {
  return (<>
    <h2 className="title" style={props.txtStyle}>{props.children ? props.children.toUpperCase() : ``}</h2>
    <div className="titleLine"  style={props.lineStyle} />
  </>)
}