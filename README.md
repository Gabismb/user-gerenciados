<h1> Gerenciamento de usuários </h1>

## Indice
- [sobre](#-Sobre)
- [Tecnologias ultilizadas](#tecnologias-ultilizadas)
- [Métodos usados na API](#métodos-usados-na-api)
- [Como usar a API](-#Como-usar-a-API)


## Sobre

O projeto tem como função principal fazer o gerenciamento de usuários. Sendo assim é possível o user realizar algumas ações como: *Criar usuário, **Listar todos os usuários, **listar usuário específico, **deletar* e também fazer a *atualização de dados* 

---
## Tecnologias ultilizadas

O projeto ultilizou as seguintes tecnologias

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Node-js](https://tecnoblog.net/responde/o-que-e-node-js-guia-para-iniciantes/)
- [Swagger](https://gr1d.io/2022/04/15/swagger/)
- [insomnia](https://lucassr.medium.com/insomnia-um-poderoso-testador-de-rotas-3d77d2cd8e89)

---
## Métodos usados na API
Usado para criar usuários.
javaScript
app.post("/users", (req, res) => { function })

Usado para listar todos os usuários.
```javaScript
app.get("/users", (req, res){ function })
```

Usado para listar um usuário expecífico passado por meio do id passado pelos parametros.
```javaScript
app.get("/users/:id", (req, res) { function })
```

Usado para deletar algum usuário criado.
```javaScript
app.delete("/users/:id", userArraryExists, (req, res) { function })
```

Usado para atualizar dados de algum usuário.
```javaScript
app.put("/user/:id", userExists, (req, res) { function })
```

---
## Como usar a API
A API será usada da seguinte forma:
```bash
 # clonar repositorio 
 $ git clone https://github.com/Gabismb/desafio-3bi.git

# Entrar no diretorio
$ cd desafio-3bi.git

# Instalar as dependencias
$ npm install 

# iniciar projeto 
$ npm start
```
---