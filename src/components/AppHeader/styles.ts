import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 10rem;
`
export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.465rem;
  padding: 0.5rem;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  display: grid;
  place-items: center;
  width: 2.375rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 6px;
`
