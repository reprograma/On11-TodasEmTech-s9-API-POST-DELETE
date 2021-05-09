# Documentação da API

## [GET] "/"

Retorna a apresentação do projeto.

## [GET] "/contatos"

Retorna todos os contatos.

## [GET] "/contatos/:id"

Retorna um contato por id.

## [DELETE] "/contatos/:id"

Deleta um contato por id.

## [POST] "/contatos/cadastrar"

Cadastra um novo contato.

```json
// Deverá ser enviado no BODY
{
	"id": "string - randomico",
    "dataInclusao": "string - automatico",
	"nome": "string - necessario",
	"celular": "string - necessario",
	"redesSociais": "string - necessario"
}
```

