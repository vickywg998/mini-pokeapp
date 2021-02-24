import React, { useState, useEffect } from "react";
import axios from "axios";

function Random() {
  const [randomPokemon, setRandomPokemon] = useState({});

  const getRandomPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID()}`).then((res) => {
      setRandomPokemon(res.data);
    });
  };

  const randomID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  const randomPoke = () => {
    return (
      <div>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            randomPokemon.id +
            ".png"
          }
          className="sprite"
        />
        <p>{randomPokemon.name}</p>
      </div>
    );
  };

  return <div>{randomPoke()}</div>;
}

export default Random;
