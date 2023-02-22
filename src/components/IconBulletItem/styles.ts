import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const ItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.75rem;
`

const ICON_COLORS = {
  gray: 'base-text',
  orange: 'yellow-dark',
  purple: 'purple',
  yellow: 'yellow',
} as const

export interface ItemBulletProps {
  color: keyof typeof ICON_COLORS
}

export const ItemBullet = styled.div<ItemBulletProps>`
  background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  display: grid;
  place-items: center;
`

export const ItemText = styled.span`
  color: ${(props) => props.theme[`base-text`]};
  flex: 1;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
`
