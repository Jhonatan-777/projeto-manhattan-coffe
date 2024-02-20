import Cafeteria from "../../assets/images/parallax-imagem4.png"
import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  background-image: url(${Cafeteria});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContainerTitle = styled.div`
  width: 500px;
  text-align: center;
  padding: 10px;
  background-color: ${props => props.theme.marron};
  
  @media screen and (max-width: 768px) {
      width: 85%;
      min-width: 300px;
    }
  
  h2{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.oswald};
    letter-spacing: 1px;
    font-weight: 400;
    font-size: ${props => props.theme.fontxl};
  }
`
export const ContainerIframe = styled.div`
  width: 80vw;
  max-width: 1000px;
  height: 300px;
  
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
  
  iframe{
    width: 100%;
    height: 100%;
  }
`
export const ContainerAdress = styled.div`
  width: 500px;
  text-align: center;
  padding: 10px;
  background-color: ${props => props.theme.marron};
  /* margin-top: 1rem; */
  
  @media screen and (max-width: 768px) {
      width: 85%;
      min-width: 300px;
    }
  
  p{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.oswald};
    text-shadow: 2px 2px 2px black;
  }
`