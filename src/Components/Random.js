import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

function Random() {
  const [randomPokemon, setRandomPokemon] = useState([]);

  // getting a list of random results
  const getRandomPokemon = (k) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`)
      .then((res) => {
        var pokemons = JSON.parse(JSON.stringify(res.data));
        var rand_ids = getRandomInts(151, k);

        var randArr = [];
        for (var i = 0; i < k; i++) {
          var id = rand_ids[i];
          randArr.push({ name: pokemons.results[id].name, id: id });
        }
        setRandomPokemon(randArr);
      });
  };

  useEffect(() => {
    getRandomPokemon(5);
  }, []);

  const getRandomInts = (max, k) => {
    var res = [];
    while (res.length < k) {
      var number = Math.floor(Math.random() * Math.floor(max));
      if (!res.includes(number)) {
        res.push(number);
      }
    }
    return res;
  };

  const randomPoke = () => {
    return (
      <Card.Group itemsPerRow={2}>
        {randomPokemon.map((info) => {
          return (
            <Card key={info.id}>
              <Card.Content className="random-pokemon-card">
                <Image
                  floated="left"
                  size="tiny"
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    info.id +
                    ".png"
                  }
                  className="random-pokemon-img"
                />
                <Card.Header className="random-header">{info.name}</Card.Header>
                <Card.Meta>{info.id}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  };

  return <div>{randomPoke()}</div>;
}

export default Random;
