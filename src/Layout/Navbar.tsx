

import React,{useState,useEffect,useRef} from 'react';
import '../Style/Navbar.css'
import { Link } from 'react-router-dom';
import Login from '../Compnents/Login'



function Navbar(props:any) {
    const [OpenLogin ,SetOpenLogin] = useState<boolean>(false)

  return (
    <>
        {
            OpenLogin &&
            <div className="animated bounceInDown">
                <Login SetOpenLogin={SetOpenLogin} />
            </div>
        }

        <div className="Navbar">
                <div className="page-wrapper">
                    <div className="nav-wrapper">
                    <div className="grad-bar"></div>
                    <nav className="navbar">
                        <div className="navbar_LogoSearch">
                            <Link to="/">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" />
                            </Link>
                            <div>
                                <input type="text" placeholder="Search ... " />
                                <img src={require('../Style/Img/Search.png')} alt="" />
                            </div>
                        </div>
                        <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        </div>
                        <ul className="no-search">
                            <li className="nav-item">
                                <Link to="/Articles">
                                    Articles
                                </Link>
                            </li>
                            <li className="nav-item Insciption"><a href="#">Create Post</a></li>
                            <li className="nav-item Notification"><img src={require('../Style/Img/Notification.png')} alt="" /></li>
                            <li className="nav-item Avatar"> 
                                <Link to="/Profile/736">
                                    <img src={require('../Style/Img/Avatar.png')} alt="" />
                                </Link>
                            </li>
                            {/* <li  className="nav-item Login"><a href="" onClick={(e)=>{
                                e.preventDefault();
                                SetOpenLogin(true)
                                }}>Log in</a></li>
                            <li className="nav-item Insciption"><a href="#" onClick={(e)=>{
                                e.preventDefault();
                                SetOpenLogin(true)}}>Create Account</a></li> */}
                        </ul>
                    </nav>
                    </div>
                </div>
        </div>
    </>
  );
}

export default Navbar;