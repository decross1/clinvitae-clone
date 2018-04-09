import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Grid, Segment, Header, Icon }  from 'semantic-ui-react';
import StandardSearch from '../SearchBar/StandardSearch.jsx'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid verticalAlign='middle' padded columns={5} centered style={{ minHeight: 600}}>
        <Grid.Row style={{
          backgroundImage: `url('https://media.giphy.com/media/3o7TKz2eMXx7dn95FS/source.gif')`, 
          backgroundSize: 1300, 
          opacity: 0.80, 
          filter: `alpha(opacity = 80)`}}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column verticalAlign='top'>
            <Header as='h1' inverted color='orange' style={{fontSize: 32}}>
                Search for Genes
            </Header>
            <StandardSearch history={this.props.history} findVariants={this.props.findVariants} />
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(Home);