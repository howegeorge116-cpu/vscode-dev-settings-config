import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './api/routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('text').send(`VSCode Setup`)
})

app.get('/settings', router);

export default app
