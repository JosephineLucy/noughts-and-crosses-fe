import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  test('renders title prop as passed in', () => {
    const title = 'test title'
    render(<Footer title={title} />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent(title)
  })
})
