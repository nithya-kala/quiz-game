import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import sha1 from 'crypto-js/sha1'
import { MouseEvent, useState } from 'react'
import styles from './styles.module.css'

type Props = {
  question: string
  answerSha: string
  incrScore(): void
  decrLives(): void
}

export function Playcard(props: Props) {
  const [answer, setAnswer] = useState('')
  const onSubmit = (e: MouseEvent<any, any>) => {
    e.preventDefault()
    const ansSha = sha1(answer.toLowerCase().trim()).toString()
    console.log(ansSha, props)

    if (ansSha === props.answerSha) props.incrScore()
    else props.decrLives()

    setAnswer('')
  }

  return (
    <form className={styles.card}>
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
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
