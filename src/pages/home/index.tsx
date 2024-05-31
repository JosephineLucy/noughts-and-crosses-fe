import './styles.scss'
import Footer from '../../components/Footer'
import GameBoard from '../../components/GameBoard'
import Header from '../../components/Header'
import { AppLabels, NUM_OF_BOARD_SPACES } from '../../constants/constants'

const Home: React.FC = () => {
  const currentYear: string = String(new Date().getFullYear())
  return (
    <section className="home">
      <Header title={AppLabels.title} />
      <main>
        <GameBoard numOfBoardSpaces={NUM_OF_BOARD_SPACES} />
      </main>
      <Footer title={`© ${AppLabels.title} ${currentYear}`} />
    </section>
  )
}

export default Home
