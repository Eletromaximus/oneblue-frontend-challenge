import { Header } from '../Header'
import { Form } from '../Form'
import { StyleHome } from './styles'
import { Banner } from '../Banner'
import { Infos } from '../Infos'
import { History } from '../History'
import { useEffect, useState } from 'react'
import { Retangulo } from '../Retangulo'

function PageHome () {
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
    <StyleHome>
      <Header />

      <Banner retang={retang}/>
      {!retang && <Retangulo />}
      <Infos />
      <History />

      <Form address='/user/cadaster' />
    </StyleHome>
  )
}

export default PageHome
