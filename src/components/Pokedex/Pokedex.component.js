import React from "react";
import Pokecard from "../Pokecard/Pokecard.component";
import "./Pokedex.styles.css";

function Pokedex(props) {
  let title;
  if (props.isWinner) {
    title = <h1 className={"Pokedex-winner"}>"Winning Hand!"</h1>;
  } else {
    title = <h1 className={"Pokedex-loser"}>"Losing Hand!"</h1>;
  }
  return (
    <div className="Pokedex">
      {title}
      <h4>Total Experience: {props.exp}</h4>
      <p>{}</p>
      <div className="Pokedex-cards">
        {props.pokemon.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
