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
      .then((response) => {
        const { data } = response;
        setPokemon(data);
      })
      .catch((error) => {
        setPokemon(false);
      });
  }, [pokeID]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
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
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
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

      {/* <Card key={pokemon.id}>
        <Card.Img
          className="card-img-top"
          src={`${process.env.PUBLIC_URL}/products/${pokemon.sku}.jpg`}
          alt={pokemon.title}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>

          <div className="product_card-container">
            <Card.Text>
              <Button
                className="button_primary-color pet-button"
                onClick={() => props.handleAddToCart(pokemon)}
              >
                <Icon name="add to cart" /> Add to cart
              </Button>
            </Card.Text>
          </div>
        </Card.Body>
      </Card> */}
    </>
  );
}

export default Pokemon;
