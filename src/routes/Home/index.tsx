import { Link } from 'react-router-dom'

import Item from '../../components/Item'
import mock from '../../data/mock.json'

import * as S from './style'

const Home = () => {
  return (
    <S.MainContainer>
      <S.ItemContainer>
        {mock.map((data) => (
          <Link key={data.id} state={data} to={`detail/${data.id}`}>
            <Item item={data} />
          </Link>
        ))}
      </S.ItemContainer>
    </S.MainContainer>
  )
}

export default Home
