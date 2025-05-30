import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLikeSong } from "../redux/actions";
import { Card, Col, Row, Button } from "react-bootstrap";

const RowResults = () => {
  const songs = useSelector((state) => state.results);
  const liked = useSelector((state) => state.likedSongs);
  const dispatch = useDispatch();

  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {songs.map((song) => (
        <Col key={song.id}>
          <Card onClick={() => dispatch(setCurrentSong(song))}>
            <Card.Img variant="top" src={song.album.cover_medium} />
            <Card.Body>
              <Card.Title>{song.title}</Card.Title>
              <Card.Text>{song.artist.name}</Card.Text>
              <Button
                variant={
                  liked.includes(song.id) ? "success" : "outline-secondary"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleLikeSong(song.id));
                }}
              >
                ❤️
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RowResults;
