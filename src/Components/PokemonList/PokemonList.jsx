import React from "react";
import { NavLink } from "react-router-dom";
import s from "./pokemonList.module.css";

export default function PokemonList({ pokemons }) {
  return (
    <ul className={s.list}>
      {pokemons?.map(({ name }) => (
        <NavLink key={name} className={s.navlink} to={`/pokemon/${name}`}>
          <li className={s.item}>{name}</li>
        </NavLink>
      ))}
    </ul>
  );
}
