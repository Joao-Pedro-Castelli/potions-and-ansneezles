import { Button, Nav, Navbar } from "react-bootstrap";
import "../styles/Header.scss";

export default function Header() {
  return(
    <Navbar data-bs-theme="dark" className="navbar">
      <Navbar.Brand>Poções e Soluções</Navbar.Brand>
      <Nav variant="underline" className="tabas">
        <Nav.Link>Loja</Nav.Link>
        <Nav.Link>Nossa história</Nav.Link>
        <Nav.Link>Contato</Nav.Link>
      </Nav>
      <Button variant="light">Carrinho</Button>
    </Navbar>
  );
}
