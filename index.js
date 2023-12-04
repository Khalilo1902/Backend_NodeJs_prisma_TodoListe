import express from "express"
import taskRouter from "./router/taskRouter.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(taskRouter)

const PORT = 4008
app.listen(PORT,console.log(`Server is running an PORT ${PORT}`))