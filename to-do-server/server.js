const app = require("./src/app");
const PORT = 3030 //Variavel de ambiente, faz funcionar

app.listen(PORT, ()=>{
    console.log(`O APP está rodando na porta ${PORT}`)
})