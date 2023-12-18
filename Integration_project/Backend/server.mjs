import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 2,
      joke: "What do you call fake spaghetti?",
      punchline: "An impasta!",
    },
    {
      id: 3,
      joke: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },
    {
      id: 4,
      joke: "How do you organize a space party?",
      punchline: "You planet!",
    },
    {
      id: 5,
      joke: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
  ]
  res.send(jokes)
})
