import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
    width: 0.875rem;
    width: 0.875rem;
  }

  svg:hover {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }
`

export const Qty = styled.span`
  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  min-width: 1.25rem;
`
