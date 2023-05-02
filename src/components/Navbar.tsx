import Link from "next/link";
import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
const NavbarComp = () => {
  const { user, Logout } = useAuth();
  const router = useRouter();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <Nav.Link
                onClick={() => {
                  Logout();
                  router;
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/SignUp">Signup</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
