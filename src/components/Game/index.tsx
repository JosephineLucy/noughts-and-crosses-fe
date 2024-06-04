import BoardSpace from '../BoardSpace'
import { createSpaceIds } from './helper'
import './styles.scss'

type GameProps = {
  numOfBoardSpaces: number
}

const Game: React.FC<GameProps> = ({ numOfBoardSpaces }) => {
  const boardSpaceIds = createSpaceIds(numOfBoardSpaces)
  return (
    <div className="game" aria-label="game">
      <div className="game__board" aria-label="game board">
        {boardSpaceIds.map((spaceId) => {
          return <BoardSpace id={spaceId} />
        })}
      </div>
    </div>
  )
}

export default Game
