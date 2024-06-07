import Footer from '../../components/Footer'
import Game from '../../components/Game'
import Header from '../../components/Header'
import { AppLabels, NUM_OF_BOARD_SPACES } from '../../constants/constants'

const Home: React.FC = () => {
  const currentYear: number = new Date().getFullYear()
  return (
    <>
      <Header title={AppLabels.title} />
      <main>
        <Game numOfBoardSpaces={NUM_OF_BOARD_SPACES} />
      </main>
      <Footer title={`© ${AppLabels.title} ${currentYear}`} />
    </>
  )
}

export default Home
