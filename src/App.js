import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log('Plus');
  }

  subtract = () => {
    console.log('Minus');
  }

  render() {
    return <div>
      <h1>Current number: {this.state.count}</h1>
      <button onClick={this.add}>Plus</button>
      <button onClick={this.subtract}>Minus</button>
    </div>  
  }
}

export default App;
