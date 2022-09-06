import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/imgs/logo.svg'

import * as S from './style'

interface HeadProps {
  view: boolean
}

const Header = ({ view }: HeadProps) => {
  return (
    <S.HeaderContainer className={view ? '' : 'invisible'}>
      <S.HeaderBox>
        <NavLink to="/">
          <button>
            <Logo />
          </button>
        </NavLink>

        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? '' : 'usepage')}
          >
            <button>Home</button>
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) => (isActive ? '' : 'usepage')}
          >
            <button>Wishlist</button>
          </NavLink>
        </div>
      </S.HeaderBox>
    </S.HeaderContainer>
  )
}

export default Header
