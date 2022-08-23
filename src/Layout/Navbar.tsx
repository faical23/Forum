

import React,{useState,useEffect,useRef} from 'react';
import '../Style/Navbar.css'
import { Link } from 'react-router-dom';
import Login from '../Compnents/Login'
import CreateArticle from '../Compnents/CreateArticle'
import '../Style/test.scss'
import { useAppSelector, useAppDispatch } from '../Hooks'




function Navbar(props:any) {
    const [OpenLogin ,SetOpenLogin] = useState<boolean>(false)
    const [OpenCreate ,SetOpenCreate] = useState<boolean>(false)
    const [OpenNotification ,SetOpenNotification] = useState<boolean>(false)
    const [iSLogin ,SetiSLogin] = useState<boolean>(false)
    const UserInfo = useAppSelector((state) => state.User)




  return (
    <>
        {
            OpenCreate &&
            <CreateArticle SetOpenCreate={SetOpenCreate}/>
        }
        {
            OpenLogin &&
            <div className="animated bounceInDown">
                <Login SetOpenLogin={SetOpenLogin} iSLogin={iSLogin} SetiSLogin={SetiSLogin} />
            </div>
        }
        {
            OpenNotification &&
                    <div className="NotificationBox">
                                        <div className = "box" style={{
                                                                height: "600px",
                                                                position: "absolute",
                                                                top: "80px",
                                                                zIndex: "100",
                                                            }}>
                                                <div className = "display">
                                                <div className = "cont">
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                    <div className = "sec new">
                                                    <a href = "https://codepen.io/Golez/">
                                                    <div className = "profCont">
                                                    <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                                                        </div>
                                                    <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                                                    <div className = "txt sub">11/7 - 2:13 pm</div>
                                                    </a>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
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
                        <ul className="no-search" style={{width : UserInfo?.name ? "25%" : "20%"}}>
                            <li className="nav-item">
                                <Link to="/Articles">
                                    Articles
                                </Link>
                            </li>

                            {
                                UserInfo?.name !== "" ?
                                <>
                                    <li onClick={()=>{SetOpenCreate(true)}}  className="nav-item Insciption"><a href="#">Create Post</a></li>
                                    <li style={{cursor:'pointer'}} className="nav-item Notification">
                                            <img  onClick={()=>{SetOpenNotification(!OpenNotification)}} src={require('../Style/Img/Notification.png')} alt="" />
                                    </li>
                                    <li className="nav-item Avatar"> 
                                            <Link to={'/Profile/'+UserInfo?.id}>
                                                <img src={require('../Style/Img/Avatar.png')} alt="" />
                                            </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li  className="nav-item Login"><a href="" onClick={(e)=>{
                                            e.preventDefault();
                                            SetOpenLogin(true);
                                            SetiSLogin(true)
                                            }}>Log in</a>
                                    </li>
                                    <li className="nav-item Insciption"><a href="#" onClick={(e)=>{
                                            e.preventDefault();
                                            SetOpenLogin(true)}}>Create Account</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </nav>
                    </div>
                </div>
        </div>
        {/* <header>
<div className = "icons">
    <div className = "notification">
    <a href = "#">
    <div className = "notBtn" >
        <div className = "number">2</div>
        <i className="fas fa-bell"></i>
        <div className = "box">
            <div className = "display">
            <div className = "cont">
                <div className = "sec new">
                <a href = "https://codepen.io/Golez/">
                <div className = "profCont">
                <img className = "profile" src = "https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg" />
                    </div>
                <div className = "txt">James liked your post: "Pure css notification box"</div>
                <div className = "txt sub">11/7 - 2:30 pm</div>
                </a>
                </div>
                <div className = "sec new">
                <a href = "https://codepen.io/Golez/">
                <div className = "profCont">
                <img className = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ" />
                    </div>
                <div className = "txt">Annita liked your post: "Pure css notification box"</div>
                <div className = "txt sub">11/7 - 2:13 pm</div>
                </a>
                </div>
                <div className = "sec">
                <a href = "https://codepen.io/Golez/">
                <div className = "profCont">
                <img className = "profile" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O45RK9qyCrZJivYsY6PmeVEJH07l7bkoolJmscBsNjzump27"/>
                    </div>
                <div className = "txt">Brie liked your post: "Pure css notification box"</div>
                <div className = "txt sub">11/6 - 9:35 pm</div>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
        </a>
    </div>
</div>
        </header> */}

    </>
  );
}

export default Navbar;