const app = require("./src/app")
const PORT = 3030 

app.listen(PORT, ()=> {//app.listen alem de receber a arrow function, está recebendo a variavel port
    console.log(`Baby, o app ta rodando na porta ${PORT}`)//usando a crase, vira um template string, com isso se usa o cifrao
})