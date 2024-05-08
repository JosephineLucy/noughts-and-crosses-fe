import './styles.scss'
import Footer from '../../components/Footer'
import GameBoard from '../../components/GameBoard'
import Header from '../../components/Header'

const Home: React.FC = () => {
  return (
    <section className="home">
      <Header title="Noughts and Crosses" />
      <GameBoard />
      <Footer title="Noughts and Crosses ©" />
    </section>
  )
}

export default Home
