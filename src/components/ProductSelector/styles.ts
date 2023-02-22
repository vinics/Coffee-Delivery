import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.28125rem;
  height: 2.375rem;
`
export const PriceBlock = styled.div`
  color: ${(props) => props.theme['base-text']};
  margin-right: 1.4375rem;
`

export const CurrencySymbol = styled.span`
  font-size: 0.875rem;
  font-family: 'Roboto';
  margin-right: 0.25rem;
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
`

export const ShopButton = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  display: grid;
  place-items: center;
  margin-left: 0.5rem;
  border: 0;
  height: 100%;
  width: 2.375rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`
