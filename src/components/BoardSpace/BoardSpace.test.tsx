import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import BoardSpace from '.'

describe('BoardSpace', () => {
  test('space initially renders as empty square', () => {
    render(<BoardSpace id={1} />)

    const image = screen.queryByRole('img')

    expect(image).not.toBeInTheDocument()
  })

  test('space renders icon on first click', () => {
    render(<BoardSpace id={2} />)

    const boardSpace = screen.getByRole('button', { name: 'board-space-2' })

    fireEvent.click(boardSpace)

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
  })
})
