import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = createAsyncThunk(
  "pokemons/getAllPokemons",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseURL}?offset=20&limit=20`);
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

const addPokemons = createAsyncThunk(
  "pokemons/addPagePokemons",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${baseURL}?offset=${page * 20}&limit=20`
      );
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export { getPokemons, addPokemons };
