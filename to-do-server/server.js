const app = require("./src/app")
const PORT = 3030 //ou porta do servidor externo

app.listen(PORT, ()=>{
    console.log(`inhaê o APP ta rodando na porta ${PORT}`)
})