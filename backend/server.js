const PORT = 8080
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("Hello World!");
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))