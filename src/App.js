import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
