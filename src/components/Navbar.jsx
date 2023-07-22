import {BsCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
 
  return (
    <div className="bg-slate-900 w ">
  <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
  <div className="ml-5">
  <NavLink to="/">
  <img src="../logo.png" className="h-14"/>
  </NavLink>
  </div>
 <div className="flex items-centre font-medium text-slate-100 mr-5 space-x-6">
 <div>
 <NavLink to="/">
 <p>Home</p>
 </NavLink>
 </div>
 <NavLink to="/cart">
 <div className="relative">
 <BsCartFill className="text-2xl"/>
 {
  cart.length > 0 &&
   <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
 }

 </div>
 </NavLink>
 </div>
</nav>
  </div>
  )
};

export default Navbar;
