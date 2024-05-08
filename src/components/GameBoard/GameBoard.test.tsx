import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GameBoard from '.'
import { NUM_OF_BOARD_SPACES } from '../../constants/constants'

describe('GameBoard', () => {
  test('renders correct number of board spaces', () => {
    render(<GameBoard />)

    const boardSpaces: HTMLButtonElement[] = screen.getAllByRole('button', {
      name: /board space \d/,
    })

    expect(boardSpaces.length).toBe(NUM_OF_BOARD_SPACES)
  })
})
