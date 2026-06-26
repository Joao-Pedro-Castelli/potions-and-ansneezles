# Poções e Soluções

O poções e soluções é um website criado por atividade para a disciplina de Introdução
à Desenvolvimento Web em 2026 no curso de Ciências da Computação do ICMC

# Detalhes técnicos

## Tecnologia usada

Para o desenvolvimento do site, foram utilizadas as linguagens HTML, CSS, Typescript.
Além disso, está sendo utilizado o gerenciador de pacotes npm para importar bibliotecas
como React, express, sequelize, zod, bootstrap, entre outros.

## Para rodar

O site foi feita para ser utilizado num computador isoladamente. Para isso, é recomendado
utilizar Linux ou um ambiente como o WSL. Foi utilizado o NodeJS na versão 24 durante o
desenvolvimento e, portanto, é recomendado utilizar uma versão nova dele. É possível facilmente
baixar o NodeJS pelo gerenciador de pacotes da distribuição. No Ubuntu, por exemplo:

```bash
apt install npm
```

Após isso, é necessário baixar os pacotes:

```bash
cd backend
npm i
cd ..
cd frontend
npm i frontend
```

Finalmente, para rodar a aplicação:

```bash
npm --prefix backend/ run dev & npm --prefix frontend/ run dev

// ou abra dois terminais e rode npm run dev em cada diretório separadamente
cd backend/
npm run dev

cd frontend/
npm run dev
```

Fazendo isso, o endereço localhost:5173 mostrará, num navegador, o site.
