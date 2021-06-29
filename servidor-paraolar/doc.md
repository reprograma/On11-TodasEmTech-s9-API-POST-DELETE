# *********************************************
# DOCUMENTAÃO DA API CONTATINHOS  VERSAO 1.0.0
# metodo HTTP
# ********************************************

# ENDERECO RAIZ
=> urlbase = 'localhost/'

# ROTAS E METODOS


# GET

1.   "/"    - apresentacao geral da API
  
  
2.  "/contatos/{id}"  - retorna um contato por id
    >>uso: é requirido um id por path parametros

  
# POST

1. "/contatos/cadastrar"   -  insere um novo contato 
    >>uso:   é requirido um query parametros
    >> pelo body  
    >> JSON  UTF-8 
#    JSON - formato {
#            'nome' : 'string',
#            'celular' : '0000000'
#            'redesSociais' : '@rede social'
#    }


# DELETE

1. "/contatos/{id}"    deleta um contato por id
    >> é requirido um id por path parametros





