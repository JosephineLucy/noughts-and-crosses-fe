import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '.'

describe('Home', () => {
  test('renders Header as expected', () => {
    render(<Home />)

    const headerTitle = screen.getByRole('heading', {
      name: 'Noughts and Crosses',
    })

    expect(headerTitle).toBeInTheDocument()
  })

  //todo
  test('renders GameBoard as expected', () => {})

  test('renders Footer as expected', () => {
    render(<Home />)

    const footerTitle = screen.getByRole('heading', {
      name: 'Noughts and Crosses ©',
    })

    expect(footerTitle).toBeInTheDocument()
  })
})
