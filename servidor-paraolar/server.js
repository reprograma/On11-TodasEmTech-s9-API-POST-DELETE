const app = require ("./src/app")
const PORT = 3030

app.listen(PORT, ()=>{
    console.log(` Olá a tarefa da semana 9 está rodando na porta ${PORT}`)
})