import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import { GET_MUSIC } from "../redux/actions/types";

const MyNav = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) dispatch(GET_MUSIC(query));
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" className="flex-column" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#">
            <img src="src/assets/logo.png" alt="Logo" width="131" height="40" />
          </Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Your Library</Nav.Link>
          </Nav>
          <InputGroup className="mt-3">
            <FormControl
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch}>GO</Button>
          </InputGroup>
        </Container>
      </Navbar>
    </aside>
  );
};

export default MyNav;
