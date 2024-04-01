import { ReactElement } from 'react'

type GameSpace = {
  id: number
  element: ReactElement
  icon: string
}

export function createSpaces(numOfSpaces: number) {
  const gameSpaces = []

  for (let i = 0; i < numOfSpaces; i++) {
    const gameSpace: GameSpace = {
      id: i,
      element: <button className="game__board-space"></button>,
      icon: '',
    }
    gameSpaces.push(gameSpace)
  }
  return gameSpaces
}
