import { Outlet } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import Header from '../../components/Header'

const Templete = () => {
  const [ref, inView] = useInView()
  return (
    <>
      <Header view={inView} />
      <main style={{ padding: '30px 10px' }}>
        <div ref={ref} />
        <Outlet />
      </main>
    </>
  )
}

export default Templete
