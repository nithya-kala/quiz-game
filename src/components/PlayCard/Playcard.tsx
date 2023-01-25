import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import sha256 from 'crypto-js/sha256'
import { useState } from 'react'
import styles from './styles.module.css'

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
    setAnswer('')
  }

  return (
    <div className={styles.card}>
      <div className={styles.question}>{props.question}</div>
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
