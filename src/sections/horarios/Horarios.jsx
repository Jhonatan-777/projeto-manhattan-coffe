import { Line, Section } from "./Horarios.style"

const Horarios = () => {
  return (
    <Section id="horario">
      <h2>Horários de funcionamento</h2>
      <ul>
        <Line>
          <h3>Segunda</h3>
          <span></span>
          <p>Fechado</p>
        </Line>
        <Line>
          <h3>Terça</h3>
          <span></span>
          <p>09:00 - 22:00</p>
        </Line>
        <Line>
          <h3>Quarta</h3>
          <span></span>
          <p>09:00 - 22:00</p>
        </Line>
        <Line>
          <h3>Quinta</h3>
          <span></span>
          <p>09:00 - 22:00</p>
        </Line>
        <Line>
          <h3>Sexta</h3>
          <span></span>
          <p>09:00 - 22:00</p>
        </Line>
        <Line>
          <h3>Sábado</h3>
          <span></span>
          <p>12:00 - 22:00</p>
        </Line>
        <Line>
          <h3>Domingo</h3>
          <span></span>
          <p>12:00 - 22:00</p>
        </Line>
      </ul>
    </Section>
  )
}

export default Horarios