import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  if (!currentSong) return <div>Seleziona una canzone per ascoltarla</div>;

  return (
    <div className="player">
      <img src={currentSong.album.cover_small} alt={currentSong.title} />
      <div>{currentSong.title}</div>
      <div>{currentSong.artist.name}</div>
    </div>
  );
};

export default Player;
