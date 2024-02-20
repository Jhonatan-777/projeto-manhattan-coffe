import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  
  @media screen and (max-width: 768px) {
      padding: 50px 0;
    }
  
  .contain{
    width: 80vw;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
`
export const Title = styled.h2`
  color: ${props => props.theme.goldenL};
  font-family: ${props => props.theme.oswald};
  font-size: ${props => props.theme.fontxl};
  letter-spacing: 1px;
`
export const Texto = styled.p`
  color: ${props => props.theme.greyF};
  font-family: ${props => props.theme.lato};
  font-size: ${props => props.theme.fontmd};
  text-align: center;
  margin-top: 30px;
`