import styled from 'styled-components'

export const Section = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px 0;
  box-sizing: border-box;
  
  background-color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontmd};
  
  p{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.oswald};
    letter-spacing: 1px;
    font-weight: 400;
    
    .link-j{
      color: ${props => props.theme.goldenL};
      text-transform: uppercase;
    }
  }
`
export const Up = styled.a`
  position: absolute;
  top: -20px;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: ${props => props.theme.goldenL};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontxl};
  border-radius: 5px;
  cursor: pointer;
`


