import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Grid, Segment }  from 'semantic-ui-react';

let url = 'https://media.giphy.com/media/3o7TKz2eMXx7dn95FS/source.gif'

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid verticalAlign='middle' padded columns={1} centered style={{ minHeight: 550}}>
        <Grid.Row style={{
          backgroundImage: `url('https://media.giphy.com/media/3o7TKz2eMXx7dn95FS/source.gif')`, 
          backgroundSize: 1300, 
          opacity: 0.85, 
          filter: `alpha(opacity = 85)`}}>
          <Grid.Column textAlign='center'>
              Search Bar Here
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(Home);