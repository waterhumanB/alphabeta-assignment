import { ItemProps } from '../../types'
import { ReactComponent as Logo } from '../../assets/imgs/logo.svg'

import * as S from './style'

const Item = ({ item }: ItemProps) => {
  const date = item.createdAt.split('/')

  const newDate = date[2].concat('-', date[0], '-', date[1])

  return (
    <S.ItemBox>
      <S.LogoBox>
        <Logo />
        <div className="title">{item.title}</div>
      </S.LogoBox>
      <div>
        <img src={item.images} alt={item.title} />
      </div>

      <div className="desc">{item.description}</div>

      <div className="flex">
        <div className="price">{item.price}</div>
        <div className="date">{newDate}</div>
      </div>
      <div className="flex" />
    </S.ItemBox>
  )
}

export default Item
