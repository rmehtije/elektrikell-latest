import Logo from "./Logo";
import Info from "./Info";
import Row from "react-bootstrap/Row";

function Head() {
  console.log("Head");
  return (
    <>
      <Row>
        <Logo />
      </Row>
      <Row>
        <Info />
      </Row>
    </>
  );
}

export default Head;
