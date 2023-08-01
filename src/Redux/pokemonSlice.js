import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, addPokemons } from "./operations";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: { pokemons: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      })
      .addCase(addPokemons.fulfilled, (state, action) => {
        state.pokemons = [...state.pokemons, ...action.payload];
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;

export const selectPokemons = (state) => state.pokemons;
