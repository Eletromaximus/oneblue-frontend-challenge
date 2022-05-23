import { BalanceContainer, CardStyle } from './styles'

interface ICard {
  content: string
}
export function Card ({ content }: ICard) {
  return (
    <CardStyle>
      <BalanceContainer>
        <img
          src='assets/balance.png'
          alt='balança da justiça'
        />
      </BalanceContainer>
      <p>
        {content}
      </p>
    </CardStyle>
  )
}
