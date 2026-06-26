import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

import "../styles/Header.scss";

export default function Header() {
  const navigate = useNavigate();

  return(
    <Navbar data-bs-theme="dark">
      <div className="header-navbar">
      <Navbar.Brand onClick={() => navigate("/")}>Poções e Soluções</Navbar.Brand>
      <Nav variant="underline" className="tabas">
        <Nav.Link onClick={() => navigate("/loja")}>Loja</Nav.Link>
        <Nav.Link onClick={() => navigate("/#about-us")}>Sobre nós</Nav.Link>
        <Nav.Link onClick={() => navigate("/#history")}>Nossa história</Nav.Link>
      </Nav>
      <Button variant="light">Login</Button>
      </div>
    </Navbar>
  );
}
