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


// Wanted to implement the following solutions to get a list of random results since the current one only gets one result.  
// const getRandomPokemon = (k) => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`).then((res) => {
//         var pokemons = JSON.parse(JSON.stringify(res.data))
//         // console.log("pokemons", pokemons)
//         var rand_ids = getRandomInts(151, k);
//         for (var i = 0; i < k; i++) {
//             var id = rand_ids[i];
//             console.log(pokemons.results[id].name, id);
//         }
//       setRandomPokemon(res.data);
//       console.log(res.data, "res data")
//     });
//   };

//   const getRandomInts = (max, k)=> {
//     var res = [];
//     while (res.length < k) {
//       var number = Math.floor(Math.random() * Math.floor(max));
//       if (!res.includes(number)) {
//         res.push(number);
//       }
//     }
//     return res;
//   }