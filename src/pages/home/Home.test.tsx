import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '.'

describe('Home', () => {
  test('renders Header', () => {
    render(<Home />)

    const headerTitle = screen.getByRole('heading', {
      name: 'Naughty Pups and Cross Kitties',
    })

    expect(headerTitle).toBeInTheDocument()
  })

  test('renders GameBoard', () => {
    render(<Home />)

    const gameBoard = screen.getByRole('main', { name: 'game-board' })

    expect(gameBoard).toBeInTheDocument()
  })

  test('renders Footer', () => {
    render(<Home />)

    const footerTitle = screen.getByLabelText('app footer')
    expect(footerTitle).toBeInTheDocument()
  })
})
