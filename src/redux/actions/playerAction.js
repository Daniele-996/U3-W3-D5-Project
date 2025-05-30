import { SET_CURRENT_SONG } from "./types";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});
