import express from 'express'
import { RouterIndex } from './routes/index.routes'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(RouterIndex)
app.use(cors({
  origin: '*'
}))
app.listen(port, () => {
  console.log('listining on port ' + port)
})

export default app
