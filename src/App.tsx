import { Header } from './components/Header'
import { Form } from './components/Form'
import { StyleApp } from './StyleApp'
import { Banner } from './components/Banner'
import { Infos } from './components/Infos'
import { History } from './components/History'
import { useEffect, useState } from 'react'
import { Retangulo } from './components/Retangulo'

function App () {
  const [width, setWidth] = useState(window.innerWidth)
  const [retang, setRetang] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)

    if (width < 1178) {
      setRetang(false)
    } else {
      setRetang(true)
    }

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [width])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }
  return (
    <StyleApp>
      <Header>
        <h2>Direito&Advocacia</h2>
      </Header>

      <Banner retang={retang}/>
      {!retang && <Retangulo />}
      <Infos />
      <History />

      <Form />
    </StyleApp>
  )
}

export default App
