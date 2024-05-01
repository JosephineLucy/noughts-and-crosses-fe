import './styles.scss'
import Footer from '../../components/Footer'
import GameBoard from '../../components/GameBoard'
import Header from '../../components/Header'

const Home: React.FC = () => {
  return (
    <section className="home">
      <Header />
      <GameBoard />
      <Footer />
    </section>
  )
}

export default Home
