

import React,{useState,useEffect} from 'react';


function Profile(props:any) {
  return (
    <div className="Profile">
        <div className="Profile_SpaceBlac"></div>
        <div className="Profile_UserInfo">
            <img className="Profile_Avatar"  src={require('../Style/Img/Avatar.webp')} alt="" />
            <h1>Faical bahsis</h1>
            <p className="Discription">404 bio not found</p>
            <div className="birthay">
              <img src={require('../Style/Img/birthay.png')} alt="" />
              <p>Joined on 3 juin 2021</p>
              <img src={require('../Style/Img/github.png')} alt="" />
            </div>
            <button>Update</button>
        </div>
        <div className="Profile_MoreInfo">
            <div className="Profile_MoreInfo__Left">
                  <div>
                      <img src={require('../Style/Img/letter.png')} alt="" />
                      <p>6</p>
                      <p>posts published</p>
                  </div>
                  <div>
                      <img src={require('../Style/Img/blogging.png')} alt="" />
                      <p>55</p>
                      <p>comments written</p>
                  </div>
                  <div>
                      <img src={require('../Style/Img/hashtags.png')} alt="" />
                      <p>19</p>
                      <p>tags followed</p>
                  </div>
            </div>
            <div className="Profile_MoreInfo__Right">
                  <h1>My all post</h1>
                  <div className="AllPost">
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                      <div className="AllPost__Post">
                            <div className="AllPost__Post_Titre">
                                  <h2>Next.js Blog Starter with TypeScript and MDX</h2>
                                  <p>Aug 15,2022</p>
                            </div>
                            <div className="AllPost__Post_Action">
                                <img src={require('../Style/Img/file.png')} alt="" />
                                <img src={require('../Style/Img/contract.png')} alt="" />
                                <img src={require('../Style/Img/delete.png')} alt="" />
                            </div>
                      </div>
                  </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;