import React from 'react'
import { Link } from 'react-router-dom'

// console.log(cocktails)
// console.log(props.cocktails)

function CocktailsList(props){
return(
  <div>
    <ol className='list-unstyled'>
      {props.cocktails.map( (cocktail) => (
        <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>
      ))}
    </ol>
  </div>
)
}




export default CocktailsList;
