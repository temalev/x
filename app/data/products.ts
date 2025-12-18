export type XnogiProduct = {
  slug: string
  name: string
  description?: string
  limited?: boolean
  tags?: string[]
}

export const products: XnogiProduct[] = [
  {
    slug: 'iksnogi-hellouiniks',
    name: 'Иксноги Хэллоуиникс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-akuliks',
    name: 'Иксноги Акуликс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-bananiks',
    name: 'Иксноги Бананикс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-nightiks',
    name: 'Иксноги Найтикс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-lyagushiks',
    name: 'Иксноги Лягушикс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-lyagushiks-limited',
    name: 'Лимитированный Иксноги Лягушикс',
    limited: true,
    tags: ['фигурка', 'лимитированный'],
  },
  {
    slug: 'iksnogi-bananiks-limited',
    name: 'Лимитированный Иксноги Бананикс',
    limited: true,
    tags: ['фигурка', 'лимитированный'],
  },
  {
    slug: 'iksnogi-kotiks-limited',
    name: 'Лимитированный Иксноги Котикс',
    limited: true,
    tags: ['фигурка', 'лимитированный'],
  },
  {
    slug: 'iksnogi-magnetics-ny-8',
    name: 'Иксноги Магнетикс — набор новогодние персонажи 8 см',
    tags: ['магниты', 'набор', '8 см'],
  },
  {
    slug: 'iksnogi-santiks',
    name: 'Иксноги Сантикс',
    tags: ['фигурка', 'новогодний'],
  },
  {
    slug: 'iksnogi-magnetics-main-8',
    name: 'Иксноги Магнетикс — набор основные персонажи 8 см',
    tags: ['магниты', 'набор', '8 см'],
  },
  {
    slug: 'iksnogi-plamiks',
    name: 'Иксноги Пламикс',
    tags: ['фигурка'],
  },
  {
    slug: 'iksnogi-magnetics-ny-5',
    name: 'Иксноги Магнетикс — набор новогодние персонажи 5 см',
    tags: ['магниты', 'набор', '5 см'],
  },
  {
    slug: 'iksnogi-magnetics-main-5',
    name: 'Иксноги Магнетикс — набор основные персонажи 5 см',
    tags: ['магниты', 'набор', '5 см'],
  },
  {
    slug: 'iksnogi-kotiks-collectible',
    name: 'Иксноги Котикс — коллекционная игрушка',
    limited: true,
    tags: ['фигурка', 'коллекционная'],
  },
]

export function getProductBySlug(slug: string): XnogiProduct | undefined {
  return products.find((product) => product.slug === slug)
}


