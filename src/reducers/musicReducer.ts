import { Music } from "@/types/musicTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicState {
  results: Array<Music>;
  loading: boolean;
  error: string | null;
}

const initialState: MusicState = {
  results: [],
  loading: false,
  error: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    searchStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchSuccess(state, action: PayloadAction<Music[]>) {
      state.loading = false;
      state.results = action.payload;
    },
    searchFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { searchStart, searchSuccess, searchFailure } = musicSlice.actions;
export default musicSlice.reducer;
