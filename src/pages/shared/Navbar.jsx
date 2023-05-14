import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 

  const handleLogOut = () => {
    logOut()
    .then(() => {
      localStorage.removeItem('car-access-token'); 
    })
    .catch(err => console.log(err))
  }

  const navItems = <>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    {user && <Link to='bookings'>My Bookings</Link>}
  </>

  return (
    <div className='bg-base-200'>
      <div className="navbar py-5 w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content p-5 shadow bg-base-100 w-52">{navItems}</ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-12 h-12' src={logo} alt="logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? <button onClick={handleLogOut} className='px-4 py-3 border border-[#FF3811] text-[#FF3811] font-medium uppercase rounded-md'>Logout</button> : <Link to='/login' className='px-4 py-2 border border-[#FF3811] text-[#FF3811] font-medium uppercase rounded-md'>Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;