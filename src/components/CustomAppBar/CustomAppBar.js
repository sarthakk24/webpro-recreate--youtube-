import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import styles from "./CustomAppBar.module.css";

const CustomNavBar = ({ _, onSearch }) => {
  return (
    <Navbar className={styles.backgroundNav} expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img src="../logo.svg" alt="logo" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search on TA Youtube"
                aria-label="search on ta youtube"
                aria-describedby="basic-addon2"
                onChange={onSearch}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
              <Button variant="outline-light" href="/license">
                License
              </Button>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
