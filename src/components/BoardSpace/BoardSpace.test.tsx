import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BoardSpace from '.'

describe('BoardSpace', () => {
  test('space initially renders as empty square', () => {
    render(<BoardSpace id={1} />)

    const image = screen.queryByRole('img')

    expect(image).not.toBeInTheDocument()
  })
})
