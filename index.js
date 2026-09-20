
const express = require('express')

const app = express()
app.use(express.json())

app.post('/webhook', (req, res) => {
  const apiKey = req.headers['x-api-key']

  if (!apiKey) {
    return res.status(400).json({
      message: 'x-api-key is missing'
    })
  }

  if (apiKey !== '123456') {
    console.log("API KEY IS MISSING......!!!!!!")
    return res.status(401).json({
      message: 'Invalid x-api-key'
    })
  }

  // Log everything received
  console.log('Webhook received')
  console.log('Method:', req.method)
  console.log('URL:', req.originalUrl)
  console.log('Headers:', req.headers)
  console.log('Body:', req.body)

  return res.status(200).json({
    message: 'Webhook received',
    received: req.body
  })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})