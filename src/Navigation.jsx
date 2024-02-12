import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
  console.log('Navigation');
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/lowprice/8" className="nav-link">Low price 8h</Link>
          <Link to="/about/me" className="nav-link">About me</Link>
          <Link to="/about/gamma" className="nav-link">Gamma intelligence</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
