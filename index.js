import express from "express"
import taskRouter from "./router/taskRouter.js"


const app = express()

app.use(express.json())

app.use(taskRouter)

const PORT = 4008
app.listen(PORT,console.log(`Server is running an PORT ${PORT}`))