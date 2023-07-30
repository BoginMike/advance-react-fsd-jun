
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyCart from './pages/MyCart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Product from './pages/Product';
function App() {

  const navigate = useNavigate();

  function routeToProfile() {
      if(new Date().getHours() == 19){
        navigate('/profile')
      }
  }


  return (
    <div className="App">
      <div>
        <a href='/profile'>Profile</a>
        <a href='/sign-up'>Signup</a>
        <a href='/my-cart'>MyCart</a>
        <a href='/my-orders'>Orders</a>
        <a href='/product-details'>Product details</a>




        <button onClick={routeToProfile}>Take me to My Profile</button>

      </div>

      <br/>
      <br/>
      <hr/>

      

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/my-cart' element={<MyCart />}></Route>
        <Route path='/my-orders' element={<Orders />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/product-details/:name' element={<Product />}></Route>
      </Routes>


    </div>
  );
}

export default App;
