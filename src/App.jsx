import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthRoutes } from './router'
import Sidebar from './components/sidebar'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {AuthRoutes.map((item, index) => (
        <Route path={item.name} element={<Sidebar><item.element /></Sidebar>} key={index} />
      ))}
    </Routes>
    </BrowserRouter>
  )
}

export default App
