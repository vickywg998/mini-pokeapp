import React, { useState, useEffect } from "react";
import Random from "./Random";
import { Card, Button, Image, Grid, Input } from "semantic-ui-react";
import Pokeball from "../assets/pokeball.png";

function Pokedex(props) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${query}`
        );
        const data = await response.json();
        setResults(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
      setLoading(false);
    }
    if (query !== " ") {
      fetchData();
    }
    fetchData();
  }, [query]);

  const loadPokemon = (results) => {
    const { name, id, height, weight, types, abilities, stats } = results;
    return (
      <>
        {name !== undefined && (
          <Card className="pokedex-card">
            <Card.Content className="pokedex-card-content">
              <Card.Header>{name}</Card.Header>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                className="pokedex-card-image"
                wrapped
              />
              <Card.Meta>
                Height: {height} Weight: {weight}
              </Card.Meta>
              <Card.Description>
                <h5>Types:</h5>
                {types.map((info) => {
                  return <p key={info.type.name}> {`${info.type.name}`}</p>;
                })}
                <Card.Description>
                  <h5>Abilities: </h5>
                  {abilities.map((info) => {
                    return (
                      <p key={info.ability.name}> {`${info.ability.name}`}</p>
                    );
                  })}
                </Card.Description>
                <Card.Description>
                  <h5> Base Stats:</h5>
                  {stats.map((info) => {
                    return <p key={info.stat.name}> {`${info.stat.name}`}</p>;
                  })}
                </Card.Description>
              </Card.Description>
            </Card.Content>
            <Button onClick={() => history.push(`/${id}`)}>
              View more details
            </Button>
          </Card>
        )}
      </>
    );
  };

  return (
    <Grid centered columns={4}>
      <Grid.Row>
        <h1 className="pokedex-header">Pokedex App</h1>
      </Grid.Row>
      <img src={Pokeball} className="pokedex-pokeball-sizing" />
      <Grid.Row>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(search);
          }}
        >
          <Input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </Grid.Row>

      <Grid.Row>
        {isError && (
          <div>Oops! Can't find this Pokemon, try searching another one?</div>
        )}
        {/* {isLoading ? <div>Loading ...</div> : loadPokemon(data)} */}

        {loading ? <h1>Loading...</h1> : loadPokemon(results)}
      </Grid.Row>
      <Grid.Row>
        <h2> Random Pokemon of the Day!</h2>
      </Grid.Row>
      <Grid.Row>
        <Random />
      </Grid.Row>
    </Grid>
  );
}

export default Pokedex;
