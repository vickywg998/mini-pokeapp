import React, { useState, useEffect, PureComponent } from "react";
import { Button, Grid, Table, Label } from "semantic-ui-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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

  const loadPokemon = (pokemon) => {
    const {
      name,
      id,
      species,
      height,
      weight,
      abilities,
      sprites,
      stats,
      types,
    } = pokemon;
    const pokeImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const pokeImageUrl2 = `https://pokeres.bastionbot.org/images/pokemon/${
      id - 1
    }.png`;
    const pokeImageUrl3 = `https://pokeres.bastionbot.org/images/pokemon/${
      id + 1
    }.png`;
    const { front_default } = sprites;

    return (
      <>
        <Grid>
          <Grid.Row centered>
            <div className="pokemon-header">
              <img src={front_default} /> <h2>{`${name} #${id}`}</h2>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={pokeImageUrl2}
                  className="pokemon-img-container"
                />
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={pokeImageUrl}
                  className="pokemon-img-container"
                />
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={pokeImageUrl3}
                  className="pokemon-img-container"
                />
              </AliceCarousel>
            </Grid.Column>
            <Grid.Column width={6}>
              <Table color="yellow" key="yellow" inverted>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{height}'</Table.Cell>
                    <Table.Cell>{weight} lbs</Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell> Abilites:</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell verticalAlign="top">
                      {abilities.map((info) => {
                        return (
                          <div key={info.ability.name}>
                            {`${info.ability.name}`}
                          </div>
                        );
                      })}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <h4>Types</h4>
              {types.map((info) => {
                return (
                  <Label color="brown" key={info.type.name} size="big">
                    {info.type.name}
                  </Label>
                );
              })}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            Base Stats:
            {stats.map((info) => {
              return (
                <div key={info.stat.name}>
                  {" "}
                  {`${info.base_stat} ${info.stat.name}`}
                </div>
              );
            })}
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={pokemon}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey={pokemon.stats.map((info) => info.name)}
              />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </Grid.Row>
        </Grid>
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <p>loading</p>}
      {pokemon !== undefined && pokemon && loadPokemon(pokemon)}
      {pokemon === false && <p>Sorry, there's no such Pokemon!</p>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
}

export default Pokemon;
