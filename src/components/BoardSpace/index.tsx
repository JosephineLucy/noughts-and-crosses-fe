import { useState } from 'react'

type BoardSpaceProps = {
  id: number
}

const BoardSpace: React.FC<BoardSpaceProps> = ({ id }) => {
  const [spaceIcon, setSpaceIcon] = useState('')

  console.log(spaceIcon, 'spaceIcon')

  return (
    <button
      className="game-board__space"
      id={`board-space-${id}`}
      aria-label="board-space"
      onClick={() => setSpaceIcon('blue')}
    ></button>
  )
}

export default BoardSpace
