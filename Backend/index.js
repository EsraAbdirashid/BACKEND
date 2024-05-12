import express from 'express'
const app = express();
const port = 7000
import cors from 'cors';

app.use(cors())

app.use(express.json())
import taskRoute from './routes/taskRoute.js'
app.use ('/', taskRoute)
