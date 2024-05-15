import React from 'react'
import "../Components/Nav.css"
import { Link , useNavigate } from 'react-router-dom'



const Nav = () => {

  let navigate=useNavigate()
  let role=localStorage.getItem("role")
  let token=localStorage.getItem('token')

  let logoutHandler=()=>{
    localStorage.clear()
    navigate("/login")
  }
  let GotoADB=()=>{
    navigate("/admindashboard")
  }



  return (
    <div className='mainblock'>
        <div className='subblock'>
            <article>
                <ul>
                
                    <img  style={{height:70}} src="https://www.pranavamschoolofdance.com/wp-content/uploads/2020/07/Pranavam-Full-Color-white.png" alt="logo" />
                 <Link className='nav-links' to="./">Home</Link>
                 <Link className='nav-links' to="./about">About</Link>
                 <Link className='nav-links' to="./gallery">Gallery</Link>
                 {role==="ROLE_ADMIN" ? <Link className='nav-links' to="/admindashboard"> <li onClick={GotoADB}>Admid Dashbord</li> </Link> :null}

                 {token ? <Link className='nav-links' to="/login"><li onClick={logoutHandler}>Logout</li></Link> :
                 <>
                 <Link className='nav-links' to="./login">Login</Link>
                 <Link className='nav-links' to="./register">Register</Link>
                 </>
                 }
                </ul>
            </article>
        </div>
     
    </div>
  )
}

export default Nav
