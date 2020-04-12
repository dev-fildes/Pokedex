import React, { useState, useEffect, Fragment } from 'react'

const PokemonTile = (props) => {
  let { name, url } = props;
  const [sprite, setSprite] = useState('')
  const [pokeData, setPokeData] = useState([])

  useEffect(() =>{
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

  const pokeInfo = pokeData.map(info => {
    info.types.map(item => {
      debugger
      return(
        <Fragment>
        {item.type.name}
        </Fragment>
      )
    })
  })


  return(
    <div className="spriteContainer">
    <img src={sprite} />
    {name}
    {pokeInfo}
    </div>
  )
}

export default PokemonTile;
