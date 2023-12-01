import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Menu.css';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Blog from './Blog';


function Menu(props) {
 
  return (
    <BrowserRouter>
      <nav className={`menu-container` }>
        <Link className='menu-item' to='/'>
          Home
        </Link>
        <Link className='menu-item' to='/about'>
          About
        </Link>
        <Link className='menu-item' to='/shop'>
          Shop
        </Link>
        <Link className='menu-item' to='/blog'>
          Blog
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
