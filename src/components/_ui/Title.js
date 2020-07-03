import React from 'react';

export default function Title(props) {
  const { size, txtStyle, lineStyle } = props;

  return (<>
    {size === `sm` ?
      <>
        <h4 className="title-sm" style={txtStyle}>{props.children ? props.children.toUpperCase() : ``}</h4>
        <div className="title-line-sm" style={lineStyle} />
      </> :
      <>
        <h2 className="title-lg" style={txtStyle}>{props.children ? props.children.toUpperCase() : ``}</h2>
        <div className="title-line-lg" style={lineStyle} />
      </>}
  </>)
}