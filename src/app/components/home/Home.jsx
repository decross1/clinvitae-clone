import React, { Component } from 'react';
import SearchExampleStandardCustom from './SearchCustomized';

class Home extends Component {

  render() {
    return (
      <div className="container home">
        <h1>CloneVitae</h1>
        <SearchExampleStandardCustom />
      </div>
    );
  }
}

export default Home;
