import s from "./home.module.css";
import PokemonList from "../../Components/PokemonList/PokemonList";
import { useState, useEffect } from "react";
import { queryPokemon } from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, addPokemons } from "../../Redux/operations";
import { selectPokemons } from "../../Redux/pokemonSlice";
import { animateScroll } from "react-scroll";
import css from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  // const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pokemons = useSelector(selectPokemons);

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
  const handleLoadMore = () => {
    setPage(page + 1);
    smoothScroll();
  };

  const smoothScroll = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: "linear",
    });
  };

  return (
    <>
      <div className={css.home}>
        {error && <p>Something went wrong</p>}
        {isLoading && <p>Loading...</p>}
        <PokemonList pokemons={pokemons} />
        <button className={css.button} onClick={() => handleLoadMore()}>
          Next
        </button>
      </div>
    </>
  );
}
