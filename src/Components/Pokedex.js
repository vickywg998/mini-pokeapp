import React, { useState, useEffect } from "react";
import Search from "./Search";
import Random from "./Random";
import axios from "axios";

function Pokedex(props) {
  const [query, setQuery] = useState("");
  const { history } = props;
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    };

    fetchData();
  }, [url]);

  console.log(data);

  const { id, name, weight, height } = data;
  return (
    <div>
      this is the main Pokedex page
      <div>
        {/* <Search handleChangeSearch={handleChangeSearch} search={query} setSearchResult={searchTerm}/> */}

     
        <input
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setUrl(`https://pokeapi.co/api/v2/pokemon/${query}`)}
        >
          Search
        </button>
 
        <div>id {id}</div>
        <div>name: {name}</div>
        <img
          src={
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
          className="sprite"
        />
        <div>weight: {weight}</div>
        <div>height:{height}</div>
        <div>abilities:{height}</div>
        <button onClick={() => history.push(`/${id}`)}>
          View more details
        </button>
      </div>
      <div> Feeling lucky?</div>
      <Random />
    </div>
  );
}

export default Pokedex;
