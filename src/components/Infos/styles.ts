import styled from 'styled-components'

export const BackgroundImage = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('assets/senado_romano.png');
  background-size: cover;
  width: 100%;
  height: 735px;
  align-items: flex-start;
  flex-direction: row-reverse;
`

export const InfoStyle = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 425px;
  margin-top: -30px;

  background: #0C0101;
  

  p {
    text-align: justify;
    text-indent: 1.5em;
    margin: 45px 35px;
    color: white;
  }
`
