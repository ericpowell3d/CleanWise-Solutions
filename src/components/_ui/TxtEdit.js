import React from 'react';

export default function TxtEdit(props) {
  const { value, onChange, index, subvalue } = props;

  const handleArrayValue = (event) => {
    console.log(`handleArrayValue`);
    let newArray = [...value];
    newArray[index][subvalue] = event.target.value;
    console.log(newArray[index][subvalue]);
    onChange([...newArray]);
  }

  if (!index && !subvalue) return <textarea className="input-box" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  else return <textarea className="input-box" type="text" value={value[index][subvalue]} onChange={handleArrayValue} />
}