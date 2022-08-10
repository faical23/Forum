

import React,{useState,useEffect,useRef} from 'react';
import '../Style/Navbar.css'


function Navbar(props:any) {
    const [ToggleSearch ,SetToggleSearch] = useState<boolean>(false)

  return (
    <>
        <div className="Navbar">
                <div className="page-wrapper">
                    <div className="nav-wrapper">
                    <div className="grad-bar"></div>
                    <nav className="navbar">
                        <div className="navbar_LogoSearch">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" />
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
                        <ul className={`nav ${ToggleSearch ? 'search' : 'no-search'}`}>
                            <li className="nav-item"><a href="#">Articles</a></li>
                            {/* <li className="nav-item Insciption"><a href="#">Create Post</a></li>
                            <li className="nav-item Notification"><img src={require('../Style/Img/Notification.png')} alt="" /></li>
                            <li className="nav-item Avatar"> <img src={require('../Style/Img/Avatar.png')} alt="" /></li> */}
                            <li  className="nav-item Login"><a href="#">Log in</a></li>
                            <li className="nav-item Insciption"><a href="#">Create Account</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
        </div>
    </>
  );
}

export default Navbar;