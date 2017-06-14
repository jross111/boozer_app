import React from 'react'

export default function Drink({drink}) {
  if (!drink){
    return null
  }

  return(

    <div className='row inverse'>
      <div className='col-md-4'>
        <div className='panel panel-danger'>
          <div className='panel-heading'><h1>{drink.name}</h1></div>
          <div className='panel-body'>
          <p><h3>Description:</h3> {drink.description}</p>
          <h3>Ingredients:</h3>
          {drink.proportions.map(p => <p>{p.amount} of {p.ingredient_name}</p>)}
          <p><h3>Instructions:</h3> {drink.instructions}</p>
          </div>
        </div>
      </div>
    </div>

  )
}
