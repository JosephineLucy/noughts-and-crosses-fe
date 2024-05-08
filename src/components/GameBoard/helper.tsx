import { ReactElement } from 'react'

export type BoardSpace = {
  id: number
  element: ReactElement
  icon: string
}

export function createSpaces(numOfSpaces: number) {
  const boardSpaces: BoardSpace[] = []

  for (let i = 0; i < numOfSpaces; i++) {
    const boardSpace: BoardSpace = {
      id: i,
      element: (
        <button
          className="game-board__space"
          key={i}
          aria-label="board space"
        ></button>
      ),
      icon: '',
    }
    boardSpaces.push(boardSpace)
  }
  return boardSpaces
}
