import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import Drink from './Drink'
import DrinkSearch from './DrinkSearch'
import { Route } from 'react-router-dom'

const URL = "http://localhost:3000/api/v1/cocktails"

export default class CocktailsContainer extends Component {
  constructor(){
    super();
    this.state = {
      cocktails: []
    }
    this.searchDrink = this.searchDrink.bind(this)
  }

    componentDidMount(){
      fetch(URL).then(resp => resp.json()).then(data => this.setState({ cocktails: data}))
  }

  searchDrink(name) {
    this.setState({
      cocktails: this.state.cocktails.filter(cocktail => cocktail.name.includes(name.toUpperCase()))
    })
  }

    render(){
      return(
        <div className='row'>
          <div className='col-md-3-s'>
            < DrinkSearch searchSubmit={this.searchDrink} />
            < CocktailsList cocktails={this.state.cocktails} />
          </div>
          <div className='col-md-3'>
          </div>
          <div className='col-md-6-main '>
            <Route exact path="/cocktails/:id" render={ (routerProps)=>{
                const id = routerProps.match.params.id
                const cocktail = this.state.cocktails.find(c => c.id === parseInt(id, 10))
                return <Drink drink={cocktail}/>
              }}/>
        </div>
        </div>

    )}
  }
