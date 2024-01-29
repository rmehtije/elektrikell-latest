import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Logo({ handleOpenSideBar }) {
  return (
    <>
      <Col>Logo</Col>
      <Col>
        <Button variant="primary" onClick={handleOpenSideBar}>
          Search
        </Button>
      </Col>
    </>
  );
}

export default Logo;
