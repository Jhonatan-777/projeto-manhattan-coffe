import Logo from "../../assets/images/logo.png"

import { Section, ContainLogo, ContainNav } from "./Topo.style"

const Topo = () => {
  return (
    <Section>
      <div className="container">
        <ContainLogo>
          <img src={Logo} alt="logo" />
        </ContainLogo>
        
        <ContainNav>
          <a href="#info" aria-label="Informações">informações</a>
          
          <a href="#contato" aria-label="Contatos">contatos</a>
          
          <a href="#horario" aria-label="Horários">horários</a>
        </ContainNav>
      </div>
    </Section>
  )
}

export default Topo