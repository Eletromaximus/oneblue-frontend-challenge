import styled from 'styled-components'
import { Card } from './Card'

// import { Container } from './styles';
export const HistoryStyle = styled.div`
  display: grid;
  height: 631px;
  width: 100%;
  background: #030000;
  grid-template-columns: repeat(2, 1fr);

  color: white;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function History () {
  return (
    <HistoryStyle>
        <Card content='8 anos de Mercado , ajudando as empresas solucionar suas questões administrativas' />
        <Card content='8 anos de Mercado , ajudando as empresas solucionar suas questões administrativas' />
        <Card content='8 anos de Mercado , ajudando as empresas solucionar suas questões administrativas' />
        <Card content='8 anos de Mercado , ajudando as empresas solucionar suas questões administrativas' />
    </HistoryStyle>
  )
}

export { History }
