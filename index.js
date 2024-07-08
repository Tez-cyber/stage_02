import express from "express"
import { config } from "./config/config.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"


export const app = express()

//==============Middlewares
app.use(express.json())
app.use(morgan("common"))
app.use(cookieParser())

//==============Routes

const PORT = config.server.port
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
