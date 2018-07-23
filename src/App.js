import React, { Component } from 'react';
import Item from './components/Item';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    }
  }

  grabValue = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    const list = [ event.target[0].value ]
    event.preventDefault();
    this.setState({
      value: '',
      list: this.state.list.concat(list),
    });
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="add-item">Add Item</label>
          <input type="text" id="add-item" value={this.state.value} onChange={this.grabValue}/>
          <input type="submit" value="Add" />
        </form>
        <Item labels={this.state.list}/>
      </div>
    );
  }
}

export default App;
