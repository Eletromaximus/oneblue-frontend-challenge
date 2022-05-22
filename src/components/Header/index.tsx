import { ReactNode } from 'react'
import { StyledHeader } from './styled'

interface IHeader {
  children: ReactNode
}
export function Header ({ children }: IHeader) {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}
