const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const contacts = require("./routes/contactsRoutes")

app.use("/", index)
app.use("/contacts", contacts)

module.exports = app