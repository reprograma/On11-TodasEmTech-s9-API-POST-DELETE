# On11-TodasEmTech-s9-API-POST-DELETE
Métodos: POST e DELETE
Professora: Analu
Aluna: Nayara Almeida

DOCUMENTAÇÃO:

[OBTER]"/"
Retorna a apresentação do projeto

[GET] "/ contatos"
Retorna todos os contatos cadastrados

[GET] "/ contatos /: id"
Retorna um contato por ID

[DELETE] "/ contatos /: id"
Deleta um contato por ID

[POST] "/ contatos / cadastrar"
Cadastra um contato na lista

DEVERÁ ser enviado pelo corpo com o formado abaixo:

{
    "id": "STRING RANDOM AUTOMATICO",
    "nome": "STRING",
    "celular": "STRING",
    "redesSociais": "STRING"
}