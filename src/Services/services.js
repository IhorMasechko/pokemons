import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

// https://pokeapi.co/api/v2/pokemon?offset=5&limit=5

// https://pokeapi.co/api/v2/pokemon/pidgey

// export const queryPokemon = async () => {
//   const { data } = await axios.get(`${baseURL}?offset=20&limit=20`);
//   return data;
// };

export const queryPokemon = async (page) => {
  const { data } = await axios.get(`${baseURL}?offset=${page * 20}&limit=20`);
  return data;
};

export const getPokemonByName = async (name) => {
  const { data } = await axios.get(`${baseURL}/${name}`);
  return data;
};
