import "./../styles/StoreFront.scss";

export default function StoreFront() {
  return(
    <>
      <div className="center-title v-border">
        <p className="golden-txt bigger">Desde 1867 realizando magia</p>
        <h1 className="golden-txt title">As melhores poções</h1>
        <h2 className="white-txt cotitle">Sua solução</h2>
        <p className="white-txt">Aqui você pode encontrar misturas para todo tipo de problema<br/>Sinta-se à vontade</p>
      </div>
      <div id="about-us" className="v-border">
        <h1>Sobre a loja</h1>
        <p>Aqui na Poções e Soluções, nós te entregamos apenas as infusões da mais alta qualidade, 
          em um preço acessível e entregue em tempo recorde. Todos os ingredientes são retirados 
          de fontes sustentáveis a partir de parceiros muito confiáveis da loja.</p>
          <p>Caso você seja novo por aqui, permita-me te introduzir: o que são as nossas poções?
            </p>
      </div>
    </>
  )
}
