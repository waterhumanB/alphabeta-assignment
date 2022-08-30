import { NavLink } from 'react-router-dom'

import * as S from './style'

const Header = () => {
  return (
    <S.HeaderContainer
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <S.HeaderBox>
        <NavLink to="/">
          <button>Logo</button>
        </NavLink>

        <NavLink to="wishlist">
          <button>Wishlist</button>
        </NavLink>
      </S.HeaderBox>
    </S.HeaderContainer>
  )
}

export default Header
