import styled from 'styled-components'

export const ProductImage = styled.img``

export const ProductTag = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  ${ProductImage} {
    margin-top: calc(-1.25rem - 1.25rem);
    margin-bottom: 0.75rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const ProductTitle = styled.span`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  line-height: 130%;
  font-weight: 700;
  margin-top: 1rem;
`
export const ProductDescription = styled.p`
  text-align: center;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-top: 0.5rem;
`
