import { Minus, Plus } from 'phosphor-react'
import { Container, Qty } from './styles'

interface IQuantitySwitchProps {
  current?: number
}

export function QuantitySwitch({ current = 1 }: IQuantitySwitchProps) {
  return (
    <Container>
      <Minus />
      <Qty>{current}</Qty>
      <Plus />
    </Container>
  )
}
