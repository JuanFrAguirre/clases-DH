const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
console.clear()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './views/contact.html'))
})

app.listen(PORT, () => {
  console.log('servidor escuchando en el puerto ' + PORT)
})
