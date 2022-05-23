import { Header } from '../Header'
import { LoginStyle } from './styles'
import { Form } from '../Form'

export function PageLogin () {
  return (
    <LoginStyle>
      <Header />
      <Form address='/login' />
    </LoginStyle>
  )
}
