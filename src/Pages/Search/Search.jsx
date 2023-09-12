import { useEffect, useState } from "react";
import Form from "../../Components/Form/Form";
import { getPokemonByName } from "../../Services/services";
import PokemonItem from "../../Components/PokemonItem/PokemonItem";
import css from "./search.module.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    setIsLoading(true);
    const findPokemon = async () => {
      try {
        const data = await getPokemonByName(query);
        console.log(data);
        setPokemon(data);
      } catch (error) {
        return error.massage;
      } finally {
        setIsLoading(false);
      }
    };
    findPokemon();
  }, [query]);
  return (
    <>
      <div className={css.search}>
        <Form setQuery={setQuery} />
        {pokemon && <PokemonItem pokemon={pokemon} />}
      </div>
    </>
  );
}
