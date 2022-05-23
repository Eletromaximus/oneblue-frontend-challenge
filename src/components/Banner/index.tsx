import { BannerStyle } from './styles'
import { Retangulo } from '../Retangulo'

interface IBanner {
  retang: boolean
}

export function Banner ({ retang }: IBanner) {
  return (
    <BannerStyle>
      {retang && <Retangulo />}

    </BannerStyle>

  )
}
