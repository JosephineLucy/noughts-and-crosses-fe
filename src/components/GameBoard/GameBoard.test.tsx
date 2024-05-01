import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GameBoard from '.'
import { NUM_OF_SPACES } from '../../constants/gameboard'

describe('GameBoard', () => {
  test('renders correct number of board spaces', () => {
    render(<GameBoard />)

    const boardSpaces: HTMLButtonElement[] = screen.getAllByRole('button', {
      name: 'board-space',
    })

    expect(boardSpaces.length).toBe(NUM_OF_SPACES)
  })
})
