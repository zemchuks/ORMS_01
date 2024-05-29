import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthRoutes, HomeRoutes } from './router'
import Sidebar from './components/sidebar'
import Layout from './pages/layout/Layout'



function App() {

  return (
    <BrowserRouter>

      <Routes>
        {HomeRoutes.map((item, index) => (
          <Route key={index} path={item.name} element={<Layout><item.element /></Layout>} />
        ))}
        {AuthRoutes.map((item, index) => (
          <Route key={index} path={item.name} element={<Sidebar><item.element /></Sidebar>} />
        ))}
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
