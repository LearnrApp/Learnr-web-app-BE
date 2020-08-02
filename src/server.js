import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import './config/db'


dotenv.config()

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})