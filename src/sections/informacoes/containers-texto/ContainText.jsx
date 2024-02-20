import { Container, Title, Texto } from "./ContainText.style"

const ContainText = (info) => {
  return (
    <Container id="info">
      <div className="contain">
        <Title>{info.titulo}</Title>
        <Texto>{info.texto}</Texto>
      </div>
    </Container>
  )
}

export default ContainText