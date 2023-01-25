import { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import sha256 from 'crypto-js/sha256'
import { Button } from '@mui/material'

type Props = {
  question: string
  answerSha: string
  incrScore(): void
  decrLives(): void
}

export function Playcard(props: Props) {
  const [answer, setAnswer] = useState('')
  const onSubmit = () => {
    const myAnswerSha = sha256(answer.toLowerCase().trim())
    if (myAnswerSha.toString() === props.answerSha) {
      props.incrScore()
    } else {
      props.decrLives()
    }
  }

  return (
    <div style={{ width: 600 }}>
      <div className="question">
        <label>Question: {props.question}</label>
      </div>
      <br />
      <div className="answer">
        <TextField
          label="Answer"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <br />
      <div>
        <Button variant="contained" disableElevation onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}
