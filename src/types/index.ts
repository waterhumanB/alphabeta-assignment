import { Dispatch, SetStateAction } from 'react'

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

export interface ItemProps {
  item: Props
}

export interface PageProps {
  total: number
  limit: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}
