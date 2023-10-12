import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import * as dotenv from 'dotenv';
import initWebRoute from './route/web.js'
import initAPIRoute from './route/api.js';


const app = express()
dotenv.config()
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set up view engine
configViewEngine(app)

//set up routes
initWebRoute(app)

//init api
initAPIRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})