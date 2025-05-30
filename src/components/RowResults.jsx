import { Col, Row } from "react-bootstrap";

const RowResults = (props) => {
  // console.log(props);
  return (
    <>
      <Row className="row">
        <Col className="col-10">
          <div id="hiphop">
            <h2> {props.query} </h2>
            <Row
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default RowResults;
