Projeto: Leitura de cadastros existentes, adição e retirada de contatos

A estrutura para receber as informações consta a seguir. O id é randômico.

 {
    "id": "b608e3003",
    "nome": "Ana Carolina",
    "celular": "inserir aqui número de telefone",
    "redesSociais": "inserir aqui seu nickname de redes sociais"
  }

  Rotas GET:

  "/" - Apresentação do Projeto
  "/contatos" - Apresentar todos os contatos
  "/contatos/id" - Filtrar contatos por ID

  Rotas POST
  "/contatos/cadastrar" - Cadastra novo contato

  Rotas DELETE
  "/contatos/id" - Deleta contatos por ID
