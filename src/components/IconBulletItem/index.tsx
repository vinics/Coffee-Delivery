import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { ItemBullet, ItemContainer, ItemText, ItemBulletProps } from './styles'

interface IIconBulletItemProps extends ItemBulletProps {
  text: string
  icon: 'shopping-cart' | 'package' | 'timer' | 'coffee' | 'pin' | 'money'
}

export function IconBulletItem({ text, color, icon }: IIconBulletItemProps) {
  return (
    <ItemContainer>
      <ItemBullet color={color}>
        {icon === 'shopping-cart' && (
          <ShoppingCart color="white" weight="fill" height={`1rem`} />
        )}

        {icon === 'package' && (
          <Package color="white" weight="fill" height={`1rem`} />
        )}

        {icon === 'timer' && (
          <Timer color="white" weight="fill" height={`1rem`} />
        )}

        {icon === 'coffee' && (
          <Coffee color="white" weight="fill" height={`1rem`} />
        )}
      </ItemBullet>
      <ItemText>{text}</ItemText>
    </ItemContainer>
  )
}
