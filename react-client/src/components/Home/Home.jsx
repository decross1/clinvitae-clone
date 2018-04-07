import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <div> 
      This is Home
    </div>
    )
  }
}

export default withRouter(Home);