import s from "./home.module.css";
import PokemonList from "../../Components/PokemonList/PokemonList";
import { useState, useEffect } from "react";
import { queryPokemon } from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, addPokemons } from "../../Redux/operations";
import { selectPokemons } from "../../Redux/pokemonSlice";

export default function Home() {
  const dispatch = useDispatch();
  // const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pokemons = useSelector(selectPokemons);
  console.log(pokemons);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getPokemons = async () => {
  //     try {
  //       const { results } = await queryPokemon(page);
  //       setPokemons((p) => [...pokemons, ...results]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getPokemons();
  // }, [page]);

  useEffect(() => {
    if (page === 1) {
      dispatch(getPokemons());
    }
    if (page > 1) {
      dispatch(addPokemons(page));
    }
  }, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(addPokemons(page));
  // }, [page]);

  return (
    <>
      {error && <p>Something went wrong</p>}
      {isLoading && <p>Loading...</p>}
      <PokemonList pokemons={pokemons} />
      <button onClick={() => setPage(page + 1)}>Next</button>
      <button>Prev</button>
    </>
  );
}
