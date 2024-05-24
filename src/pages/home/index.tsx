import './styles.scss'
import Footer from '../../components/Footer'
import GameBoard from '../../components/GameBoard'
import Header from '../../components/Header'
import { AppLabels, NUM_OF_BOARD_SPACES } from '../../constants/constants'

const Home: React.FC = () => {
  return (
    <section className="home">
      <Header title={AppLabels.title} />
      <GameBoard numOfBoardSpaces={NUM_OF_BOARD_SPACES} />
      <Footer title={`© ${AppLabels.title}`} />
    </section>
  )
}

export default Home
