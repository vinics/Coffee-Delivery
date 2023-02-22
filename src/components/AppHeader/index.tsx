import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, CartButton, Header, Location } from './styles'

import appLogo from '../../assets/app-logo.svg'

export function AppHeader() {
  return (
    <Header>
      <img src={appLogo} alt="" />
      <Actions>
        <Location>
          {/* TODO: Remove color from MapPin, must come from theme (Purple) */}
          <MapPin weight="fill" size={22} color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </Location>
        <CartButton>
          {/* TODO: Remove color from ShoppingCart, must come from theme (Yellow Dark) */}
          <ShoppingCart weight="fill" size={22} color="#c47f17" />
        </CartButton>
      </Actions>
    </Header>
  )
}
