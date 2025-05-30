import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions/musicActions";
import { setCurrentSong } from "./redux/actions/playerActions";
import { toggleFavorite } from "./redux/actions/favoritesActions";

const Homepage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.results);
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    dispatch(fetchMusic("eminem"));
  }, [dispatch]);

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          <span onClick={() => dispatch(setCurrentSong(song))}>
            {song.title}
          </span>
          <button onClick={() => dispatch(toggleFavorite(song.id))}>
            {favorites.includes(song.id) ? "❤️" : "♡"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
