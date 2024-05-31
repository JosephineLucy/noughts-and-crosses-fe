import './styles.scss'
import Footer from '../../components/Footer'
import Game from '../../components/Game'
import Header from '../../components/Header'
import { AppLabels, NUM_OF_BOARD_SPACES } from '../../constants/constants'

const Home: React.FC = () => {
  const currentYear: string = String(new Date().getFullYear())
  return (
    <section className="home">
      <Header title={AppLabels.title} />
      <main>
        <Game numOfBoardSpaces={NUM_OF_BOARD_SPACES} />
      </main>
      <Footer title={`© ${AppLabels.title} ${currentYear}`} />
    </section>
  )
}

export default Home
