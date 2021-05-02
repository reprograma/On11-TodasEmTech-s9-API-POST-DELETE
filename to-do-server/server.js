const app = require("./src/app");
const PORT = 3030;

app.listen(PORT, ()=>{
    console.log(`App rodando na porta ${PORT}...`);
})