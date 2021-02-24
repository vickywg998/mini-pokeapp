import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

function Pokemon(props) {
  const { match, history } = props;
  const { params } = match;
  const { pokeID } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
      .then((res) => {
        const { data } = res;
        setPokemon(data);
      })
      .catch((error) => {
        setPokemon(false);
      });
  }, [pokeID]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, abilities, sprites, stats, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        {`${id}.`} {name}
        <img src={front_default} />
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
        <div>Pokemon Info</div>
        {"Species: "}
        <a href={species.url}>{species.name} </a>
        Height: {height}
        Weight: {weight}
        Types:
        {types.map((info) => {
          const { type } = info;
          const { name } = type;
          return <div key={name}> {`${name}`}</div>;
        })}

        Abilites:
        {abilities.map((info) => {
          const { ability } = info;
          const { name } = ability;
          return <div key={name}> {`${name}`}</div>;
        })}
       Base Stats: {stats.map((info) => {
          const { stat } = info;
          const { name } = stat;
          return <div key={name}> {`${name}`}</div>;
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <p>loading</p>}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <p>Pokemon not found</p>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}

    </>
  );
}

export default Pokemon;
