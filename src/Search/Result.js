import React, { useState, useEffect, Fragment } from 'react';

const Result = (props) => {
  const [pokeData, setPokeData] = useState({
    sprites: [],
    stats: [],
    types: []
  })

  const id = props.id
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(body => {
        setPokeData(body)
      })
      .catch(error => {
        console.log(`Error in results ${error.message}`)
      })
    }, [])

    let stats = pokeData.stats.map(item => {
      return(
        <Fragment>
        {item.stat.name}: {item.base_stat}<br/>
        </Fragment>
      )
    })

    let type = pokeData.types.map(type => {
      debugger
      return(
        <Fragment>
        {type.type.name}
        </Fragment>
      )
    })



    return(
      <div className="result-container">
      <img src={pokeData.sprites.front_default} alt={pokeData.name} className="poke-sprite"/>
      <div className="poke-name">{pokeData.name}</div>
      {stats}
      {type}
      </div>
    )
  }
  export default Result;
