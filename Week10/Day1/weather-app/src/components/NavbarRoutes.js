import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarRoutes = () => {
  const styleLink = {
    textDecoration: "none",
    Color: "white",
  };

  return (
    <Navbar style={{ backgroundColor: "rgb(46, 68, 115)" }} expand="lg">
      <Container style={styleLink}>
        <Navbar.Brand style={{ color: "white", textDecoration: "none" }}>
          My Weather App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/favorite"
                style={{ color: "white", textDecoration: "none" }}
              >
                Favorite
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarRoutes;
