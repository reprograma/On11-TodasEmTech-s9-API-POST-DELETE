const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())
const index = require("./routes/index")
const contacts = require("./routes/paraOLarRoutes")


app.use("/", index)
app.use("/contacts", contacts)


module.exports = app
