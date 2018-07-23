import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Item.PropTypes = {
  labels: PropTypes.array,
};

Item.displayName = 'To Do Item';

export default Item;