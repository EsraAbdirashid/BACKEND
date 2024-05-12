import express from 'express'
const router = express.Router()
import {newTask,getAllTasks} from '../controllers/taskControllers.js'







// post
router.post ('/new', newTask)

// get
router.get ('/',getAllTasks)


export default router;