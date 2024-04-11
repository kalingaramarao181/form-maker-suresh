import React from 'react'
import { Link,withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from 'js-cookie'
import './Navbar.css'

const Navbar = (props) => { 
  const lock=Cookies.get("lock")


  const buttonhandler = ()=>{
    Cookies.remove("lock")
    window.location.reload()
    props.history.replace("/")
  }

  const loginhandler = ()=>{
   props.history.replace("/Login")
   console.log(props);
  }
  
  
  return (
    <>
      <div className='nav'>
  <Link to="/" className='nav-Home' >FormMaker</Link>
  <Link to="/" className='nav-Home' >Home</Link>
  <Link to="/forms" className='nav-Home'>Forms</Link>
  <Link to="/AboutUs" className='nav-Home'>AboutUs</Link>
  <Link to="/ClientLogin" className='nav-Home'>
    <ul>
      <li><a href='/ClientLogin'>Client Login </a>
      <ul className='droupdown'>
  <Link to="/ClientData" className='nav-Home'>ClientData</Link>
        <li> <a>Client</a></li>
        </ul>
        </li>
    </ul>
  </Link>
  {lock?<button className='Navlogin-button' onClick={buttonhandler}> LogOut</button >:<button  className='Navlogin-button' onClick={loginhandler}>Login</button> }


  </div>
    </>
  )
}

export default withRouter(Navbar) 