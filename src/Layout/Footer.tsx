

import React,{useState,useEffect} from 'react';


function Footer(props:any) {
  return (
    <div className="Footer">
        <p><span>DEV BLOG</span> — A constructive and inclusive social network for software developers. With you every step of your journey.</p>
        <p>Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
        <p>Made with love and Ruby on Rails. DEV Community © 2016 - 2022.</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" />
    </div>
  );
}

export default Footer;