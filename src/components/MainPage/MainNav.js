import React from 'react'
import {Link} from 'react-router-dom'
function MainNav() {
    return (
        <div className='navbar  navbar-expand-lg '>
        <Link to="/"><a class="navbar-brand" href="#">Fly<span>Now</span></a></Link>
    
                <div >
        <ul class="navbar-nav mr-auto">
        
        <li class="nav-item">
        <Link to='/singIn'>Your bookings</Link>
        </li>
        <li class="nav-item singIn">
        <Link to='/singIn'> Sing In</Link>        </li>
        </ul>
    
        </div>

  </div>
    )
}

export default MainNav
