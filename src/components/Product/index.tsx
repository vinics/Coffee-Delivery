import { ProductSelector } from '../ProductSelector'
import {
  Container,
  ProductDescription,
  ProductImage,
  ProductTag,
  ProductTitle,
  TagContainer,
} from './styles'

interface ITag {
  id: string
  value: string
}

interface IProductProps {
  image: string
  tags: ITag[]
  title: string
  description: string
  price: number
}

const BRLReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function Product({
  image,
  tags,
  title,
  description,
  price,
}: IProductProps) {
  console.log(BRLReal.formatToParts(price))

  const formattedSymbol = BRLReal.formatToParts(price)
    .map((part) => (part.type === 'currency' ? part.value : ''))
    .join('')

  const formattedPrice = BRLReal.formatToParts(price)
    .map((part) => {
      if (part.type !== 'literal' && part.type !== 'currency') {
        return part.value
      }

      return ''
    })
    .join('')

  return (
    <Container>
      <ProductImage src={image} />

      <TagContainer>
        {tags.map((tag) => (
          <ProductTag key={tag.id}>{tag.value}</ProductTag>
        ))}
      </TagContainer>

      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>

      <ProductSelector currency={formattedSymbol} price={formattedPrice} />
    </Container>
  )
}
