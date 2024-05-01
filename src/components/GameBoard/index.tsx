import { NUM_OF_SPACES } from '../../constants/gameboard'
import { BoardSpace, createSpaces } from './helper'
import './styles.scss'

const GameBoard: React.FC = () => {
  const boardSpaces: BoardSpace[] = createSpaces(NUM_OF_SPACES)

  return (
    <main className="game-board" aria-label="game-board">
      <div className="game-board__spaces">
        {boardSpaces.map((space) => {
          return space.element
        })}
      </div>
    </main>
  )
}

export default GameBoard
