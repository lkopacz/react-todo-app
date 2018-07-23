import React, { Component } from 'react';

const Item = (props) => {
  const labelsArray = props.labels;
  const labels = labelsArray.map((label, index) => {
    return(
      <div>  
        <input key={index} type="checkbox" />
        <label>{label}</label>
      </div>
    );
  });

  return(
    <div>
      {labels}
    </div>
  );
}

Item.displayName = 'To Do Item';

export default Item;