import express from 'express'
import { config } from 'dotenv'

import { Logger, Color } from '.'

config()
const app = express()
const port = process.env.APP_PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
  Logger.log('---------------- Circular test server started on: -----------------', Color.pink)
  Logger.log('---------------------- http://localhost:' + port + ' ----------------------', Color.green)
})