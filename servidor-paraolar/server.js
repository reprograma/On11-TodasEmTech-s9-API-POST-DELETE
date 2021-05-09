const app = require("./src/app")
const PORT = 3535                   //tudo maiúsculo pois padrão de variável do ambiente

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})