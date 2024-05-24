type BoardSpaceProps = {
  id: number
}

const BoardSpace: React.FC<BoardSpaceProps> = ({ id }) => {
  return (
    <button
      className="game-board__space"
      id={`board-space-${id}`}
      aria-label={`board space ${id}`}
    ></button>
  )
}

export default BoardSpace
