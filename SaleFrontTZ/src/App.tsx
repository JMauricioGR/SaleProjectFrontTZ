import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SideMenu from './components/SideMenu'


function App() {

  return (
    <div className="App">
      <div className="main-container">
        <BrowserRouter>
          <SideMenu/>
          <div className="content-container">
            <Routes>
              <Route path='/products' element={<h2>productos</h2>}/>
              <Route path='/sales' element={<h2>historial ventas</h2>}/>
            </Routes>
          </div>

          
        </BrowserRouter>
      </div>
      <h1>Hola</h1>
    </div>
  )
}

export default App
