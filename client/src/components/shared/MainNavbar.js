import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <Navbar>
      <Container>
        <Link to='/'><Navbar.Brand>Learn LMS</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/courses'>
              Courses
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/users'>
              Users
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;