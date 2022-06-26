import React from "react";
import "./Pokecard.styles.css";

function Pokecard(props) {
  // const POKE_API =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  let padToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;

  let pokeImg = `${POKE_API}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className={"Pokecard-title"}>{props.name}</h1>
      <img src={pokeImg} alt={props.name} />
      <h1 className={"Pokecard-data"}>{props.type}</h1>
      <h1 className={"Pokecard-data"}>{props.exp}</h1>
    </div>
  );
}

export default Pokecard;
