import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { setShowSideBar } from "../services/stateService";
import { useDispatch } from "react-redux";

function Logo() {
  console.log("Logo");
  const dispatch = useDispatch();
  const handleOpenSideBar = () => {
    dispatch(setShowSideBar(true));
  };

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
