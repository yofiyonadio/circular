import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import history from 'connect-history-api-fallback'

import { Routes, Database, Logger, Color, Oauth2 } from '.'

config()

const app = express()
const port = process.env.APP_PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}))

Oauth2.passport(app)
Routes.route(app)

const staticPath = express.static(__dirname + '/public')
app.use(staticPath)
app.use(history({
  disableDotRule: true,
  verbose: true,
}))
app.use(staticPath)




app.listen(port, async () => {
  await Database.init()
    .then(() => {
      Logger.log('---------------- Circular test server started on: -----------------', Color.pink)
      Logger.log('---------------------- http://localhost:' + port + ' ----------------------', Color.green)
    })

})