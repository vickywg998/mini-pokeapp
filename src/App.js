import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route
          exact
          path="/:pokeID"
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
