import { Routes, Route } from 'react-router-dom'

import Detail from '../components/Detail'

import Home from './Home'
import Templete from './Templete'
import Wishlist from './Wishlist'

function App() {
  return (
    <Routes>
      <Route element={<Templete />}>
        <Route path="/" element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
