import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Grid }  from 'semantic-ui-react';


class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid verticalAlign='middle' columns={4} centered style={{ minHeight: 500, padding: '1em 0em' }}>
        <Grid.Row>
          <Grid.Column>
            Test
          </Grid.Column>
          <Grid.Column>
            Test
            <br />
            Test
          </Grid.Column>
          <Grid.Column>
            Test
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(Home);