import { Button, Col, Container, Image, Row } from "react-bootstrap";

import "./../styles/Shop.scss";

function Potion(){
  return(
      <div className="potion">
        <Image className="potion-img white-txt" src="nada por enquanto" alt="Poção" />
        <h2 className="potion-title golden-txt">Poção</h2>
        <p className="potion-info">Nome</p>
        <p className="potion-price">Preço</p>
        <div className="potion-buy">
          <Button size="lg" variant="outline-danger">Comprar</Button>
        </div>
      </div>
  )
}

export default function() {
  return(
    <>
      <h1 className="golden-txt store-title title">Explore nosso catálogo</h1>
      <section id="potion-inventory">
        <Container>
          <Row>
            <Col>
              <Potion />
              <Potion />
              <Potion />
            </Col>
            <Col>
              <Potion />
              <Potion />
              <Potion />
            </Col>
            <Col>
              <Potion />
              <Potion />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
