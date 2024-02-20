import { ImArrowUp2 } from 'react-icons/im';
import { Section, Up } from './Footer.style'

const Footer = () =>
{
  return (
    <Section>
      <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
      <p>Desenvolvido por <a href="https://github.com/Jhonatan-777" className="link-j" alt="link github Jhonatan" target="_blank" rel="noreferrer">Jhonatan.</a></p>
      <Up href='#banner' aria-label="Subir ao Topo"><ImArrowUp2 /></Up>
    </Section>
  )
}

export default Footer