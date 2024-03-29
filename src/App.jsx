import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Detail from './pages/Detail'

export const AppContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [factor,setFactor] = useState([])

  return (
    <AppContext.Provider value={{factor,setFactor}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:title/:clothId' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
