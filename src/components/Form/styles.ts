import styled from 'styled-components'

export const FormStyle = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bb7433;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    input:last-child {
      margin: 20px 0;
    } 
    
    input {
      height: 30px;
      width: 100%;
    }
  }
`
