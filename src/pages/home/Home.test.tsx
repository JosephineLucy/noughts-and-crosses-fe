import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '.'

describe('Home', () => {
  test('renders Header', () => {
    render(<Home />)

    const headerTitle = screen.getByRole('heading', {
      name: 'Noughts and Crosses',
    })
    expect(headerTitle).toBeInTheDocument()
  })

  test('renders Game', () => {
    render(<Home />)

    const game = screen.getByLabelText('game')

    expect(game).toBeInTheDocument()
  })

  test('renders Footer', () => {
    render(<Home />)

    const footerTitle = screen.getByRole('contentinfo')
    expect(footerTitle).toBeInTheDocument()
  })
})
