require('dotenv').config()
const cors = require('cors')
const { application } = require('express')
const express = require('express')
const pinRoutes = require('./controllers/pinController')

const port = process.send.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/pins', pinRoutes)


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})