import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [joke, setjokes] = useState([])

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const fetchJokes = () => {
    return joke.map((joke) => (
      <div key={joke.id}>
        <h3>{joke.joke}</h3>
        <p>{joke.punchline}</p>
      </div>
    ))
  }

  return (
    <>
      <h1>Tejaswi and fullStack</h1>
      <p>JOKES {joke.length}</p>
      <button>{fetchJokes()}</button>
    </>
  )
}
export default App
