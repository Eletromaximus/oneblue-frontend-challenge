import styled from 'styled-components'

export const BannerStyle = styled.div`
  height: 700px;
  width: 100%;
  flex-direction: row-reverse;

  background: url('/assets/justice.png');
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'Cinzel';


  `

export const Retangulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 730.5px;
  height: 100%;
  
  background: transparent url('assets/Rectangle.png') no-repeat;
  background-size: cover;

  button {
    background-color: #5C1717;
    color: white;
    border: none;
    padding: 0 10px;
  }
`
