import express, { application } from 'express'
import { router } from './routes/routes'
import cors from 'cors'

const api = express()

const port = process.env.PORT || 8081;

api.use(express.json(), cors(), router)

api.listen(port, () => console.log(`Roda, roda, vira, roda, roda, vem, me passaram a mão na ... ainda não ... ninguém (mas o servidor tá rodando na porta ${port})`))