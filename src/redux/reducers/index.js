import { combineReducers } from "@reduxjs/toolkit";
import musicReducer from "./musicReducer";
import playerReducer from "./playerReducer";
import favoritesReducer from "./favouriteReducer";

const rootReducer = combineReducers({
  music: musicReducer,
  player: playerReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
