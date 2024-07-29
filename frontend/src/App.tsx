import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>}/>
        <Route path="/search" element={<Layout>Search Page</Layout>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/register' element={<Layout><Register/></Layout>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App