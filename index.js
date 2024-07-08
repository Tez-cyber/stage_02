import express from "express"

export const app = express()

//==============Middlewares
app.use(express.json())

const PORT = process.env.SERVER_PORT || 8800
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
