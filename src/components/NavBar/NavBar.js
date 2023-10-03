import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({ texto }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Todo Tu Hogar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Tecnología" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.01">
                Tv, Audio y Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.02">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.03">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.04">
                Electrodomésticos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.99">
                Otros Tecnología
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hogar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.01"> Casa </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.02"> Muebles </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.02"> Jardín </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.99">
                Otros Hogar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Personal" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.01"> Salud </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.02"> Belleza </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.03"> Fitness </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.99">
                Otros Personal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <div style={{textAlign:"center"}}>
          <CartWidget />
          <h6> {texto}</h6>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
