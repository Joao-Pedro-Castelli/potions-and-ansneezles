import { Col, Container, Nav, Row, Stack } from "react-bootstrap"
import "./../styles/Footer.scss"

export default function Footer() {
  return(
    <footer className="white-txt">
      <Container>
        <Row>
            <Col className="footer-info">
              <h1 className="golden-txt">Poções e soluções</h1>
              <p>Localização: Inglaterra, Londres, Bairro Caldeirão Penetrado, Beco da Última Saída Nro. 2</p>
              <p>Contato: Pombo-correio pelo endereço <a>pocoes&solc@bruxos.net</a></p>
          </Col>

          <Col className="footer-nav">
              <Stack gap={2}>
                <Nav>Loja</Nav>
                <Nav>Sobre nós</Nav>
              </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
