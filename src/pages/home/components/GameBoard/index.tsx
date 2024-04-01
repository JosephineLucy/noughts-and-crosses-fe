import { NUM_OF_SPACES } from '../../../../constants/gameboard'
import { GameSpace, createSpaces } from './helper'
import './styles.scss'

const GameBoard: React.FC = () => {
  const gameSpaces: GameSpace[] = createSpaces(NUM_OF_SPACES)

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
