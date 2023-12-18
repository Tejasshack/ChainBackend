import express from "express"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT
// Your code here

const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to server with ES6")
})

app.get("/api", (req, res) => {
  res.send("This is entry point for API")
})

app.get("/api/login", (req, res) => {
  res.send("This is login API")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
