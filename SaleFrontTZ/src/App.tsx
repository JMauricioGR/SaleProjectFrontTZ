import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import ProductList from './components/Products/ProductList'


function App() {

  return (
    <div className="App">
      <div className="main-container">
        <BrowserRouter>
          <SideMenu/>
          <div className="content-container">
            <Routes>
              <Route path='/products' element={<ProductList />}/>
              <Route path='/sales' element={<h2>Historial ventas</h2>}/>
            </Routes>
          </div>

          
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
