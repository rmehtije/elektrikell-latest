import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { setShowSideBar } from "../services/stateService";

function LeftSideBar() {
  console.log("LeftSideBar");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.main.showSideBar);
  const handleClose = () => dispatch(setShowSideBar(false));

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search by dates</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftSideBar;
