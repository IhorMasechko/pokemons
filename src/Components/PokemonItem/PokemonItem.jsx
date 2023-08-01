import React from "react";
import s from "./pokemonItem.module.css";
export default function PokemonItem({ pokemon }) {
  const { name, height, weight, abilities, sprites } = pokemon;
  return (
    <div>
      <h2>{name}</h2>
      <img src={sprites?.front_default} alt={name} />
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      {abilities && (
        <p>
          Abilities:{" "}
          {abilities?.map(({ ability }) => (
            <span className={s.ability} key={ability.name}>
              {ability?.name}
            </span>
          ))}{" "}
        </p>
      )}
      <img src={sprites?.back_shiny} alt={name} />
      <img src={sprites?.front_shiny} alt={name} />
      <img src={sprites?.back_default} alt={name} />
    </div>
  );
}
