import React, { Fragment } from 'react';

const PokemonList = ({ pokemon }) => {

let pokemonTile = pokemon.map(poke => {
  return(
    <Fragment>
      {poke}
        <br/>
    </Fragment>
  )
})

  return(
    <div>
  {pokemonTile}
    </div>
  )
}

export default PokemonList
