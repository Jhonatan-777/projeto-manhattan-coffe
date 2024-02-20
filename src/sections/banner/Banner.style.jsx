import Banner from "../../assets/images/parallax-imagem1.png"

import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  background-image: url(${Banner});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div{
    width: 80vw;
    
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  
    h1{
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fraunces};
      font-size: ${props => props.theme.fontxxxl};
      font-weight: 300;
      
      @media screen and (max-width: 1260px) {
        font-size: ${props => props.theme.fontxxl};
      }
      
      br{
        @media screen and (min-width: 1040px) {
          display: none;
        }
      }
    }
  }
`
