import './index.scss'

const GameBoard: React.FC = () => {
  return (
    <section className="game">
      <div className="game__board">
        {<button className="game__board-space"></button>}
      </div>
    </section>
  )
}

export default GameBoard
