import React from 'react';

const PokemonList = ({ pokemon }) => {

  return(
    <div>
    {pokemon.map(p => (
      <div key={p.name}>
        {p}
      </div>
    ))}
    </div>
  )
}

export default PokemonList
