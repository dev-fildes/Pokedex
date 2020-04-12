import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PokemonTile = ( {name, url} ) => {
  const [sprite, setSprite] = useState('')
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(validatedResponse => validatedResponse.json())
    .then(body => {
      let pokeArray = []
      pokeArray.push(body)
      setPokeData(pokeArray)
      setSprite(body.sprites.front_default)
    })
    .catch(error => {
      console.log(`Error ${error.message}`)
    })
  }, [])


  return(
      <div className="spriteContainer">
        <img src={sprite} alt={pokeData.name}/>
        {name}
      </div>
  )
}

export default PokemonTile;
