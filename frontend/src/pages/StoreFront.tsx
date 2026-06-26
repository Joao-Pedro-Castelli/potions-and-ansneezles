import { Button, Col, Container, Figure, Row } from "react-bootstrap";

import WitchImage from "./../assets/StoreFront/creativecanvas-cute-witch.svg";
import OldStoreImage from "./../assets/StoreFront/gdj-oldstore.svg";
import StoreImage from "./../assets/StoreFront/gemini-store.png";
import "./../styles/StoreFront.scss";
import { Link } from "react-router";

export default function StoreFront() {
  return(
    <>
      <div className="center-title v-border">
        <p className="golden-txt bigger">Desde 1867 realizando magia</p>
        <h1 className="golden-txt title">As melhores poções</h1>
        <h2 className="white-txt cotitle">A solução para você</h2>
        <p className="white-txt">Aqui você pode encontrar misturas para todo tipo de problema</p>
        <Button variant="success" size="lg"><Link to="/loja" className="white-txt link">Navegue por nossas poções (clique aqui)</Link></Button>
      </div>
      <div id="info">
        <section id="about-us" className="front-section v-border">
          <h1 className="golden-txt cotitle section-title">Sobre a loja</h1>
          <Container>
            <Row>
            <Col>
              <p>
                Aqui na <i>Poções e Soluções</i>, nós te entregamos apenas as infusões da mais alta qualidade, 
                em um preço acessível e entregue em tempo recorde. Todos os ingredientes são retirados 
                de fontes sustentáveis a partir de parceiros muito confiáveis nossos.
                A loja física se encontra no Beco da Última Saída (Londres), mas você pode receber 
                por pombo-correio pedindo aqui no site ou entrando em contato por orbe, para pedidos 
                personalizados.
              </p>
              <p>
                Caso você seja novo por aqui, permita-me me introduzir: meu nome é Anabelle
                Merigold e eu venho de uma família de apotecários. Desde adolescente, preparo poções 
                junto com meus pais. Já criei diversas poções originais da loja e me dedico 
                completamente a cada obra que você pode comprar aqui.
              </p>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={256} alt="Foto de Anabelle Merigold" src={WitchImage} />
                <Figure.Caption className="white-txt">
                  Anabelle Merigold, atual dona do Poções e Soluções
                </Figure.Caption>
              </Figure>
            </Col>
            </Row>
          </Container>
        </section>

        <section id="history" className="front-section">
          <h1 className="golden-txt cotitle section-title">Nossa história</h1>
          <p>
            A loja <i>Poções e Soluções</i> possui muita tradição no preparo de suas fórmula. Criada em 
            1867 por Joseph Merigold durante a Grande Revolução de Graindel, o comércio estabeleceu-se 
            em um pequeno prédio, já no Beco da Última Saída. Na época, Joseph havia acabado de se casar 
            e aspirava sustentar sua família ao mesmo tempo que realizava seu sonho de vender poções e 
            prover ajuda e soluções à muitas pessoas.
          </p>
          <Figure>
            <Figure.Image id="old-store-img" width={320} alt="Foto de Anabelle Merigold" src={OldStoreImage} />
            <Figure.Caption className="white-txt">
              Desenho da loja com Joseph Merigold, 1890
            </Figure.Caption>
          </Figure>
          <p>
            Desde então, a loja passou por diversas mudanças, remodelando a faixada, expandindo o estoque 
            e ganhando uma nova identidade visual. Em 2026, o website foi criado. Apesar de tudo isso, a 
            técnica centenária continuou sendo passada por, agora, 5 gerações; com nossas fórmulas familiares, 
            sempre entregamos produtos de qualidade para nossos clientes.
          </p>
          <Figure>
            <Figure.Image width={560} alt="Foto de Anabelle Merigold" src={StoreImage} />
            <Figure.Caption className="white-txt">
              Loja atualmente
            </Figure.Caption>
          </Figure>
        </section>
      </div>
    </>
  )
}
