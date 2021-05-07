# On11-TodasEmTech-s9-API-POST-DELETE
DOCUMENTAÇÃO:

[OBTER]"/"
Retorna a apresentação do prOjeto

[GET] "/ contatos"
Retorna todos os contatinhos cadastrados

[GET] "/ contatos /: id"
Retorna um contatinho por ID

[DELETE] "/ contatos /: id"
Deleta um contatinho por ID

[POST] "/ contatos / cadastrar"
Cadastra um contatinho na lista

DEVERÁ ser enviado pelo corpo com o formado abaixo:

{
    "id": "STRING RANDOM AUTOMATICO",
    "nome": "STRING",
    "celular": "STRING",
    "redesSociais": "STRING"
}