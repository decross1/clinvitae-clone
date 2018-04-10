import React, { Component } from 'react';
import {
  Table,
  // Button,
  // Icon
} from 'semantic-ui-react'

class GeneRows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.variant.gene}</Table.Cell>
        <Table.Cell>{this.props.variant.nucleotidechange}</Table.Cell>
        <Table.Cell>{this.props.variant.proteinchange}</Table.Cell>
        <Table.Cell>{this.props.variant.alias}</Table.Cell>
        <Table.Cell>{this.props.variant.region}</Table.Cell>
        <Table.Cell>{this.props.variant.reportedclassification}</Table.Cell>
        <Table.Cell>{this.props.variant.lastevaluated}</Table.Cell>
        <Table.Cell>{this.props.variant.lastupdated}</Table.Cell>
        <Table.Cell>{this.props.variant.url}</Table.Cell>
      </Table.Row>
    )
  }
}

export default GeneRows;