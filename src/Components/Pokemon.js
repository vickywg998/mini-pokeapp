import React, { useState, useEffect } from "react";
import { Grid, Table, Label, Icon, Statistic } from "semantic-ui-react";
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
        console.log(data);
      })
      .catch((error) => {
        setPokemon(false);
      });
  }, [pokeID]);

  const loadPokemon = (pokemon) => {
    const {
      name,
      id,
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
    const { front_default, back_default, back_shiny, front_shiny } = sprites;

    return (
      <>
        <Grid>
          <Grid.Row centered>
            <div className="pokemon-header">
              <img src={front_default} /> <h2>{`${name} #${id}`}</h2>
            </div>
          </Grid.Row>
          <div className="pokemon-arrow">
            <Icon
              name="arrow left"
              size="big"
              onClick={() => history.push("/mini-pokeapp/")}
            />
          </div>
          <Grid.Row centered>
            <Grid.Column width={7}>
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img
                  style={{  height: "300px" }}
                  src={front_default}
                  className="pokemon-img-container"
                />
                <img
                  style={{  height: "300px" }}
                  src={front_shiny}
                  className="pokemon-img-container"
                />

                <img
                  style={{ height: "300px" }}
                  src={back_default}
                  className="pokemon-img-container"
                />
                <img
                  style={{ height: "300px" }}
                  src={back_shiny}
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
              <h3 className="pokemon-types-header">Types</h3>
              {types.map((info) => {
                return (
                  <Label color="brown" key={info.type.name} size="big">
                    {info.type.name}
                  </Label>
                );
              })}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered className="pokemon-stats-container">
            <h3>Stats</h3>
            <Statistic.Group inverted widths={14}>
              {stats.map((info) => {
                return (
                  <Statistic key={info.stat.name}>
                    <Statistic.Value>{info.base_stat}</Statistic.Value>
                    <Statistic.Label>{info.stat.name}</Statistic.Label>
                  </Statistic>
                );
              })}
            </Statistic.Group>
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
    </>
  );
}

export default Pokemon;
