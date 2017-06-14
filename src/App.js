import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import CocktailsContainer from './CocktailsContainer'
import Drink from './Drink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav title='Sloshed Students' style='inverse' />
        < CocktailsContainer/>
        < Drink/>
        </div>
    );
  }
}

export default App;
