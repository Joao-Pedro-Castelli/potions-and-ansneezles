import { useState } from "react";
import Form from "react-bootstrap/Form";

import { potionValid, type Potion } from "./../types"
import { Button } from "react-bootstrap";

type responseStatus = "未" | "大丈夫" | "マズイ";

function string(s: responseStatus) {
  switch (s) {
    case "未":
      return "Esperando submissão...";
    case "大丈夫":
      return "Criação de poção bem sucedida."
    case "マズイ":
      return "Erro durante a criação da poção! Verifique se os campos estão corretos, por favor."
  }
}

export default function Admin() {
  const [status, setStatus] = useState("未" as responseStatus);
  const [potion, setPotion] = useState({
    name: "",
    desc: "",
    price: 100,
    imgPath: "",
  } as Potion);
  const [file, setFile] = useState(null as any);

  const handleChange = (field: string, value: string | any) => {
    if (typeof value != "string") {
      if (field == "image" && value.target.files && value.target.files.length > 0) {
        setFile(value.target.files[0]);
      }
    }
    if (field == "price") {
      if (/^\d*.?[\d]{0,2}$/g.test(value)) {
        setPotion({...potion, price : Number(value)});
      }
      else {
        setPotion({...potion, price : -1});
      }
    }
    else if(field == "name") {
      setPotion({...potion, name : value});
    }
    else if(field == "desc") {
      setPotion({...potion, desc: value});
    }
    return;
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const potValid = potionValid.parse(potion);

      const pot = new FormData();
      pot.append("name", potValid.name)
      pot.append("desc", potValid.desc)
      pot.append("price", potValid.price.toString())
      pot.append("potionImg", file)
      const resp = await fetch("http://localhost:3000/potion", {
        method: "POST",
        body: pot,
      });
      if (resp.status == 201) {
        setStatus("大丈夫");
      }
      else {
        setStatus("マズイ");
      }
    }
    catch (err) {
      console.log(err);
      setStatus("マズイ");
    }
  }
  
  return(
    <>
      <h1 className="golden-txt">Cadastro de produtos</h1>
      <Form onSubmit={(e) => handleSubmit(e)} className="white-txt">
        <Form.Group controlId="name">
          <Form.Label>Nome da poção</Form.Label>
          <Form.Control type="text" value={potion.name} onChange={(e) => handleChange("name", e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="desc">
          <Form.Label>Descrição da poção</Form.Label>
          <Form.Control type="text" value={potion.desc} onChange={(e) => handleChange("desc", e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Preço da poção</Form.Label>
          <Form.Control type="number" min={0} step={0.01} onChange={(e) => handleChange("price", e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Foto da poção</Form.Label>
          <Form.Control type="file" onChange={(e) => handleChange("image", e)}/>
        </Form.Group>
        <Button type="submit">Enviar dados</Button>
      </Form>
      <p>{string(status)}</p>
    </>
  );
}
