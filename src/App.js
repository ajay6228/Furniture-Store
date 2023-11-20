import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/Components/Nav';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import FetchCom from './Components/FetchCom';
import Register from './Components/Register1';
import Payment from './Components/Payment';
import { Provider } from 'react-redux';
import { ShopPage } from './Components/ShopPage';
import { Cart } from './Components/CartPage';
import { ShopContextProvider } from './Components/shop-context';
import store from './store';


function App() {
  return (
    <div>
      <Provider store={store}>

      <ShopContextProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<FetchCom />} />
            <Route path='/adminreg' element={<Register />} />
            <Route path='/checkout' element={<Payment />} />


          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
      </Provider>
    </div>
  );
}

export default App;
