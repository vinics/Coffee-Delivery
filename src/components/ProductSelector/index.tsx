import { ShoppingCart } from 'phosphor-react'
import { QuantitySwitch } from '../QuantitySwitch'
import {
  Container,
  CurrencySymbol,
  Price,
  PriceBlock,
  ShopButton,
} from './styles'

interface IProductSelectorProps {
  currency: string
  price: string
}

export function ProductSelector({ price, currency }: IProductSelectorProps) {
  return (
    <Container>
      <PriceBlock>
        <CurrencySymbol>{currency}</CurrencySymbol>
        <Price>{price}</Price>
      </PriceBlock>

      <QuantitySwitch />

      <ShopButton>
        <ShoppingCart weight="fill" color="white" />
      </ShopButton>
    </Container>
  )
}
