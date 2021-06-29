const app = require("./src/app") // aqui ta importando do app.js
const PORT = 3030

app.listen(PORT, ()=>{
    console.log(`Bebê o APP ta rodando na porta ${PORT}`)
})