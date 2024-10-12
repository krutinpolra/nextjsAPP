import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainNav = () => {
  return (
    <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand>KRUTIN BHARATBHAI POLRA</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link>Countries</Nav.Link>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Container>
      <br />
      <br />
    </Navbar>
  );
};

export default MainNav;
