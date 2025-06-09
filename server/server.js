import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { clerkWebhook } from './controllers/webhook.js'






// initialisation express 
export const app = express()

app.use(express.json())

await connectDB()

// Middlewars 
app.use(cors())


app.get('/', (req, res) => res.send("API Working") )
app.post('/clerk', express.json(), clerkWebhook)


const PORT  = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
