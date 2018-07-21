import React, { Component } from 'react';

class Item extends Component {
  render() {
    const labelsArray = this.props.labels;
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
}

export default Item;