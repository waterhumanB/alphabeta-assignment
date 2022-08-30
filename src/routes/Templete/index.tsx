import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'

const Templete = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '30px 10px' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Templete
