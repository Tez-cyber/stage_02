import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 8800 
export const config = {
    server: {
        port: PORT
    }
}