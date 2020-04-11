import React, { useState } from 'react';

const Search = (props) => {
  const POKE_API = props.POKE_API
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let pokemon = []
    axios.get(`${POKE_API}/`)
  }

  return (
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
  );
};

export default Search;
