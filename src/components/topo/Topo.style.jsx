import styled from 'styled-components'

export const Section = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.marron};
  display: flex;
  justify-content: center;
  z-index: 100;
  
  .container{
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 768px) {
      width: 90vw;
      flex-direction: column;
    }
  }
`
export const ContainLogo = styled.div`
  width: 80px;
  
  img{
    width: 100%;
  }
`
export const ContainNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.oswald};
  color: ${props => props.theme.goldenL};
  text-shadow: 2px 2px 2px black;
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
      justify-content: space-between;
      padding: 10px 0;
      width: 100%;
      border-top: 1px solid ${props => props.theme.goldenL};
    }
  
  a{
    text-align: center;
    padding: 5px;
    font-size: ${props => props.theme.fontmd};
    width: 120px;
  }
`
