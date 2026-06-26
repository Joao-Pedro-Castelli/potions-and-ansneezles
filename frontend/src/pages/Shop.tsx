import { Button, Col, Container, Image, Row } from "react-bootstrap";

import { type Potion } from "./../types.ts"

import "./../styles/Shop.scss";
import { useEffect, useState } from "react";

function Potion(props: Potion){
  return(
      <div className="potion">
        <Image className="potion-img white-txt" src={props.imgPath} alt="Poção" width={320} height={320} />
        <h2 className="potion-title golden-txt">{props.name}</h2>
        <p className="potion-info">{props.desc}</p>
        <p className="potion-price">{`${props.price} moedas`}</p>
        <div className="potion-buy">
          <Button size="lg" variant="outline-warning">Comprar</Button>
        </div>
      </div>
  )
}

async function fetchPotions() {
    const resp = await fetch("http://localhost:3000/potions", { credentials: "include" });
    if (resp.status == 500) {
      console.log("Erro: " + resp.body);
      return [];
    }
    return await resp.json();
}

export default function() {
  const [potions, setPotions] = useState([] as Potion[]);

  useEffect(() => {
    fetchPotions().then((pot) => {
      console.log("Pot = " + pot)
      setPotions(pot);

    }).catch(() => {
      console.log("Ocorreu erro ao tentar pegar as poções");
    })
  }, [])
  return(
    <>
      <h1 className="golden-txt store-title title">Explore nosso catálogo</h1>
      <section id="potion-inventory">
        <Container>
          <Row>
            <Col>
              {potions.map((potion, i) => {
                if (i % 3 == 0) {
                  return <Potion key={potion.name} name={potion.name} desc={potion.desc} price={potion.price} imgPath={potion.imgPath} />
                }
                return <></>;
              })}
            </Col>
            <Col>
              {potions.map((potion, i) => {
                if (i % 3 == 1) {
                  return <Potion key={potion.name} name={potion.name} desc={potion.desc} price={potion.price} imgPath={potion.imgPath} />
                }
                return <></>;
              })}
            </Col>
            <Col>
              {potions.map((potion, i) => {
                if (i % 3 == 2) {
                  return <Potion key={potion.name} name={potion.name} desc={potion.desc} price={potion.price} imgPath={potion.imgPath} />
                }
                return <></>;
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
