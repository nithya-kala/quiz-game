import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ScoreBoard } from './ScoreBoard'
import { testData } from '../../testData'

const props = {
  question: testData[0].question,
  answerSha: testData[0].answerSha1,
  incrScore() {},
  decrLives() {},
}

describe('<ScoreBoard />', () => {
  it('renders without errors', () => {
    render(<ScoreBoard scores={0} lives={3} />)
  })

  it('Verify Score and Lives displayed', () => {
    render(<ScoreBoard scores={0} lives={3} />)
    expect(screen.getByText('Score')).toBeInTheDocument()
    expect(screen.getByText('Lives')).toBeInTheDocument()
  })
})
