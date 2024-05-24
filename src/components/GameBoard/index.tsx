import BoardSpace from '../BoardSpace'
import { createSpaceIds } from './helper'
import './styles.scss'

type GameBoardProps = {
  numOfBoardSpaces: number
}

const GameBoard: React.FC<GameBoardProps> = ({ numOfBoardSpaces }) => {
  const boardSpaceIds = createSpaceIds(numOfBoardSpaces)
  return (
    <main className="game-board" aria-label="game board">
      <div className="game-board__spaces">
        {boardSpaceIds.map((spaceId) => {
          return <BoardSpace id={spaceId} />
        })}
      </div>
    </main>
  )
}

export default GameBoard
