import Funcionarios from "../../assets/images/cafeteria.jpg"
import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  height: 85vh;
  background-image: url(${Funcionarios});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  h2{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.oswald};
    font-size: ${props => props.theme.fontxl};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  ul{
    width: 80%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    
    @media screen and (max-width: 768px) {
      width: 85%;
    }
  }
`
export const Line = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  
  h3{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.oswald};
    font-size: ${props => props.theme.fontxm};
    font-weight: 400;
    width: 100px;
    line-height: 24px;
    text-transform: uppercase;
  }
  
  span{
    width: 65%;
    height: 2px;
    background-color: ${props => props.theme.greyF};
  }
  
  p{
    text-align: end;
    width: 100px;
    color: ${props => props.theme.greyS};
    font-family: ${props => props.theme.oswald};
    font-size: ${props => props.theme.fontmd};
    font-weight: 400;
    text-transform: uppercase;
  }
  
  &:first-child p {
    color: ${props => props.theme.goldenL};
  }
`