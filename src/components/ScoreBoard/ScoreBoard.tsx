import { FC } from 'react'

import styles from './styles.module.css'

type Props = {
  scores: number
  lives: number
}

/**
 * @param props Properties to display the score board
 * @returns Score board with score and number of lives/chances
 */
export const ScoreBoard: FC<Props> = (props) => {
  return (
    <div className={styles.board}>
      <div className={styles.scores}>
        <div>Score</div>
        <b>{props.scores}</b>
      </div>
      <div className={styles.lives}>
        <div>Lives</div>
        <b>{props.lives}</b>
      </div>
    </div>
  )
}
