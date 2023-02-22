import { Outlet } from 'react-router-dom'
import { AppHeader } from '../../components/AppHeader'

import { Container } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <AppHeader />
      <Outlet />
    </Container>
  )
}
