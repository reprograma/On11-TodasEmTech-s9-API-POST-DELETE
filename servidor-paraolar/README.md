### Contatatinhos

- Quero uma rota de apresentação do projeto
- /contatos deve retornar todas as tarefas
- Devo conseguir filtrar por id
- Devo conseguir deletar contatos
- Devo conseguir cadastrar novo contato
- id tem que ser randomico

[GET]"/"
- retorna a apresentação de todo o projeto

[GET]"/contatos"
- retorna todos os contatos

[GET]"/contatos/:id"
- retorna um contato por id

[DELETE]"/contatos/:id"
- deleta um contato

[POST]"/contatos/cadastrar"

{
    "id": "STRING RANDOMICO",
    "nome": "STRING",
    "celular": "STRING",
    "redesSociais": "STRING"
}