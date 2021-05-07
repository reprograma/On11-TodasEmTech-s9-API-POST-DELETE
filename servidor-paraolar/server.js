const app = require("./src/app")
const PORT = 6060

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
})