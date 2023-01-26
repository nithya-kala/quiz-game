import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('<App />', () => {
  it('renders without errors', () => {
    render(<App />)
  })
})

describe('<verify the title text>', () => {
  it('has correct title text', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('Quiz Game')
  })
})
