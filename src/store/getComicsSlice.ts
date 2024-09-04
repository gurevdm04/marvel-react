import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

interface Comics {
  data: Data;
  offset: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
type Data = any[];

const initialState: Comics = {
  data: [],
  offset: 0,
  status: "idle",
  error: null,
};

export const fetchComics = createAsyncThunk(
  "comics/fetchComics",
  async (offset: number = 0) => {
    const limit = 8;
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&offset=${offset}&apikey=81f0460a514bf19cffa4a097acf2dae6`
    );

    return response.data.data.results;
  }
);

const getComicsSlice = createSlice({
  name: "getComics",
  initialState,
  reducers: {
    // Редуктор для обновления offset
    setOffsetComics: (state) => {
      state.offset = state.offset + 8;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComics.fulfilled, (state, action: PayloadAction<Data>) => {
        state.status = "succeeded";
        state.data = [...state.data, ...action.payload];
      })
      .addCase(fetchComics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});
export const { setOffsetComics } = getComicsSlice.actions;

export const selectComics = (state: RootState) => state.getComics;

export default getComicsSlice.reducer;
