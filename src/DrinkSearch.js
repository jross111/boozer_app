import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

export default class DrinkSearch extends Component {

  constructor(props) {
    super(props)
    this.state= {
      term: ''
    }
  this.handleSearch = this.handleSearch.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(event) {
    this.setState({ term: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.searchSubmit(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.term} onChange={this.handleSearch} placeholder="Find a Drink"/>
        <input type="submit" value="submit"/>
      </form>
    )
  }

}
