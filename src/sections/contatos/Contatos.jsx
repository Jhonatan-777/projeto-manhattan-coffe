import { Section, ContainerTitle, ContainerIframe, ContainerAdress } from "./Contatos.style"
import { ContactInfo } from "../../components/components-contact/ContainContactInfo"
import Iframe from "../../components/components-contact/ValidationIframe"

const Contatos = () => {
  return (
    <Section id="contato">
      <ContainerTitle>
        <h2>Contatos & Endereço</h2>
      </ContainerTitle>
      <ContainerIframe>
        <Iframe source={ContactInfo.iframe} />
      </ContainerIframe>
      <ContainerAdress>
        <p>Telefone & Whatsapp: {ContactInfo.telefone}</p>
        <p>E-mail: {ContactInfo.email}</p>
        <p>Endereço: {ContactInfo.endereço}</p>
      </ContainerAdress>
    </Section>
  )
}

export default Contatos