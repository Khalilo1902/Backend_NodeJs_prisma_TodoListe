import express from "express"
import { createTask, deleteTask, getAllTask, updateTask } from "../controller/taskController.js"




const router = express.Router()

router.get("/api/task/display",getAllTask)
router.post("/api/task/create",createTask)
router.delete("/api/task/delete/:id",deleteTask)
router.put("/api/task/update/:id",updateTask)



export default router