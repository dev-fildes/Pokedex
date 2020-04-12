import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Result from '../Search/Result.js'
import PokemonList from './PokemonList'

const Home = (props) => {
  const POKE_API = `https://pokeapi.co/api/v2/pokemon`
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPokemon();
  }

  const fetchPokemon = () => {
    fetch(`${POKE_API}/${search}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(parsedbody => {
      let pokeball = []
      pokeball.push(parsedbody)
      setPokemon(pokeball)
      setRedirect(true)
    })
    .catch(error => {
      console.log(`Error catching pokemon ${error.message}`)
    })
  }

  const pokeData = pokemon.map(poke => {
    return(
      <Result data={poke} />
    )
  })

  let pokemonIndex;
  if(!redirect) {
    pokemonIndex = <PokemonList api={POKE_API}/>
  }

  return (
    <div>
      hi
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Search Pokemon.."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <input
          type="Submit"
        />
      </form>
      {pokeData}
      {pokemonIndex}
    </div>
  );
};

export default Home;
