import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

class StandardSearch extends Component {
  constructor() {
    super();
    this.state = {}

    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title })
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value })
  }

  render() {
    const { isLoading, value, results } = this.state

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)

    return (
      <Search
        loading={isLoading}
        aligned='right'
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={results}
        value={value}
        {...this.props}
      />
    )
  }
}

export default StandardSearch;