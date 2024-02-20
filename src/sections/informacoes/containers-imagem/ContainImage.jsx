import { Container, Title } from "./ContainImage.style"

const ContainImage = (info) => {
  return (
    <Container background={info.background}>
      <div className="contain">
        <Title>{info.titulo}</Title>
      </div>
    </Container>
  )
}

export default ContainImage