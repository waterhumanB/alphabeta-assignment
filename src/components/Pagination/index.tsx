import { PageProps } from '../../types'
import { ReactComponent as PageBtn } from '../../assets/imgs/pagination.svg'

import * as S from './style'

function Pagination({ total, limit, page, setPage }: PageProps) {
  const numPages = Math.ceil(total / limit)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i)
  }
  return (
    <S.Nav>
      <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <PageBtn style={{ transform: 'scaleX(-1)' }} />
      </S.Button>
      {pageNumbers.map((i) => (
        <S.Button
          style={page === i ? { color: '#000' } : { color: '#999' }}
          key={i + 1}
          onClick={() => setPage(i)}
        >
          {i}
        </S.Button>
      ))}
      <S.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <PageBtn />
      </S.Button>
    </S.Nav>
  )
}

export default Pagination
