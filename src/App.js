import './styles/App.css';
import './styles/style.css';

import * as React from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom';

import NavbarEl from './components/atoms/NavbarEl';
import AddBook from './pages/admin/AddBook';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Income from './pages/admin/Income';
import Profile from './pages/Profile';
import UploadedBooks from './pages/admin/UploadedBook';
import UpdateBook from './pages/admin/UpdateBook';
import { API, setAuthToken } from './config/api';
import { UserContext } from './components/context/userContext';
import { Outlet, Navigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(true)
  const [state, dispatch] = React.useContext(UserContext)

  document.title = 'WaysBook | Online Library'

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    if (state.isLogin === false && !isLoading) {
      navigate("/")
    }
  }, [state])

  const checkUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token)
      }
      const response = await API.get("/check-auth")

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR"
        })
      }

      let payload = response.data.data;

      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload
      })

      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    checkUser()
  }, [])

  const PrivateRoute = () => {
    return state.isLogin ? <Outlet /> : <Navigate to="/" />
  }


  return (
    <div className="App">
      <NavbarEl />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/add-book' element={<AddBook />} />
          <Route exact path='/update-book/:id' element={<UpdateBook />} />
          <Route exact path='/income' element={<Income />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/uploaded' element={<UploadedBooks />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
