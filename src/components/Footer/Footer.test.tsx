import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  test('renders expected footer title', () => {
    render(<Footer />)

    const footerTitle = screen.getByText('Noughty Pups and Crxss Kitties ©')

    expect(footerTitle).toBeInTheDocument()
  })
})
