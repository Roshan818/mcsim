const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const text2 = 'Participants!'
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})