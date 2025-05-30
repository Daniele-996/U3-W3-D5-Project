export const GET_MUSIC = "GET_MUSIC";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (songId) => ({
  type: TOGGLE_FAVORITE,
  payload: songId,
});

export const getMusic = (songs) => ({
  type: GET_MUSIC,
  payload: songs,
});

export const fetchMusic = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      dispatch(getMusic(data.data));
      //   console.log(data.data);
    } catch (error) {
      console.error("Fetch music failed", error);
    }
  };
};

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});
