import {
  Container,
  Banner,
  IconBulletContainer,
  Title,
  SubTitle,
  BannerTitleContainer,
  BannerContentContainer,
  ProductPortfolio,
  SectionTitle,
  ProductSection,
} from './styles'

import { IconBulletItem } from '../../components/IconBulletItem'
import { Product } from '../../components/Product'

import bannerImage from '../../assets/home-banner-image.svg'

const _PRODUCTS = [
  {
    id: 1,
    image: 'src\\assets\\product-expresso-tradicional.svg',
    tags: [{ id: '101', value: 'tradicional' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: 'src\\assets\\product-expresso-americano.svg',
    tags: [{ id: '101', value: 'tradicional' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: 'src\\assets\\product-expresso-cremoso.svg',
    tags: [{ id: '101', value: 'tradicional' }],
    title: 'Expresso Americano',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: 'src\\assets\\product-expresso-gelado.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '102', value: 'gelado' },
    ],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: 'src\\assets\\product-cafe-leite.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: 'src\\assets\\product-latte.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: 'src\\assets\\product-capuccino.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: 'src\\assets\\product-macchiato.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: 'src\\assets\\product-mocaccino.svg',
    tags: [
      { id: '101', value: 'tradicional' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: 'src\\assets\\product-chocolate-quente.svg',
    tags: [
      { id: '104', value: 'especial' },
      { id: '103', value: 'com leite' },
    ],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    image: 'src\\assets\\product-cubano.svg',
    tags: [
      { id: '104', value: 'especial' },
      { id: '102', value: 'com leite' },
      { id: '105', value: 'alcoólico' },
    ],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: 'src\\assets\\product-havaiano.svg',
    tags: [{ id: '104', value: 'especial' }],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: 'src\\assets\\product-arabe.svg',
    tags: [{ id: '104', value: 'especial' }],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: 'src\\assets\\product-irlandes.svg',
    tags: [
      { id: '104', value: 'especial' },
      { id: '105', value: 'alcoólico' },
    ],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function Home() {
  return (
    <Container>
      <Banner>
        <BannerContentContainer>
          <BannerTitleContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </SubTitle>
          </BannerTitleContainer>
          <IconBulletContainer>
            <IconBulletItem
              color="orange"
              icon="shopping-cart"
              text="Compra simples e segura"
            />
            <IconBulletItem
              color="gray"
              icon="package"
              text="Embalagem mantém o café intacto"
            />
            <IconBulletItem
              color="yellow"
              icon="timer"
              text="Entrega rápida e rastreada"
            />
            <IconBulletItem
              color="purple"
              icon="coffee"
              text="O café chega fresquinho até você"
            />
          </IconBulletContainer>
        </BannerContentContainer>

        <img src={bannerImage} alt="" />
      </Banner>

      <ProductSection>
        <SectionTitle>Nossos cafés</SectionTitle>
        <ProductPortfolio>
          {_PRODUCTS.map((product) => (
            <Product
              image={product.image}
              description={product.description}
              tags={product.tags}
              price={product.price}
              title={product.title}
              key={product.id}
            />
          ))}
        </ProductPortfolio>
      </ProductSection>
    </Container>
  )
}
