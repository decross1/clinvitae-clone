import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Grid, Header, Table } from 'semantic-ui-react'
import GeneRows from './GeneRows.jsx';

class GeneTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid verticalAlign='middle' padded centered style={{ height: '100vh' }}> 
        <Grid.Row color='grey' style={{height: '11%'}}>
          <Header textAlign='justified' as='h1' inverted color='black'> 
            Gene Search Results
          </Header>
        </Grid.Row>
        <Grid.Row style={{ height: '89%', paddingTop: 0 }}>
          <Table singleLine color='teal'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gene</Table.HeaderCell>
                <Table.HeaderCell>Nucleotide Change</Table.HeaderCell>
                <Table.HeaderCell>Protein Change</Table.HeaderCell>
                <Table.HeaderCell>Alias</Table.HeaderCell>
                <Table.HeaderCell>Region</Table.HeaderCell>
                <Table.HeaderCell>Reported Classification</Table.HeaderCell>
                <Table.HeaderCell>Last Evaluated</Table.HeaderCell>
                <Table.HeaderCell>Last Updated</Table.HeaderCell>
                <Table.HeaderCell>More Info</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.geneVariants.map(variant => <GeneRows variant={variant} history={this.props.history} />)}
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(GeneTable);

