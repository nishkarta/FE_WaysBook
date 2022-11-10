import './styles/App.css';
import './styles/style.css';

import { Route, Routes } from 'react-router-dom';

import NavbarEl from './components/atoms/NavbarEl';
import AddBook from './pages/AddBook';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Income from './pages/Income';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <NavbarEl />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/detail/:bookId' element={<Detail />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/add-book' element={<AddBook />} />
        <Route exact path='/income' element={<Income />} />
        <Route exact path='/profile' element={<Profile />} />

      </Routes>

    </div>
  );
}

export default App;
