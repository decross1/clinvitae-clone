import _ from 'lodash'
import axios from 'axios';
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'


class StandardSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title }, () => {
      let params = { geneName: this.state.value };
      
      axios.post('/geneSearch', params ) 
      .then(results => {
        this.props.findVariants(results);
      })
      .catch(err => {
        console.log('Error Finding Gene Variants', err);
      })
    })

    // this.props.history.push('/Genes');
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value }, () => {
      
      let params = { geneName: this.state.value };
  
      if (this.state.value.length >= 2) {
        axios.post('/variants', params )
        .then(results => {
          this.setState({
          source: results.data
        })
      })
        .catch(err => {
          console.log('Error Retrieving Data', err)
        })
      }
    })
  }

  render() {
    const { isLoading, value, results, source } = this.state

    setTimeout(() => {

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 300)

    return (
      <Search
        loading={isLoading}
        aligned='right'
        fluid
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={this.state.results}
        value={value}
      />
    )
  }
}

export default StandardSearch;