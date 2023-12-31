const express = require('express')
const app = express()
const userRoute = require("./src/routes/user.route")
const port = 3500

app.use('/hello', userRoute)


app.listen(port)