import React, { useState } from 'react';

const Search = (props) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  return(
    <div>
    <input
      id="auto"
      type="Search"
      placeholder="Search Pokemon.."
    />
    </div>
  )
}

export default Search;
