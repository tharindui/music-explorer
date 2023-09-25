import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  searchStart,
  searchSuccess,
  searchFailure,
} from "../reducers/musicReducer";
import axios from "axios";
import { Action } from "redux";

export const searchMusic =
  (
    query?: string,
    limit: number = 10 // Default limit is 10
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(searchStart());
    try {
      const response = await axios.get(`http://localhost:3001/search`, {
        params: {
          term: query,
          limit: limit,
          media: "music",
        },
      });
      dispatch(searchSuccess(response.data.results));
    } catch (error) {
      dispatch(
        searchFailure(
          "Oops! No results found. Please check your search terms and try again. If you need assistance, feel free to contact our support team."
        )
      );
    }
  };
