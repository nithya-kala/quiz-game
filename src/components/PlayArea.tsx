import { Button } from '@mui/material'
import { useEffect, useState, useCallback } from 'react'
import { QuestionBank } from '../QuestionBank'
import { Playcard } from './PlayCard/Playcard'
import { ScoreBoard } from './ScoreBoard/ScoreBoard'

const API_URL = 'https://eok9ha49itquif.m.pipedream.net'

type QAPair = [string, string]

const qBank = new QuestionBank(API_URL)

export function PlayArea() {
  const [qaPair, setQaPair] = useState<QAPair>()
  const [scores, setScores] = useState(0)
  const [lives, setLives] = useState(3)

  useEffect(() => {
    qBank.next().then(setQaPair)
  }, [scores, lives])

  const incrScore = useCallback(() => {
    setScores((val) => val + 1)
  }, [])

  const decrLives = useCallback(() => {
    setLives((val) => val - 1)
  }, [])

  const restart = useCallback(() => {
    qBank.reset()
    setLives(3)
    setScores(0)
    setQaPair(undefined)
  }, [])

  if (!qaPair) {
    return (
      <div>
        <h1>Quiz Game</h1>
        <ScoreBoard scores={scores} lives={lives} />
        <span>Fetching questions...</span>
      </div>
    )
  }

  if (lives === 0) {
    return (
      <div>
        <h1>Quiz Game</h1>
        <div>
          Final Score <b>{scores}</b>
        </div>
        <br />
        <Button variant="contained" onClick={restart}>
          Play again
        </Button>
      </div>
    )
  }

  const [question, answerSha] = qaPair

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <ScoreBoard scores={scores} lives={lives} />
      <Playcard {...{ question, answerSha, incrScore, decrLives }} />
    </div>
  )
}
