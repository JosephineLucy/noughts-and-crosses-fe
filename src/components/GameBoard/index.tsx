import BoardSpace from '../BoardSpace'
import { createSpaceIds } from './helper'
import './styles.scss'

const GameBoard: React.FC = () => {
  const boardSpaceIds = createSpaceIds()
  return (
    <main className="game-board" aria-label="game-board">
      <div className="game-board__spaces">
        {boardSpaceIds.map((spaceId) => {
          return <BoardSpace id={spaceId} />
        })}
      </div>
    </main>
  )
}

export default GameBoard
