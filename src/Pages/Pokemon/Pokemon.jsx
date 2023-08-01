import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPokemonByName } from "../../Services/services";
import s from "./pokemon.module.css";

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    const getPokemon = async () => {
      try {
        const data = await getPokemonByName(id);
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemon();
  }, [id]);

  console.log(pokemon);

  return (
    <div className={s.container}>
      {error && <p>Somthing went wrong</p>}
      {isLoading && <p>Loading...</p>}
      {pokemon !== {} && (
        <>
          <NavLink to="/">Back</NavLink>
          <p className={s.text}>{pokemon.name}</p>
          <img
            className={s.main}
            src={pokemon?.sprites?.front_default}
            alt={pokemon.name}
          />
          <div className={s.list}>
            <img
              className={s.additional}
              src={pokemon?.sprites?.back_default}
              alt={pokemon.name}
            />
            <img
              className={s.additional}
              src={pokemon?.sprites?.back_shiny}
              alt={pokemon.name}
            />
            <img
              className={s.additional}
              src={pokemon?.sprites?.front_shiny}
              alt={pokemon.name}
            />
          </div>
        </>
      )}
    </div>
  );
}
