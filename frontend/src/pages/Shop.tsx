import { Col, Container, Row } from "react-bootstrap";

import "./../styles/Shop.scss";

function Potion(){
  return(
      <div className="potion">
        <h2 className="white-txt">Poção</h2>
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
