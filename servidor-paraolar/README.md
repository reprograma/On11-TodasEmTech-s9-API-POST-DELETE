Documentação

. Quero uma rota de apresentação do projeto
. /contatos deve retornar todas as tarefas
. Devo conseguir filtrar por id

. Devo conseguir deletar contatos
. Devo conseguir cadastrar novo contato
. id tem que ser randomico

[GET]"/"
retornar a apresentacao do projeto

[GET]"/contatos"
retornar todas os contatos

[GET]"/contatos/:id"
retorna uma tarefa por id

[DELETE]"contatos/:id"
deleta um contato

[POST]"/contatos/cadastrar"
Deverá serenviado pelo Body
JSON
{
      "id": "STRING RANDOMICO",
      "nome": "STRING - NECESSARIO",
      "celular": "STRING - NECESSARIO",
      "redesSociais": "STRING - NECESSARIO"
}

1. dentro da pasta do servidor cie o arquivo server.js
2. npm init -y
3. instale dependencias npm i express
4. instale dependencias npm i nodemon
5. crie .gitignore
6. coloca o node_modules no .gitignore
7. coloca o nodemon no comando start dentro do package.json
8. cria o src
9. destro de src cria o arquivo app.js e as pastas models, controllers e routes
10. dentro de cada uma das pastas (models, controller e routes) cria os respectivos arquivos




