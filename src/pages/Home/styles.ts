import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

import bannerBgImage from '../../assets/banner-background.svg'

export const Container = styled.div``

export const Banner = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.875rem 10rem;
  background: url(${bannerBgImage});
`
export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const BannerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
`

export const SubTitle = styled.span`
  font-size: 1.25rem;
  line-height: 130%;
`

export const IconBulletContainer = styled.ul`
  display: grid;
  gap: 1.25rem 2.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export const IconBulletItem = styled.li`
  display: flex;
  list-style: none;
  font-size: 1rem;
  line-height: 130%;
  gap: 0.75rem;
  align-items: center;
`

// interface IIconBulletImageProps {
//   color: keyof typeof defaultTheme
// }

// export const IconBulletItemImage = styled.div<IIconBulletImageProps>`
//   background-color: ${(props) => props.theme[`${props.color}`]};
//   display: grid;
//   padding: 0.5rem;
//   border-radius: 50%;
// `
export const ProductSection = styled.section`
  padding: 2rem 10rem;
`

export const ProductPortfolio = styled.main`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2';
  line-height: 130%;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 2.125rem;
`
