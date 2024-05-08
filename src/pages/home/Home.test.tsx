import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '.'

describe('Home', () => {
  test('renders Header', () => {
    render(<Home />)

    const headerTitle = screen.getByRole('heading', {
      name: 'Noughts and Crosses',
    })

    screen.debug()
    expect(headerTitle).toBeInTheDocument()
  })

  test('renders GameBoard', () => {
    render(<Home />)

    const gameBoard = screen.getByRole('main')

    expect(gameBoard).toBeInTheDocument()
  })

  test('renders Footer', () => {
    render(<Home />)

    const footerTitle = screen.getByRole('contentinfo')
    expect(footerTitle).toBeInTheDocument()
  })
})
