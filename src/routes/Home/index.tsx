import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

import Item from '../../components/Item'
import mock from '../../data/mock.json'

import * as S from './style'

const Home = () => {
  const [page, setPage] = useState(2)
  const [ref, inView] = useInView()

  const offset = (page - 1) * 12

  useEffect(() => {
    setTimeout(() => {
      inView && setPage(page + 1)
    }, 1500)
  }, [inView, page])

  return (
    <S.MainContainer>
      <S.ItemContainer>
        {mock.slice(0, offset).map((data) => (
          <Link key={data.id} state={data} to={`detail/${data.id}`}>
            <Item item={data} />
          </Link>
        ))}
      </S.ItemContainer>
      <div ref={ref} />
      {inView && <S.Spinner />}
    </S.MainContainer>
  )
}

export default Home
