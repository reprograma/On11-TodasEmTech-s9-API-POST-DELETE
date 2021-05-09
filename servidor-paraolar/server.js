const app = require("./src/app")
const PORT = 4051

app.listen(PORT, (request, response) => {
    console.log(`Servidor rodando na porta ${PORT}`)
})