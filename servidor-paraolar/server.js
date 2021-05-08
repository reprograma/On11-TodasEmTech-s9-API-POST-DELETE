const app = require("./src/app")
const PORT = 4040

app.listen(PORT, ()=>{
console.log(`Usando template string para mostrar um servidor elegante na porta ${PORT}`)
})