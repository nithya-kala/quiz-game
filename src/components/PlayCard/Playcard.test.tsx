import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Playcard } from './Playcard'
import { testData } from '../../testData'

const props = {
  question: testData[0].question,
  answerSha: testData[0].answerSha1,
  incrScore() {},
  decrLives() {},
}

describe('<Playcard />', () => {
  it('renders without errors', () => {
    render(<Playcard {...props} />)
  })

  it('Verify Submit button and Answer field', () => {
    render(<Playcard {...props} />)
    expect(screen.getByLabelText('Answer')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
