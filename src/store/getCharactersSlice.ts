import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

interface Characters {
  data: Data;
  offset: number;
  selectedCharacter: number | "none";
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
type Data = any[];

const initialState: Characters = {
  data: [],
  offset: 0,
  selectedCharacter: "none",
  status: "idle",
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (offset: number = 0) => {
    const limit = 9;
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&apikey=81f0460a514bf19cffa4a097acf2dae6`
    );

    return response.data.data.results;
  }
);

const getCharactersSlice = createSlice({
  name: "getCharacters",
  initialState,
  reducers: {
    changeSelectedCharacter: (state, action: PayloadAction<number>) => {
      state.selectedCharacter = action.payload;
    },
    setOffset: (state) => {
      state.offset = state.offset + 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<Data>) => {
          state.status = "succeeded";
          state.data = [...state.data, ...action.payload];
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});
export const { setOffset, changeSelectedCharacter } =
  getCharactersSlice.actions;

export const selectCharacters = (state: RootState) => state.getCharacters;

export default getCharactersSlice.reducer;
