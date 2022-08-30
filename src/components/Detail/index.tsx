import { useLocation } from 'react-router-dom'

interface Props {
  id: number
  title: string
  images: string
  description: string
  price: string
  createdAt: string
}

const Detail = () => {
  const location = useLocation()

  const state = location.state as Props

  return (
    <div>
      <div>
        <img src={state.images} alt="img" />
      </div>
      <div>{state.title}</div>
      <div>{state.description}</div>
      <div>{state.price}</div>
      <div>{state.createdAt}</div>
      <button>장바구니</button>
    </div>
  )
}

export default Detail
