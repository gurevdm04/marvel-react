import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { generateRandomId } from "../utils/generateRandomId";

interface randomInfo {
  data: Data | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
interface Data {
  name: string;
  description: string;
  thumbnail: string;
  detail: string;
  wiki: string;
}

const initialState: randomInfo = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchRandomInfo = createAsyncThunk(
  "randomInfo/fetchRandomInfo",
  async () => {
    const response = await axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${generateRandomId()}?apikey=81f0460a514bf19cffa4a097acf2dae6`
      )
      .then((res) => {
        return res.data.data.results[0];
      });

    return {
      name: response.name,
      description: response.description,
      thumbnail: response.thumbnail.path + "." + response.thumbnail.extension,
      detail: response.urls[0].url,
      wiki: response.urls[1].url,
    };
  }
);

const getRandomInfoSlice = createSlice({
  name: "getRandomInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRandomInfo.fulfilled,
        (state, action: PayloadAction<Data>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchRandomInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const selectRandomInfo = (state: RootState) => state.getRandomInfo;

export default getRandomInfoSlice.reducer;
