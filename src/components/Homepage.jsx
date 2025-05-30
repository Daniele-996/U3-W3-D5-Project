import { Col, Container, Row } from "react-bootstrap";
import RowResults from "./RowResults";

const Homepage = () => {
  return (
    <>
      <Container className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="row">
          <Col className="col-9 col-lg-11 mainLinks d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <RowResults query={"Rihanna"} />
        <RowResults query={"Madonna"} />
        <RowResults query={"Bruno Mars"} />
      </Container>
    </>
  );
};
export default Homepage;
