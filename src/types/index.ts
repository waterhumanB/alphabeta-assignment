export interface Props {
  id: number
  title: string
  images: string
  description: string
  price: string
  createdAt: string
}

export interface Modalprops {
  toggleModal: () => void
}
