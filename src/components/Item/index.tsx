import { ItemProps } from '../../types'

import * as S from './style'

const Item = ({ item }: ItemProps) => {
  const date = item.createdAt.split('/')

  const newDate = date[2].concat('-', date[0], '-', date[1])

  return (
    <S.ItemBox>
      <div className="title">{item.title}</div>
      <div>
        <img src={item.images} alt={item.title} />
      </div>

      <div className="desc">{item.description}</div>

      <div className="flex">
        <div>상품 가격</div>
        <div>{item.price}</div>
      </div>
      <div className="flex">
        <div> 업로드 날짜</div>
        <div>{newDate}</div>
      </div>
    </S.ItemBox>
  )
}

export default Item
