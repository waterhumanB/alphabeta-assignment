import { Routes, Route } from 'react-router-dom'

import Detail from '../components/Detail'

import Home from './Home'
import Template from './Template'
import Wishlist from './Wishlist'

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
