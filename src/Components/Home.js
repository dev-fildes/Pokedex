import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonList from './PokemonList'
import Pagination from './Pagination'
import Search from '../Search/Search'

const Index = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon/`)
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("");

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

  if(loading) return "Loading.."

  const loadNextPage = () => {
    setCurrentPage(nextPage)
  }
  const loadPreviousPage = () => {
    setCurrentPage(prevPage)
  }


    return(
      <div>
        <PokemonList pokemon={pokemon} />
        <Pagination
          next={nextPage ? loadNextPage : null}
          previous={prevPage ? loadPreviousPage : null}
        />
      </div>
    )
  }

  export default Index;
