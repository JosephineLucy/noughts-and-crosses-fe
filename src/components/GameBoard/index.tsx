import { NUM_OF_SPACES } from '../../constants/constants'
import { BoardSpace, createSpaces } from './helper'
import './styles.scss'

const GameBoard: React.FC = () => {
  const boardSpaces: BoardSpace[] = createSpaces(NUM_OF_SPACES)

  return (
    <main className="game-board">
      <div className="game-board__spaces" aria-label="game board">
        {boardSpaces.map((space) => {
          return space.element
        })}
      </div>
    </main>
  )
}

export default GameBoard
