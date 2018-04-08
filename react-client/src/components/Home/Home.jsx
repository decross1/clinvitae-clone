import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Grid, Segment }  from 'semantic-ui-react';
import StandardSearch from '../SearchBar/StandardSearch.jsx'


class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid verticalAlign='middle' padded columns={5} centered style={{ minHeight: 550}}>
        <Grid.Row style={{
          backgroundImage: `url('https://media.giphy.com/media/3o7TKz2eMXx7dn95FS/source.gif')`, 
          backgroundSize: 1300, 
          opacity: 0.85, 
          filter: `alpha(opacity = 85)`}}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <StandardSearch />
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(Home);