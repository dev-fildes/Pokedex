import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonList from './PokemonList'
import Pagination from './Pagination'
import Search from '../Search/Search'

const Index = (props) => {
  const POKE_API = `https://pokeapi.co/api/v2/pokemon`
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(POKE_API);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    let cancel;
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false)
      setNextPage(response.data.next)
      setPrevPage(response.data.previous)
      setPokemon(response.data.results.map(p =>  p.name))
    })

    return() => cancel()
  }, [currentPage])

  if(loading > (5)) return "Loading.."

  const loadNextPage = () => {
    setCurrentPage(nextPage)
  }
  const loadPreviousPage = () => {
    setCurrentPage(prevPage)
  }

    return(
      <div>
        <Search api={POKE_API} />
        <PokemonList pokemon={pokemon} />
        <Pagination
          next={nextPage ? loadNextPage : null}
          previous={prevPage ? loadPreviousPage : null}
        />
      </div>
    )
  }

  export default Index;
