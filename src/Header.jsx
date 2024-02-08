import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from './common/ShouldRender';
import AppContext from './context/AppContext';

const Header = () => {

    const navigate = useNavigate();
    const userState = useContext(AppContext);

    const onLogout = () => {
        localStorage.removeItem('user');
        // notify app component
        userState.setAuthenticated(false);
        navigate('/login');
    };

    return <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">Products</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ShouldRender cond={!userState.authenticated}>
                    <button className="btn btn-warning m-1">Signup</button>
                    <Link to="/login" className="btn btn-success m-1">Login</Link>
                </ShouldRender>
                <ShouldRender cond={userState.authenticated}>
                    <button onClick={onLogout} className="btn btn-danger m-1">Logout</button>
                </ShouldRender>
                <button className="btn btn-secondary">
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                    <span className="badge">4</span>
                </button>
            </div>
        </div >
    </nav>
};

export default Header;







// import React from 'react'
// import {Link} from 'react-router-dom'

// const Header=()=>{
//     return(
//         <div className='top'>

// <nav className="navbar bg-light  " data-bs-theme="white">

//             {/* <ul>
//                 <li><a href="" aria-current="page">Home</a></li>
//                 <li><a href="">About</a></li>
//                 <li><a href="">Products</a></li>
//                 <li><a href="">Contact</a></li>
//             </ul>
//             */}

//             <ul className="nav">
//   <li className="nav-link" >
//     <Link className="nav-a active btn btn danger btn-sm"  to="/Home">Home</Link>
//   </li>
//   <li className="nav-link" >
//     <Link  className="btn btn danger " to="/About">About</Link>
//   </li>
//   <li  className="nav-link">
//   </li>
//   <li className="nav-link">
//     <Link className="btn btn danger " to="/Product">Product</Link>
//   </li>
//   <li  className="nav-link" >
//     <Link className="nav-a disabled btn btn danger " aria-disabled="true">Disabled</Link>
//   </li>
// </ul>
      
//         <Link className='btn btn-sm btn-success m-1' to="SingUp">SingUP</Link>
//         <Link className='btn btn-sm btn-primary m-1' to='Login'>Login</Link>
//         <Link className='btn btn-sm btn-danger m-1'to="Logout">Logout</Link>
//         </nav>
//             </div>

          

//     )
  
// };

// export default Header;