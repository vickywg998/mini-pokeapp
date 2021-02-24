import React from 'react'
import { Route, Switch } from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/PokeCard";


function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Pokedex />}></Route>
      <Route exact path="/:pokemonId" render={() => <Pokemon/>}></Route>
    </Switch>
  );
}

export default App;

// Requirements:

// Pokemon API to use: https://pokeapi.co/
// The app should be built in ReactJS. You can use a styling library like Emotion
// The user should be able to search for a pokemon and get a “card” filled with info about that pokemon
// Specifically, the card should have at least the pokemon name, height, weight, type(s), abilities and base stats (hp/atk/def/special-atk/special-def/speed)
// The card should have at least one picture/sprite of the pokemon

// One you have the basic setup above, please also add these features:

// Make your styling awesome. Try to match the pokemon type with the style of the card (eg. red/green etc.). Also, try to style the pokemon stats since they are numeric
// Have a way to show/click through all the sprites of each pokemon, instead of just showing one
// Have the app display a few random pokemon upon loading before the user searches anything
// Implement auto-complete options for possible pokemon matches as the user types their query (like google search)
// Use git to keep track of your progress with good commit messages throughout development
