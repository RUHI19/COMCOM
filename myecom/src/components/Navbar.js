import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/aa.jpg'

function Navbar() {
    return (
        <div className='navbox'>

           <div className='leftside'>
               <img src={logo} alt="" />
           </div>
           <div className='rightside'></div>
           <Link to='./signup' className='navlinks'>SIGN UP</Link>
           <Link to='./login' className='navlinks'>LOG IN</Link>
        </div>
    )
}

export default Navbar
