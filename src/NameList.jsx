import React from 'react';

function NameList(props) {
  const names = props.names;
  const listItems = names.map((name, index) =>
    <li key={index}>{name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default NameList;
