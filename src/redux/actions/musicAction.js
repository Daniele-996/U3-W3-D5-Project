import { GET_MUSIC } from "./types";

export const getMusic = (songs) => ({
  type: GET_MUSIC,
  payload: songs,
});

export const fetchMusic = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      dispatch(getMusic(data.data));
    } catch (error) {
      console.error("Fetch music failed", error);
    }
  };
};
