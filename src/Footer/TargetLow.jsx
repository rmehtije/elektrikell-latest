import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";

function TargetLow(props) {
  return (
    <>
      <Row>
        <Col>TargetLow</Col>
      </Row>
      <Row>
        <Col>
          <Intervals {...props} />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
}

export default TargetLow;
