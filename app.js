const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
console.clear()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(PORT, () => console.log('servidor escuchando en el puerto ' + PORT))
