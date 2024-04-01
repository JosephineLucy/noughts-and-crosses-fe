import Footer from '../Footer'
import GameBoard from '../GameBoard'
import Header from '../Header'
import './index.css'

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
