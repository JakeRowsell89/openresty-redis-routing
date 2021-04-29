const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is ' + process.env.APP_NAME)
})

app.listen(3000)