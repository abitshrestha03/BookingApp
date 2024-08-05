import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import AddHotel from './pages/AddHotel'
import { useAppContext } from './contexts/AppContext'
import MyHotels from './pages/MyHotels'
import EditHotel from './pages/EditHotel'
import Search from './pages/Search'
import Details from './pages/Details'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'
import Home from './pages/Home'
import AuthLayout from './layouts/AuthLayout'

const App = () => {
  const {isLoggedIn}=useAppContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/search" element={<Layout><Search/></Layout>}/>
        <Route path="/detail/:hotelId" element={<Layout><Details/></Layout>}/>

        {isLoggedIn && (
          <>
            <Route path='/hotel/:hotelId/booking' element={<Layout><Booking/></Layout>}/>
            <Route path='/my-bookings' element={<Layout><MyBookings/></Layout>}/>
            <Route path='/add-hotel' element={<Layout><AddHotel/></Layout>}/>
            <Route path='/my-hotels' element={<Layout><MyHotels/></Layout>}/>
            <Route path='/edit-hotel/:hotelId' element={<Layout><EditHotel/></Layout>}/>
          </>
        )}
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/register' element={<AuthLayout><Register/></AuthLayout>}/> 
        <Route path='/sign-in' element={<AuthLayout><SignIn/></AuthLayout>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App