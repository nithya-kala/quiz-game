import { useCallback, useEffect, useState } from 'react'
import { Playcard } from './components/Playcard'
import './App.css'

const API_URL = 'https://eok9ha49itquif.m.pipedream.net'

const fetchQuestions = async () => {
  const res = await fetch(API_URL)
  const json = await res.json()
  const map = new Map<string, string>()

  for (const { question, answerSha1 } of json.questions) {
    map.set(question, answerSha1)
  }

  return map
}

function App() {
  const [questions, setQuestions] = useState(() => new Map<string, string>())
  const [seenQuestions, setseenQuestions] = useState(() => new Set())

  const [scores, setScores] = useState(0)
  const [lives, setLives] = useState(3)

  const incrScore = useCallback(() => {
    setScores(scores + 1)
  }, [])

  const decrLives = useCallback(() => {
    setLives(lives - 1)
  }, [])

  useEffect(() => {
    fetchQuestions()
      .then((map) => {
        const qmap = new Map([...questions.entries(), ...map.entries()])
        setQuestions(qmap)
      })
      .catch(console.error)
  }, [])

  if (questions.size === 0) return <span>Loading...</span>

  const [question, answerSha] = [...questions.entries()][0]

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <Playcard {...{ question, answerSha, incrScore, decrLives }} />
    </div>
  )
}

export default App
