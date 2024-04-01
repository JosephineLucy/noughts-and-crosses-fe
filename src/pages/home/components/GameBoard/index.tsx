import { numOfSpaces } from '../../../../constants/gameboard'
import { GameSpace, createSpaces } from './helper'
import './styles.scss'

const GameBoard: React.FC = () => {
  const gameSpaces: GameSpace[] = createSpaces(numOfSpaces)

  return (
    <main className="game">
      <div className="game__board">
        {gameSpaces.map((space) => {
          return space.element
        })}
      </div>
    </main>
  )
}

export default GameBoard
