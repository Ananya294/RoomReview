const express = require('express')
const connectToDatabase = require('./db');
const app = express()

connectToDatabase();

app.use(express.json())

app.use('/api/auth', require("./Routes/auth")); //login routes

const port = 5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

