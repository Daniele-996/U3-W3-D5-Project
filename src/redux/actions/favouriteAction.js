import { TOGGLE_FAVORITE } from "./types";

export const toggleFavorite = (songId) => ({
  type: TOGGLE_FAVORITE,
  payload: songId,
});
