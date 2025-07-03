import React from 'react'
import Home from './Home'
import SignIn from './SignIn'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const isLoggedIn=!!localStorage.getItem('token');

  const handleLogout=()=>{
    localStorage.removeItem('token');
    Navigate('/signIn')
  }
  return (
    <>
    <div>
      <div className='bg-black  p-4 flex justify-between '>

        <Link to='/'>
        <div className='flex items-center space-x-2'>
          <img src="/logo.png"  alt="logo"   className='h-11 w-11 object-contain rounded transform scale-125 '  />
          <span className='text-white font-bold cursor-pointer'  >Magic Morph</span>
        </div>
        </Link>

        <ul className='flex gap-6 p-4 display-center text-white font-medium '>
          {isLoggedIn ?(
             <li className="hover:text-gray-300 hover:underline cursor-pointer "><Link to="/Morph">Home</Link></li>
          ):(<>
        <li className="hover:text-gray-300 hover:underline cursor-pointer "><Link to="/">Home</Link></li>
         </> )}
        <li className="hover:text-gray-300 hover:underline cursor-pointer "><Link to="/posts">Posts</Link></li>
        <li className="hover:text-gray-300 hover:underline cursor-pointer "><Link to="/Write">About us</Link></li>

        {isLoggedIn ? (
          <button onClick={handleLogout} className=" cursor-pointer text-black bg-white  "><Link to="/SignIn">Logout</Link></button>
        ):(<>
        <li className="hover:text-gray-300 hover:underline cursor-pointer border-xl rounded "><Link to="/SignIn">SignIn</Link></li>
        <li className="hover:text-gray-300 hover:underline cursor-pointer "><Link to="/SignUp">SignUp</Link></li>
       </> )}
        </ul>
      </div>
    </div>
    
    
    </>
  )
}

export default Navbar