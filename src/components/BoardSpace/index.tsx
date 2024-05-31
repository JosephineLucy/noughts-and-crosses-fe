import './styles.scss'

type BoardSpaceProps = {
  id: number
}

const BoardSpace: React.FC<BoardSpaceProps> = ({ id }) => {
  return (
    <button
      className="board-space"
      id={`board-space-${id}`}
      aria-label={`board space ${id}`}
    ></button>
  )
}

export default BoardSpace
