import { Link } from 'react-router-dom'

import mock from '../../data/mock.json'

import * as S from './style'

const Home = () => {
  return (
    <S.MainContainer>
      <S.ItemContainer>
        {mock.map((data) => (
          <Link key={data.id} state={data} to={`detail/${data.id}`}>
            <S.ItemBox>
              <div>{data.title}</div>
              <img src={data.images} alt="img" />
              <div>{data.description}</div>
              <div>{data.price}</div>
              <div>{data.createdAt}</div>
            </S.ItemBox>
          </Link>
        ))}
      </S.ItemContainer>
    </S.MainContainer>
  )
}

export default Home
