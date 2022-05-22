import { Header } from './components/Header'
import { Form } from './components/Form'
import { StyleApp } from './StyleApp'
import { Banner } from './components/Banner'

function App () {
  return (
    <StyleApp>
      <Header>
        <h2>Direito&Advocacia</h2>
      </Header>

      <Banner />

      <Form />
    </StyleApp>
  )
}

export default App
