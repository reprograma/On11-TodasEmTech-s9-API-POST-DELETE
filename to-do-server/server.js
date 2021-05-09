const app = require ("./src/app")
const PORT = 3030

app.listen(PORT,(request,response)=>{
    console.log(`Bebê o APP está rodando na porta ${PORT}`)
})