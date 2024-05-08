import './styles.scss'
import Footer from '../../components/Footer'
import GameBoard from '../../components/GameBoard'
import Header from '../../components/Header'
import { AppLabels } from '../../constants/constants'

const Home: React.FC = () => {
  return (
    <section className="home">
      <Header title={AppLabels.title} />
      <GameBoard />
      <Footer title={`© ${AppLabels.title}`} />
    </section>
  )
}

export default Home
