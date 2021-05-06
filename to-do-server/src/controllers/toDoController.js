const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

const createTask = (req, res) => {
  const descricao = req.body.descricao
  const nome = req.body.nomeColaborador

  const novaTarefa = {
    id: Math.random().toString(32).substr(2,9),
    dataInclusao: new Date(),
    concluido: false,
    descricao: descricao,
    nomeColaborador: nome
  }
  tarefasJson.push(novaTarefa)

  fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err) {
    if(err) {
      return res.status(424).send({message: err})
    }
  })

  const deleteTask = (req, res) => {
    const idRecebido = req.params.id
    const tarefa = tarefasJson.find(i => i.id === idRecebido)
    const indice = tarefasJson.indexOf(tarefa)

    tarefasJson.splice(indice, 1)

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err) {
      if(err) {
        return res.status(424).send({message: err})
      }
    })

    res.status(200).json([{
      'mensagem': 'Tarefa deletada com sucesso',
      tarefasJson
    }])
  }

  res.status(200).send(novaTarefa)
}

module.exports = {
  createTask,
  deleteTask
}