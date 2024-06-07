import './styles.scss'

type FooterProps = {
  title: string
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="footer">
      <p className="footer__title">{title}</p>
    </footer>
  )
}

export default Footer
