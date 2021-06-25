![Podcastr preview](.github/wallpaper.png)

<h3 align="center">
    Trilha NodeJS <img src="./.github/nodejs.png" height="20" alt="logo react">
</h3>

<p align="center">
        <img alt="node" src="https://img.shields.io/badge/Node.JS-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
        <img alt="typescript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
        <img alt="express" src="https://img.shields.io/badge/Express-32264D?style=flat-square&logo=express&logoColor=white" />
                <img alt="sqlite" src="https://img.shields.io/badge/-SQLite-044a64?style=flat-square&logo=sqlite" />
        <img alt="Valoriza" src="https://img.shields.io/badge/Valoriza-NLW 6.0-04d361?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==&labelColor=8257e5" />
</p>

## 💌 Projeto: Valoriza

Uma API Simples para fazer envio de elogios a outros usuários por meio de tags.

## 🚀 Tecnologias

Este projeto foi construído utilizando:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeORM](https://typeorm.io/#/)

## 🚴‍♂️ Rodando Projeto

- Crie um arquivo **db.sqlite** na pasta _src/database_

- Inicie o servidor rodando `yarn dev`

## 🔀 Rotas da API

- **POST**
  - `/tags` -> Criar nova tag
  - `/users` -> Criar novo usuário
  - `/login` -> Auntenticar usuário
  - `/compliments` -> Cadastrar elogio (administrador)
- **GET**
  - `/tags` -> Listas as tags cadastradas
  - `/users/compliments/sent/:id` -> Listar elogios enviados
  - `/users/compliments/sent/:id` -> Listar elogios recebidos

## 📢 Contribuição

Está aplicação foi construida no evento NLW#6 da Rocketseat, que disponibilizou video aulas do projeto **Valoriza**.

Feito com 💜 by Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/YxU7fJT)

---

Feito com 💜 por [Andre Sampaio](https://github.com/apsampaio) <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">
