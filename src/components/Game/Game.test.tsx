import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Game from '.'

describe('GameBoard', () => {
  test('renders correct number of board spaces', () => {
    render(<Game numOfBoardSpaces={6} />)

    const boardSpaces: HTMLButtonElement[] = screen.getAllByRole('button', {
      name: /board space \d+/,
    })

    expect(boardSpaces.length).toBe(6)
  })
})
