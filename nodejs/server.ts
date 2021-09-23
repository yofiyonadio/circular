import express from 'express'
import { config } from 'dotenv'

import { Routes, Database, Logger, Color, Oauth2 } from '.'

config()

const app = express()
const port = process.env.APP_PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

Oauth2.passport(app)
Routes.route(app)

app.listen(port, async () => {
  await Database.init()
    .then(() => {
      Logger.log('---------------- Circular test server started on: -----------------', Color.pink)
      Logger.log('---------------------- http://localhost:' + port + ' ----------------------', Color.green)
    })

})